import sequelize from "../../Db/config.js";
import PostModel from "../Post/post.js";
import UserModel from "../User/user.js";

 const LikeModel=sequelize.define("like",{
   
   
 },{
    createdAt:true,
    updatedAt:false
 });

 PostModel.hasMany(LikeModel,{
   onDelete:'CASCADE',
 });
 LikeModel.belongsTo(PostModel);


 UserModel.hasMany(LikeModel,{
   onDelete:'CASCADE',
 })
 LikeModel.belongsTo(UserModel)


 export default LikeModel;