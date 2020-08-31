const bcrypt = require('bcrypt')
const User = require('../models/User')

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
        .then(() => res.status(201).json({ message: 'Utilisateur crée !' } ))
        .catch(error => res.status(400).json(error))
    }) 
    .catch(error => res.status(500).json(error))

}

exports.login = (req, res, next) => {
  
}