import express from 'express'
import {loingUser, registerUser, adminLogin} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loingUser)
userRouter.post('/admin', adminLogin)

export default userRouter;