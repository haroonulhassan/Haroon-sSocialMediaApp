import { Router } from "express";
import AuthController from "../../../controller/auth/UserAuthentication/userAuthentication.js";
import UserValidation from "../../../validation/Uservalidation/user.js";
const AuthRouter=Router();

AuthRouter.post('/login',UserValidation.Login,AuthController.UserLogin);

export default AuthRouter;