// package import 
import express, {Express} from 'express'
import dotenv from 'dotenv'

// file import
import workoutRoutes from './routes/workoutRoutes'
import logger from './config/logger'
import connectDB from './config/db'

// config dotenv
dotenv.config()
const PORT = process.env.PORT

// express app 
const app: Express = express()

// mongoDB
connectDB()

// middleware
app.use(express.json())

// routes
app.use("/api/workouts", workoutRoutes)

// listen for request
app.listen(PORT, () => {
    logger.info(`NodeServer on : ${PORT}`)
})