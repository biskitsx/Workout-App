// package import 
import express, {Express, NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import config from 'config'
import cookieParser from 'cookie-parser'

// file import
import logger from './utils/logger'
import connectDB from './utils/connectDb'

// routes import
import workoutRoutes from './routes/workoutRoutes'
import userRoutes from './routes/userRoutes'

// config dotenv
dotenv.config()
const PORT = config.get<number>("PORT")

// express app 
const app: Express = express()

// connect to mongoDB
connectDB()

// middleware
app.use(express.json())
app.use(cors({origin: "http://localhost:5173",credentials: true}))
app.use(cookieParser())

// routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

// listen for request
app.listen(PORT,() => {
    logger.info(`NodeServer on : ${PORT}`)
})