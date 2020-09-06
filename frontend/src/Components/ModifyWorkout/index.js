import React, {useEffect, useState, useContext} from 'react'
import {WorkoutContext} from '../Context/WorkoutContext'
import {deleteExerciceToWorkout} from '../../apiCalls/index'
import {addExerciceToWorkout} from '../../apiCalls/index'
import {useParams} from 'react-router-dom'

// Components
import AddExerciceToWorkoutForm from '../AddExerciceToWorkoutForm/index'

// icons
import { MdDeleteForever } from "react-icons/md"

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
  const [workoutValues, setWorkoutValues] = useState('')
  
  // const [value, setValue] = useState('')
  
  const getSelectedWorkoutDatas = (workout) => {
    
    setWorkoutValues(workout)
  }
  
  const getValue = (valuefromform) => {
    // setValue(valuefromform)
    addExerciceToWorkout(workoutValues, valuefromform, setWorkouts)
  }
  
    return (
      
        <div className="modify-workout-container">
          <div className="modify-workout-title">{workout.title}</div>
          <div onClick={()=>getSelectedWorkoutDatas(workout)}>
            <AddExerciceToWorkoutForm getValue={getValue} />
          </div>
          <div>{workout.exercice.map((exerciceTitle, index) =>
            <div className="modify-workout-exercice" key={index}>
            <div className="modify-workout-exercice-title">{exerciceTitle.name}</div>
            <div><MdDeleteForever color={'#E2697E'} size={32} onClick={() => deleteExerciceToWorkout(workout, index, workouts, setWorkouts)}/></div>    
          </div> 
        )}
      </div> 
        </div>
        
      
    );
  }

  export default ModifyWorkout;