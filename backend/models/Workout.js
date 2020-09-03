const mongoose = require('mongoose')



const workoutSchema = mongoose.Schema({
  
    
  title: {type: String},
  exercice: {
    type: [],
    default: undefined
},
  part: {type: String},
  description: {type: String},
  type: {type: String}
  
})
module.exports = mongoose.model('Workout', workoutSchema)
