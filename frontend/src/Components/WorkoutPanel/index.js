import React, {useEffect, useState, useContext} from 'react'
import {WorkoutContext} from '../Context/WorkoutContext'
import {useParams} from 'react-router-dom'
import AddExerciceToWorkoutForm from '../AddExerciceToWorkoutForm/index'
import {deleteExerciceToWorkout} from '../../apiCalls/index'
import {modifyWorkout} from '../../apiCalls/index'


// icons
import { MdPlusOne } from "react-icons/md"
import { BiReset} from "react-icons/bi"
import { VscCheck } from "react-icons/vsc"
import { MdDeleteForever } from "react-icons/md"

import api from '../../api'

function WorkoutPanel() {

  // get workout _id in url parameter
  let {_id} = useParams()

  const [workouts, setWorkouts] = useContext(WorkoutContext)
  const [workout, setWorkout] = useState({_id: '', exercice: []})

  useEffect(() => {
    getWorkoutById(_id)
  },[_id])

  // Get Workout Values from Api and put them in state
  const getWorkoutById = (id) => {
    api.get(`workout/${id}`)  
    .then(function (response) {
      setWorkout(response.data)  
    })
    .catch(function (error) { 
      console.error(error);
    })
  }
  
  const getValue = (formValues) => {

    //On AddExerciceToWorkoutForm form submit:
    //Add the new exercice in workout
    workout.exercice.push(formValues)
    setWorkout(workout)
  
  // then persist it in database
    modifyWorkout(workout)
  // reload new datas from database
    getWorkoutById(_id)
  }
    const incrementperformedSeries = (index, reset) => {
      if (reset) {
        // Reset PerformedSeries counter
        workout.exercice[index].performedSeries = 0  
      } else if (workout.exercice[index].performedSeries < workout.exercice[index].series) {
          // Increment PerformedSeries counter
          workout.exercice[index].performedSeries ++
      }
      // then persist it in database
      modifyWorkout(workout)
      setWorkout(workout)
      //getWorkoutById(_id)    
  }
  const deleteExerciceToWorkout = (index) => {

    workout.exercice.splice(index, 1)
      // setWorkouts([...workouts], workout)
      modifyWorkout(workout)
      getWorkoutById(_id)
  
    
  }
  function Div() {

    let checked = false

    return(
      workout.exercice.map((exerciceDetails, index) => 

          <div key={index} className="workout-panel-container">
          {exerciceDetails.performedSeries === exerciceDetails.series ? checked = true : checked = false }
          
            <div className="workout-panel-1">
              <h4 className="workout-panel-title">
                {exerciceDetails.name} 
                {checked && <VscCheck />}
              </h4>
              <div><MdDeleteForever color={'#E2697E'} size={32} onClick={() => deleteExerciceToWorkout(index)} /></div>  
            </div>
            <div>{exerciceDetails.reps} Reps</div>
            <div>
              <div className="workout-panel-2" key={index}>
                <div>
                  <div>
                    {exerciceDetails.performedSeries} / {exerciceDetails.series} Séries 
                  </div>  
                </div> 
                
                <div className="workout-panel-increment">
                  <div>
                    {checked && <VscCheck size={32} />}
                    {!checked && <MdPlusOne size={32}  onClick={() => incrementperformedSeries(index)}/>}
                  </div>
                  <div onClick={(reset) => incrementperformedSeries(index, reset)}><BiReset size={32} /></div>
                </div>
              </div>
            </div>
          </div>
        )
        )   
      }
  
    return ( 
        <div className="modify-workout-container">
         <div className="modify-workout-pencil">
          <div>
            <AddExerciceToWorkoutForm getValue={getValue} />
          </div>
          </div>
          <div className="modify-workout-title">  
          {workout.title}
          </div>
          <div>
          <Div />
        </div> 
      </div> 
    )
  }

  export default WorkoutPanel;