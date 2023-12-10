import sequelize from "../../Db/config.js";
import UserModel from "../User/user.js";
import {DataTypes} from "sequelize";

 const userFollowModel=sequelize.define("user_follow",{
   

    followid: {
        type: DataTypes.INTEGER,
        references: {
          model: UserModel,
          key: 'userid'
        }
      },
      followingid: {
        type: DataTypes.INTEGER,
        references: {
          model: UserModel,
          key: 'userid'
        }
      }
 },{
    timestamps:false,
 });

UserModel.belongsToMany(UserModel ,{ through: userFollowModel ,foreignKey:"followid",  as: "Follow" })
UserModel.belongsToMany(UserModel,{ through: userFollowModel,foreignKey:"followingid", as: "Following" })

 export default userFollowModel;

