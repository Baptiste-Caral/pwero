const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: {type: String, required: true},
  workouts: {
    type: [],
    default: undefined,
    title: {type: String},
    exercice: {
      type: [],
      default: undefined,
      name: {type: String},
      reps: {type: Number},
      series: {type: Number},
      performedSeries: {type: Number},
    }
  },
  customExercices: {
    type: [],
    default: undefined,
    name: {type: String, required: true},
    title: {type: String, required: true},
    link: {type:String}
  }
})
// Pour que l'user ne puisse pas créer la meme adresse mail
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)