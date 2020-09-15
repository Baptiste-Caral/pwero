const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')



router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/', userCtrl.getUser)
router.get('/:id', userCtrl.getOneUser)
router.get('/userworkouts/:id', userCtrl.getUserWorkouts)
router.post('/userworkouts/:id', userCtrl.modifyUserWorkout)



module.exports = router