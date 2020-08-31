const mongoose = require('mongoose')

const exerciceShcema = mongoose.Schema({
  title: {type: String, required: true},
  limb: {type: String, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true}
  
})
module.exports = mongoose.model('Exercice', exerciceShcema)
