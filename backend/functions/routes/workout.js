const express = require('express')
const router = express.Router()

const workoutCtrl = require('../controllers/workout')
const auth = require('../middleware/auth')

router.post('/', workoutCtrl.createWorkout)
router.put('/:id', workoutCtrl.modifyWorkout)
router.delete('/:id', workoutCtrl.deleteWorkout)
router.get('/',workoutCtrl.getWorkout )
router.get('/:id', workoutCtrl.getOneWorkout)

module.exports = router