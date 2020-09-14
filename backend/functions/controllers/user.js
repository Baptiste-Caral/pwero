const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
          // false pn renvoi une erreur
          if (!valid) {
            res.status(401).json({error: 'Mot de passe incorrect'})
          }
          // True on renvoi l'id de l'utilisateur  et le token dans le json 
          res.status(200).json( {
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          })
        })
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json({ error }))
}