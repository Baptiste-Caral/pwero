const jwt = require('jsonwebtoken')
const config = require ('../config')

module.exports = (req, res ,next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, config.tokenSecretKey)
   
    const userId = decodedToken.userId
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User Id non valable !';
      
      // Verifie si l'id dans l'url est la meme que celle du payload du token
    } else if (req.params.id && req.params.id !== userId) {
      throw 'User Id non valable !!!'
    } else{
      next()
    }
  } catch (error) {
    res.status(401).json({ error: error} | 'requête non authentifiée ! ')
  }
}