const Workout = require('../models/Workout')

exports.createWorkout = (req, res, next) => {

  const workout = new Workout({
    ...req.body
  })
  workout.save()
  .then(() => (res.status(201).json({message: 'Workout enregistré !' })))
  .catch(error => res.status(400).json({error: error}))
  console.log(req.body)
}
exports.getWorkout = (req, res, next) => {
  Workout.find()
  .then(workout => res.status(200).json(workout))
  .catch(error => res.status(400).json({error: error})) 
}
exports.getOneWorkout = (req, res, next) => {
  console.log(req);
  Workout.findOne({ _id: req.params.id })
    .then(workout => res.status(200).json(workout))
    .catch(error => res.status(404).json({ error }));
}
exports.modifyWorkout = (req, res, next) => {
  Workout.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
  .then(() => res.status(200).json( {message: 'Workout modifié !'} ))
  .catch(error => res.status(400).json({ error }))
}
exports.deleteWorkout = (req, res, next) => {
  Workout.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Workout supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}
