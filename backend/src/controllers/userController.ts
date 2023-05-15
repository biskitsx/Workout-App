import { Express, Request, Response } from "express"
import User, {IUserDocument}  from "../models/userModel"
import logger from "../utils/logger"
import tokenManager from "../utils/tokenManager"

const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body ;
    try {
        const user = await User.login(email, password) 
        const token = await tokenManager.createToken(user._id);
        res.cookie("auth", token)
        logger.info(`${user.email} has logged in`)
        res.status(200).json({user})
    } catch(e: any) {
        logger.error(e.message)
        res.status(400).json({error: e.message})
    }
}

const signupUser = async (req: Request, res: Response) => {
    const {email, password} = req.body ;
    console.log(email, password)
    try {
        const user = await User.signUp(email, password)
        const token = await tokenManager.createToken(user._id);
        res.cookie("auth", token)
        res.status(201).json({token, user})
    } catch(e: any) {
        logger.error(e.message)
        res.status(405).json({msg: e.message})
    }
}

const sendToken = async (req: Request, res: Response) => {
    try {
        // const user = await User.signUp(email, password)
        const token = await tokenManager.createToken("123123");
        res.cookie("auth", token,{
            httpOnly: true
        }).send()
        logger.info("send token")
        // res.status(201).json({msg: "sendToken successfully"})
    } catch(e: any) {
        logger.error(e.message)
        res.status(400).json({msg: e.message})
    }
}



export {loginUser, signupUser, sendToken}