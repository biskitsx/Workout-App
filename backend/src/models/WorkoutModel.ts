import mongoose, { model, Document } from "mongoose";

// interface IWorkout {
//     title: string,
//     reps: number,
//     load: number
// }

// interface IWorkoutDocument extends IWorkout, Document {
//     createAt: Date,
//     updateAt: Date
// }

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

const Workout = mongoose.model("Workout", workoutSchema)
export default Workout