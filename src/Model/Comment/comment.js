import sequelize from "../../Db/config.js";
// import {DataTypes} from "sequelize";
import PostModel from "../Post/post.js";
import UserModel from "../User/user.js";

 const CommentModel=sequelize.define("comment",{
   //  commentid:{
   //      type:DataTypes.INTEGER,
   //      primaryKey:true
   //  },
   
 },{
    createdAt:true,
    updatedAt:false
 });

 PostModel.hasMany(CommentModel,{
   onDelete:'CASCADE',
 });
 CommentModel.belongsTo(PostModel);

 UserModel.hasMany(CommentModel,{
   onDelete:'CASCADE',
 });
 CommentModel.belongsTo(UserModel);


 export default CommentModel;