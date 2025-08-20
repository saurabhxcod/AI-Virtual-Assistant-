import express from 'express'
import { login, logout, signUp } from '../controllers/user.controller.js';
const userRouter=express.Router();

userRouter.post("/signup",signUp);
userRouter.post("/login",login);
userRouter.get("/logout",logout);

export default userRouter;

