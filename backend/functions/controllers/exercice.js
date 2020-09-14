const Exercice = require('../models/Exercice')

exports.createExercice = (req, res, next) => {

  const exercice = new Exercice({
    ...req.body
  })
  exercice.save()
  .then(() => (res.status(201).json({message: 'Exercice enregistré !' })))
  .catch(error => res.status(400).json({error: error}))
  console.log(req.body)
}
exports.getExercice = (req, res, next) => {
  Exercice.find()
  .then(exercice => res.status(200).json(exercice))
  .catch(error => res.status(400).json({error: error}))
  
}
exports.getOneExercice = (req, res, next) => {
  Exercice.findOne({ _id: req.params.id })
    .then(exercice => res.status(200).json(exercice))
    .catch(error => res.status(404).json({ error }));
}
exports.modifyExercice = (req, res, next) => {
  Exercice.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
  .then(() => res.status(200).json( {message: 'Exercice modifié !'} ))
  .catch(error => res.status(400).json({ error }))
}
exports.deleteExercice = (req, res, next) => {
  Exercice.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Exercice supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}