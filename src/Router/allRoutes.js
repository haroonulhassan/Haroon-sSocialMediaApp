import { Router } from "express";

import UserRouter from "./User/user.js";
import PostRouter from "./Posts/posts.js";
import LikeRouter from "./Likes/Likes.js";
import CommentRouter from "./comment/comment.js";
import User_FollowRouter from "./Followers/follower.js";
import AuthRouter from "./auth/userauth/userauth.js";
import searcherrouter from "./Searcher/searcher.js";


const AllRoutes=Router();
AllRoutes.use('/user',UserRouter);
AllRoutes.use('/post',PostRouter);
AllRoutes.use('/like',LikeRouter);
AllRoutes.use('/comment',CommentRouter);
AllRoutes.use('/follower',User_FollowRouter);
AllRoutes.use('/authuser',AuthRouter);
AllRoutes.use('/find',searcherrouter);






export default AllRoutes;