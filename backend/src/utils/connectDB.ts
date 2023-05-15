import logger from './logger'
import mongoose from 'mongoose'
import config from 'config'

async function connectDB(): Promise<void> {
    try {
        const MONGO_URI = config.get<string>("MONGO_URI")
        await mongoose.connect(MONGO_URI)
        logger.info("connected to mongoDB")
    } catch(e) {
        logger.error("can't connect to mongoDB")
    }
}

export default connectDB