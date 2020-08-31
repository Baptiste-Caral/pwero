const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const Exercice = require('./models/Exercice')

mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@cluster0.gufqd.mongodb.net/pwero?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));

// middleware pour les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json())

app.post('/api/new-exrecice', (req, res, next) => {
 const exercice = new Exercice({
   ...req.body
 })
 exercice.save()
 .then(() => (res.status(201).json({message: 'Exercice enregistré !' })))
 .catch(error => res.status(400).json({error: error}))
 console.log(req.body)
} )

app.use('/api/stuff', (req, res, next) => {
  Exercice.find()
  .then(exercices => res.status(200).json(exercices))
  .catch(error => res.status(400).json({error: error}))
  console.log()
  
});
module.exports = app

