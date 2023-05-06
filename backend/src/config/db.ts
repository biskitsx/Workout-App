import logger from "./logger";
import mongoose from 'mongoose'

async function connectDB(): Promise<void> {
    try {
        const MONGO_URI = process.env.MONGO_URI
        if (!MONGO_URI) {
            return
        }
        await mongoose.connect(MONGO_URI)
        logger.info("connected to mongoDB")
    } catch(e) {
        logger.error("can't connect to mongoDB")
    }
}

export default connectDB