
import UserModel from "../model/User/user.js";
import PostModel from "../model/Post/post.js";
import LikeModel from "../model/Like/like.js";
import CommentModel from "../model/Comment/comment.js";
import userFollowModel from "../model/UserFollow/userFollow.js";

const Init=async()=>{

    try{

     
        await UserModel.sync({
            alter:true,
            force:false
        });
       
        await userFollowModel.sync({
            alter:true,
            force:false
        });
        await PostModel.sync({
            alter:true,
            force:false
        });
         await LikeModel.sync({
            alter:true,
            force:false
        });
       
        await CommentModel.sync({
            alter:true,
            force:false
        });
        


    }catch(error){
        // console.log("There is some Error migrating the tables...")
        console.log(error)
    }

}
export default Init;