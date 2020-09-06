import React, {useEffect, useState, useContext} from 'react'
import {WorkoutContext} from '../Context/WorkoutContext'
import {checkedExerciceToWorkout} from '../../apiCalls/index'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
// import {addExerciceToWorkout} from '../../apiCalls/index'

// icons
import { FaPencilAlt } from "react-icons/fa"
import api from '../../api'

function ModifyWorkout() {

// get workout _id in url parameter
let {_id} = useParams()
const [workout, setWorkout] = useState({_id: '', exercice: []})

useEffect(() => {
  api.get(`workout/${_id}`)
    
  .then(function (response) {
    setWorkout(response.data)      
  })
  .catch(function (error) { 
    console.error(error);
  })
    
},[_id])
  

  const [workouts, setWorkouts] = useContext(WorkoutContext)
  
  // const [value, setValue] = useState('')
  // const [workoutValues, setWorkoutValues] = useState('')
  
  
  // const getSelectedWorkoutDatas = (workout) => {
    
  //   setWorkoutValues(workout)
  // }
  
  // const getValue = (valuefromform) => {
    
  //   setValue(valuefromform)
  //   addExerciceToWorkout(workoutValues, valuefromform, setWorkouts)
  // }
  // const checked = () => {
    
  // }
  // console.log(workout.exercice);
    return ( 
        <div className="modify-workout-container">
         <div className="modify-workout-pencil">
          <Link to={`/modifyworkout/${workout._id}`}>
            <FaPencilAlt color={'#fff'} size={16}/> 
          </Link>
          </div>
          <div className="modify-workout-title">  
          {workout.title}
          </div>
          <div>
          {workout.exercice.map((exerciceTitle, index) =>
            <div className="modify-workout-exercice" key={index}>
              <div className="modify-workout-exercice-title">{exerciceTitle.name}</div>
              <div>{exerciceTitle.reps} Reps</div>
              <div>{exerciceTitle.performedSeries} / {exerciceTitle.series} Séries</div>
              <input type="checkbox" id="scales" name="scales" onChange={() => checkedExerciceToWorkout(workout, index, workouts, setWorkouts)} ></input>
            </div> 
          )}
        </div> 
      </div> 
    )
  }

  export default ModifyWorkout;