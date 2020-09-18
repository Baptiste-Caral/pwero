import React, {useContext, useEffect, useState} from 'react'
import {WorkoutContext} from '../Context/WorkoutContext'
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Loader from '../Loader'

// icons
import { BiDumbbell } from "react-icons/bi"
import { BsPlayFill } from "react-icons/bs"
import { IoIosAddCircle } from "react-icons/io"


function Workouts() {

  const [workouts] = useContext(WorkoutContext)
  const [user, setUser] = useContext(UserContext)
  

  const token = localStorage.getItem("token")

  const tokenIsExpired = (token) => {
    if (token && jwt.decode(token)) {
      const expiry = jwt.decode(token).exp;
      const now = new Date();
      return now.getTime() > expiry * 1000;
    }
    return false;
}
  
  useEffect(() => {
    if(tokenIsExpired(token)) {
      localStorage.removeItem("token")
      setUser(false)
      window.location.reload(false)
    } 
  })
   
  let workoutsList =
  
  workouts.list && workouts.list.map((workout, index)=> 
    <Link key={index} className="link" to={`/workout/${index}`}>          
      <div className="workouts-container" >
        <div className="workouts">
            <div className="verticalcenter">
              <BiDumbbell className="dumbbell" size={32}/>
            </div>
            <div className="workout-title">
              <h4>{workout !== null && workout.title}</h4>
              <div className="verticalcenter"><BsPlayFill color='#12C380'/>Go!</div>
            </div>
            <div>
              <div className="workouts-exercice-number">{workout !== null && workout.exercice.length}</div>
              <div className="workouts-exercices">{`${workout !== null && workout.exercice.length > 1 ? 'exercices' : 'exercice'}`}</div>
            </div>
          </div>
      </div>
    </Link>
  )
  
  // let limb = exercices.map((item, i ) => <p key={i}>{item.limb}</p>)
  
    return (
      <div>
        <div className="workouts-container">
          <div className="workouts-header">
            <div className="workouts-title">Mes Entraîenements</div> 
          </div>
          <div className="wave-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#2F313E" d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>    
            </svg>
            <div className="workouts-list">{workoutsList}{workouts.loading && <Loader />}</div>
        
            {!workouts && 
              <div className="workouts-container">Pas encore de workouts</div>}
          </div>   
            <div className="workouts-add">
            <Link to='/new-workout'>
              <IoIosAddCircle size={48} color={'#F8BD33'}/>
            </Link>
            </div> 
        </div>
      </div> 
    );
  }

  export default Workouts;