const express = require('express')
const router = express.Router()

const exerciceCtrl = require('../controllers/exercice')
const auth = require('../middleware/auth')

router.post('/', auth, exerciceCtrl.createExercice)
router.put('/:id', auth, exerciceCtrl.modifyExercice)
router.delete('/:id', auth, exerciceCtrl.deleteExercice);
router.get('/', auth, exerciceCtrl.getExercice )
router.get('/:id',auth, exerciceCtrl.getOneExercice)

module.exports = router