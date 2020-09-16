const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middleware/auth')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/', userCtrl.getUser)
router.get('/:id', userCtrl.getOneUser)
router.get('/userworkouts/:id',auth ,userCtrl.getUserWorkouts)
router.post('/userworkouts/:id', userCtrl.AddNewUserWorkout)
router.get('/userworkouts/:id/:index', userCtrl.getOneUserWorkout)
router.put('/userworkouts/:id/:index', userCtrl.modifyOneUserWorkout)


module.exports = router