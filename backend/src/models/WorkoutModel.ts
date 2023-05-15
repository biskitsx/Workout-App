import mongoose, { model, Document } from "mongoose";

export interface IWorkout {
    title: string,
    reps: string,
    load: string
}

export interface IWorkoutDocument extends IWorkout, Document {
    createdAt: Date,
    updatedAt: Date
}

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const Workout = mongoose.model<IWorkoutDocument>("Workout", workoutSchema)
export default Workout