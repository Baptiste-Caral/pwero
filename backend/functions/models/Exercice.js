const mongoose = require('mongoose')

const exerciceSchema = mongoose.Schema({


      name: {type: String, required: true},
      exercices: {
        type: [],
        default: undefined,
        title: {type: String, required: true},
        link: {type:String}
    }

})
module.exports = mongoose.model('Exercice', exerciceSchema)
