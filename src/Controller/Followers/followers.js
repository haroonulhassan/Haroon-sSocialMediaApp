import userFollowModel from "../../model/UserFollow/userFollow.js";
import UserModel from "../../model/User/user.js";
import PostModel from "../../model/Post/post.js";
const FollowerController={

     CreateFollower:async(req,res)=>{
        try{

            const {followid,followingid}=req.body;
            const data= await  userFollowModel.create({
                followid,
                followingid

            })
         
            return res.json({
                message:"Data is Inserted...",
                data,
            })


        }catch(error){
            return res.status(500).json({
                Message:"The error occur while adding new user..."
            })
        }
    },
    SearchFollower:async(req,res)=>{
        try{ 
            const {search}=req.params;
            const data=await  UserModel.findAll({

                where:{
                    userid:search,
                },
            
               
                include:[{
                    model:UserModel,
                    as:"Following",
                   
                    
             
                }],
                
          
                
               
            })

            return res.json({
                data,
            })



        }catch(error){
            return res.status(500).json({
                message:"there is something wrong"
            })
        }
    },
    UpdateFollower:async(req,res)=>{
        try{
            const {followid,followingid}=req.body;
            const data=await  userFollowModel.findOne({
                where:{
                    followid,
                }
            })
            data.followid=followid,
            data.followingid=followingid
         
            const newdata= await data.save()
            return res.json({
                Message:"Data Updated...",
                newdata,
            })
        }
        catch(error){

            res.json({
                Message:error,
            })


        }
    },
    RemoveFollower:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await  userFollowModel.findOne({
                where:{
                    followerid:del,
                }
               
                
            })
            await data.destroy()

            return res.json({
                message:"This Entry is Deleted...",
               
            })



        }catch(error){
            return res.status(500).json({
                message:error
            })
        }


    },
    DisplayFollower:async(req,res)=>{

        try{
            const data= await  userFollowModel.findAll()
            res.json({
                data
            })


        }catch(error){
            return res.status(500).json({
                message:error
            })
        }

    }

}


export default FollowerController;