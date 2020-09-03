const express = require('express')
const router = express.Router()

const workoutCtrl = require('../controllers/workout')
const auth = require('../middleware/auth')

router.post('/', auth, workoutCtrl.createWorkout)
router.put('/:id', auth, workoutCtrl.modifyWorkout)
router.delete('/:id', auth, workoutCtrl.deleteWorkout)
router.get('/', auth, workoutCtrl.getWorkout )
router.get('/:id',auth, workoutCtrl.getOneWorkout)

module.exports = router