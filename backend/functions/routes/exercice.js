const express = require('express')
const router = express.Router()

const exerciceCtrl = require('../controllers/exercice')
const auth = require('../middleware/auth')

router.post('/', exerciceCtrl.createExercice)
router.put('/:id', auth, exerciceCtrl.modifyExercice)
router.put('/add/:name',auth, exerciceCtrl.addExercice)
router.delete('/:id', auth, exerciceCtrl.deleteExercice);
router.get('/', exerciceCtrl.getExercice )
router.get('/:id', exerciceCtrl.getOneExercice)

module.exports = router