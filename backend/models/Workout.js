const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
  
    
  title: {type: String},
  exercice: {
    type: [],
    default: undefined,
    name: {type: String},
    reps: {type: Number},
    series: {type: Number},
    performedSeries: {type: Number}

},
  part: {type: String},
  description: {type: String},
  type: {type: String}
  
})
module.exports = mongoose.model('Workout', workoutSchema)
