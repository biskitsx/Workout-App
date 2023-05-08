import express, { Router } from 'express'
import {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} from '../controllers/workoutController'


const router: Router = express.Router()

router.get('/',getWorkouts)
router.get('/:id',getWorkout)
router.post('/',createWorkout)
router.patch('/:id',updateWorkout)
router.delete('/:id',deleteWorkout)

export default router