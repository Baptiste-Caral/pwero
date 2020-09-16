import React, {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import AddExerciceToWorkoutForm from '../AddExerciceToWorkoutForm/index'
import {modifyWorkout} from '../../apiCalls/index'
import update from 'immutability-helper'
import {WorkoutContext} from '../Context/WorkoutContext'

// icons
import { MdPlusOne } from "react-icons/md"
import { BiReset} from "react-icons/bi"
import { VscCheck } from "react-icons/vsc"
import { MdDeleteForever } from "react-icons/md"


function Workout() {

  const [workouts, setWorkouts] = useContext(WorkoutContext)

  // get workout _id in url parameter
  let {_id} = useParams()
  
  const init = {_id: null,
    title: "",
    exercice: [{
     name: '',
     reps: '',
     series: '',
     performedSeries: ''
   }]}
  const [workout, setWorkout] = useState(init)
  const [workoutExist, setWorkoutExist] = useState(false)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    
    if (workouts[_id] !== undefined ) {
      setWorkout(workouts[_id])
      setLoading(false)
      setWorkoutExist(true)
    } 
   
  },[workouts, _id,workoutExist])

  const addExercice = (formValues) => {
    // formValues: values from AddExerciceToWorkoutForm

    // Updates inside a nested component doesn't update the state, solution:
      // Use update from the immutability-helper library
      // https://github.com/kolodny/immutability-helper

    // Push formvalues in exercice array inside the workout
    // Equivalent to: workout.exercice.push(formValues)
    const newWorkout = update(workout, {
      exercice: {$push: [formValues]}
    })
    // then update workouts array with the updated workout
    const newWorkouts = update(workouts, {
      [_id]: {$set: newWorkout}
    })
    // Set in Context
    setWorkouts(newWorkouts)
  
    // And PUT in database
    modifyWorkout(newWorkout, _id)
  }

  const incrementperformedSeries = (index, reset) => {

    // RAZ Button
    if (reset) {
      // https://github.com/kolodny/immutability-helper
      // equivalent to: workout.exercice[index].performedSeries = 0
      const newWorkout = update(workout, {
        exercice: {
          [index]: {
            performedSeries: {$set: 0}
          }
        },  
      })

      // setState 
      setWorkout(newWorkout)
      // Persist in DataBase
      modifyWorkout(newWorkout, _id)
  
    // Increment PerformedSeries counter
    } else if (workout.exercice[index].performedSeries < workout.exercice[index].series) {
        // https://github.com/kolodny/immutability-helper
        // equivalent to:  workout.exercice[index].performedSeries ++
        const newWorkout = update(workout, {
          exercice: {
            [index]: {
              performedSeries: {$set: workout.exercice[index].performedSeries + 1 }
            }
          },  
        });
        // set local State 
        setWorkout(newWorkout)
        // PUT in DataBase
        modifyWorkout(newWorkout, _id)
    }   
  }
  const deleteExerciceToWorkout = (index) => {

    // https://github.com/kolodny/immutability-helper 
    // equivalent to: workout.exercice.splice(index, 1) 
    const newWorkout = update(workout, {
      exercice: {$splice: [[index, 1]]}  
    })
    const newWorkouts = update(workouts, {
      [_id]: {$set: newWorkout}
    })
    // set Context State 
    setWorkouts(newWorkouts)
    // Persist in DataBase
    modifyWorkout(newWorkout, _id)
  }


  function Div() {

    let checked = false

    return(
      
      workout.exercice !== undefined && workout.exercice !== null &&

      
      workout.exercice.map((exerciceDetails, index) =>

          <div key={index} className="workout-details-container">
          
          {exerciceDetails.performedSeries === exerciceDetails.series ? checked = true : checked = false }
            <div className="workout-details-1">
              <h4 className="workout-details-title">
                {exerciceDetails.name} 
                {checked && <VscCheck />}
              </h4>
              <div><MdDeleteForever color={'#E2697E'} size={27} onClick={() => deleteExerciceToWorkout(index)} /></div>  
            </div>
            <div>{exerciceDetails.reps} Reps</div>
            <div>
              <div className="workout-details-2" key={index}>
                <div className="workout-details-3">
                  <div className="workout-series">{exerciceDetails.performedSeries}<span className="workout-series-span">/</span> </div>
                  <div className={`${checked ? "workout-series" : "workout-series-undo" }`}>{exerciceDetails.series} </div>
                  <div>&nbsp;Séries</div>
                </div>
                <div className="workout-details-increment">
                  <div>
                    {checked && <VscCheck size={27} />}
                    {!checked && <MdPlusOne size={27} color={'#F8BD33'}  onClick={() => incrementperformedSeries(index)}/>}
                  </div>
                  <div onClick={(reset) => incrementperformedSeries(index, reset)}><BiReset color={'#12C380'} size={27} /></div>
                </div>
              </div>
            </div>
          </div>
      )
    )   
  }
  
    return ( 
        <div className="workout-container">
         <div className="workout-add">
          <div>
            <AddExerciceToWorkoutForm getFormValues={addExercice} />
          </div>
        </div>
          <div className="workout-name">  
          {loading && <div>Loading... </div>}
          {workoutExist && workout.title}
          </div>
          <div className="workout">
          {workoutExist && <Div />}
        </div> 
      </div> 
    )
  }
  export default Workout;