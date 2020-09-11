import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import AddExerciceToWorkoutForm from '../AddExerciceToWorkoutForm/index'
import {modifyWorkout} from '../../apiCalls/index'


// icons
import { MdPlusOne } from "react-icons/md"
import { BiReset} from "react-icons/bi"
import { VscCheck } from "react-icons/vsc"
import { MdDeleteForever } from "react-icons/md"

import api from '../../api'

function Workout() {

  // get workout _id in url parameter
  let {_id} = useParams()
  const demo = {_id: 345,
    title: "seance demo 2",
    exercice: [{
     name: 'développé incliné',
     reps: 10,
     series: 4,
     performedSeries: 0
   },
   {
     name: 'pompes',
     reps: 10,
     series: 10,
     performedSeries: 0
   },
   {
     name: 'pompes',
     reps: 10,
     series: 10,
     performedSeries: 0
   }]}
  const [workout, setWorkout] = useState(demo)

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
      //setWorkout(workout) WTF ça marche pas => voir PK???
      getWorkoutById(_id)    
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
            <AddExerciceToWorkoutForm getValue={getValue} />
          </div>
        </div>
          <div className="workout-name">  
          {workout.title}
          </div>
          <div>
          <Div />
        </div> 
      </div> 
    )
  }

  export default Workout;