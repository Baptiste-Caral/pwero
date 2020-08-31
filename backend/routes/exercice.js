const express = require('express')
const router = express.Router()
const exerciceCtrl = require('../controllers/exercice')

router.post('/', exerciceCtrl.createExercice)
router.put('/:id', exerciceCtrl.modifyExercice)
router.delete('/:id', exerciceCtrl.deleteExercice);
router.get('/', exerciceCtrl.getExercice )
router.get('/:id', exerciceCtrl.getOneExercice)

module.exports = router