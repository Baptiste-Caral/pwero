const functions = require('firebase-functions');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const exerciceRoutes = require('./routes/exercice')
const userRoutes = require('./routes/user')
const workoutRoutes = require('./routes/workout')

const PORT = 3000
// Connect to Database
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

app.use('/api/exercice', exerciceRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/workout', workoutRoutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})





exports.app = functions.https.onRequest(app)

// const http = require('http')
// const app = require('./app')
// const server = http.createServer(app)
// app.set('port', process.env.PORT || 8080)

// server.listen(process.env.PORT || 8080)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
