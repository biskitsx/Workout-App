import express, { Router } from 'express'
const router: Router = express.Router()
import {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} from '../controllers/workoutController'

router.get('/',getWorkouts)
router.get('/:id',getWorkout)
router.post('/',createWorkout)
router.patch('/:id',updateWorkout)
router.delete('/:id',deleteWorkout)

export default router