import React, {useContext} from 'react'
import {WorkoutContext} from '../Context/WorkoutContext'
import {Link} from 'react-router-dom'

// icons
import { BiDumbbell } from "react-icons/bi"
import { AiFillPlusCircle } from "react-icons/ai" 
import { FaPencilAlt } from "react-icons/fa"
import { GiRunningShoe } from "react-icons/gi"


function Workouts() {

  const [workouts, setWorkouts] = useContext(WorkoutContext)
  
  let title = workouts.map((workout)=> 
  <div key={workout._id} className="wave-container">   
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2F313E" d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>    
    </svg>
    <div className="workout-container" key={workout._id}>
   
      <div className="workout-title">
        <div>
          {workout.title} 
        </div>
        <div> 
          <Link to={`/modifyworkout/${workout._id}`}>
            <FaPencilAlt color={'#fff'} size={16}/> 
          </Link>
        </div>
      </div>
        <div className="workout">
          <div >
          <BiDumbbell className="dumbbell" size={32}/>
          {workout.exercice.length} {`${workout.exercice.length > 1 ? 'exercices' : 'exercice'}`}
          </div> 
        </div>
        <div className="workout">
            <div>Go !</div>
            <Link to={`/workout/${workout._id}`}>
              <GiRunningShoe className="dumbbell" size={32}/> 
            </Link>
            
           
        </div>   
    </div>
  </div>
    
  
    
  )
  
  // let limb = exercices.map((item, i ) => <p key={i}>{item.limb}</p>)
  
    return (
      <div>
        <div className="workouts-container">
        <div className="workouts-header">
          <div className="workouts-title">Mes Workouts</div>
          <div className="workouts-add">
            <AiFillPlusCircle size={32} onClick={()=>alert('click')}/>
          </div>
        </div>
          
          <div className="workouts">{title}</div>
          
        </div>
        
      </div>
        

        
      
    );
  }

  export default Workouts;