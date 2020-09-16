const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

const User = require('../models/User')

exports.getUser = (req, res, next) => {
  User.find()
  .then(user => res.status(200).json(user))
  .catch(error => res.status(400).json({error: error})) 
}
exports.getOneUser = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
}
exports.getOneUserWorkout = (req, res, next) => {
  User.findOne({ _id: req.params.id}, )
    .then(user => res.status(200).json(user.workouts[req.params.index]))
    .catch(error => res.status(404).json({ error }));
}
exports.modifyOneUserWorkout = (req, res, next) => {
  User.updateOne({ _id: req.params.id}, { $set: {[`workouts.${req.params.index}`]: req.body}})
    .then(user => res.status(200).json("user.workouts[req.params.index]"))
    .catch(error => res.status(404).json({ error }));
}
exports.getUserWorkouts = (req, res, next) => { 
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user.workouts))
    .catch(error => res.status(404).json({ error }));
}

exports.AddNewUserWorkout = (req, res, next) => {
  User.updateOne({ _id: req.params.id},{ $push: {"workouts":req.body} })
  .then(() => res.status(200).json( {message: 'Workout ajouté !'}))
  .catch(error => res.status(400).json({ error }))
  console.log(req.body)
}

exports.signup = (req, res, next) => {
  // Hash du password avant de l'envoyer en BDD
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      // Injection de l'email + password hashé dans le model User
      const user = new User({
        email: req.body.email,
        password: hash
      })
      
      // Envoi vers la BDD 
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur crée !' }))
        .catch(error => res.status(400).json(error))
    }) 
    .catch(error => res.status(500).json(error))

}

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user) {
        res.status(401).json({error: 'Utilisateur non trouvé'})
      }
      bcrypt.compare(req.body.password, user.password)
      // bcryt renvoi true ou false (on recupere ce boolean dans valid)
        .then(valid => {
          // false on renvoi une erreur
          if (!valid) {
            res.status(401).json({error: 'Mot de passe incorrect'})
          }
          // True on renvoi l'id de l'utilisateur  et le token dans le json 
          res.status(200).json( {
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              config.tokenSecretKey,
              { expiresIn: '24h' }
            )
          })
        })
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json({ error }))
}