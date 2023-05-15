import express, { Router } from 'express'
import { loginUser, sendToken, signupUser } from '../controllers/userController'
const router: Router = express.Router()

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.get('/token', sendToken)

export default router