import express , {Request, Response} from 'express'
import Workout from '../models/WorkoutModel'
import logger from '../config/logger'
import mongoose from 'mongoose'

// create Workout
async function createWorkout(req: Request, res: Response): Promise<void> {
    try {
        const {title, load, reps} = req.body
        const EmptyFields = []
        // validation
        if (!title) {
            EmptyFields.push('title')
        }
        if (!load) {
            EmptyFields.push('load')
        }
        if (!reps) {
            EmptyFields.push('reps')
        }
        logger.info("here")
        if (EmptyFields.length > 0) {
            res.status(400).json({error: "please fill in all the fields", EmptyFields})
            return
        }
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(e: any) {
        res.status(400).json({error: e.message})
    }
}

// get all workouts
async function getWorkouts(req: Request, res: Response): Promise<void> {
    try {
        const workouts = await Workout.find({})
        res.status(200).json(workouts)
    } catch(e: any) {
        res.status(400).json({error : e.message})
    }
}

// get single workout
async function getWorkout(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({error: "No such workout"})
            return 
        } 
        const workout = await Workout.findById(id)
        res.status(200).json({workout})
    } catch(e: any) {
        res.status(400).json({error : e.message})
    }
    
}

// delete workout
async function deleteWorkout(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({error: "No such workout"})
            return
        }
        const workout = await Workout.findByIdAndDelete(id)
        res.status(200).json({workout})
    } catch(e: any) {
        res.status(400).json({error : e.message})
    }
}

// update workout
async function updateWorkout(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({error: "No such workout"})
            return
        }
        const workout = await Workout.findByIdAndUpdate(id, {
            ...req.body // can update with single value or all of them 
        })
        res.status(200).json({workout})
    } catch(e: any) {
        res.status(400).json({error : e.message})
    }
}

export {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout}

