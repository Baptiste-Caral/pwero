import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { WorkoutContext } from '../Context/WorkoutContext'
import { getWorkouts } from "../../apiCalls"

function Nav() {

  const [user, setUser] = useContext(UserContext)
  const [workouts, setWorkouts] = useContext(WorkoutContext)
  if(user) {
    
  }
      const disconnect = () => {
        localStorage.setItem("token", "")
        setUser(false)
        getWorkouts(setWorkouts)   
      }
    
  return (
    <div>
      <nav>
        <Link className="logo" to="/">Pwero</Link>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exercices">Exercices</Link>
            </li>
            {!user &&
            <li>
              <Link to="/login">Login</Link>
            </li>}
            {user &&
            <li>
              <Link onClick={disconnect} to="/">Déconnexion</Link>
            </li>
            }
          </ul>
        </div>
      </nav>
        <div className="loginfo">
        
        {!user && <Link className="link" to="/login"><div>Connectez-vous pour créer vos propres entraînements !</div></Link> }
      </div>   

    </div>
  );
}

export default Nav;