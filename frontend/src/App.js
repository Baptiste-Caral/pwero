// npm
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Home from './Components/Home'
import Login from './Components/Login'
import Exercices from './Components/Exercices'
import Workout from './Components/Workout'
import NewWorkout from './Components/NewWorkout'

// Css
import './App.css'

// Contexts
import { ExerciceProvider } from '../src/Components/Context/ExerciceContext'
import { WorkoutProvider } from '../src/Components/Context/WorkoutContext'

function App() {
  return (

  <WorkoutProvider>
    <ExerciceProvider>
      <div className="App">
          <Router>
            <div>
              <nav>
              <Link className="logo" to="/">Pwero</Link>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/exercices">Exercices</Link>
                  </li>
                </ul>
              </div>
                
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/exercices">
                  <Exercices />
                </Route>
                <Route path="/workout/:_id">
                  <Workout />
                </Route>
                <Route path="/new-workout/">
                  <NewWorkout />
                </Route>
              </Switch>
            </div>
          </Router>  
      </div>
    </ExerciceProvider>  
  </WorkoutProvider>

  );
}

export default App;
