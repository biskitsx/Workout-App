import express, { Router } from 'express'
import workoutController from '../controllers/workoutController'

const router: Router = express.Router()

router.get('/',workoutController.getAll)
router.get('/:id',workoutController.getSingle)
router.post('/',workoutController.post)
router.patch('/',workoutController.patch)
router.delete('/',workoutController.del)

export default router