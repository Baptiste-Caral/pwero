const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middleware/auth')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/', userCtrl.getUser)
router.get('/:id', userCtrl.getOneUser)
router.get('/userworkouts/:id', auth,userCtrl.getUserWorkouts)
router.post('/userworkouts/:id', auth, userCtrl.AddNewUserWorkout)
router.get('/userworkouts/:id/:index', auth, userCtrl.getOneUserWorkout)
router.put('/userworkouts/:id/:index', auth, userCtrl.modifyOneUserWorkout)
router.post('/addexercice/:id', auth, userCtrl.AddCustomExercice)
router.get('/custom/:id', auth, userCtrl.getCustomExercices)
router.delete('/userworkouts/:id/:title', auth, userCtrl.deleteWorkout)



module.exports = router