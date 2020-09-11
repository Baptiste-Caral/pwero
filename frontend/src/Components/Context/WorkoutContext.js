import React, { useState, useEffect, createContext } from "react"
import { getWorkouts } from '../../apiCalls/index'

export const WorkoutContext = createContext()

export const WorkoutProvider = (props) => {

  const object = [
    {_id: 123,
     title: "seance demo1",
     exercice: [{
      name: 'développé couché',
      reps: 10,
      series: 5,
      performedSeries: 0
      },
      {
        name: 'abdos',
        reps: 10,
        series: 5,
        performedSeries: 0
       }]
    },
    
    {_id: 345,
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
      }]
    
    }]
  
  const [workouts, setWorkouts] = useState(object)
  
  
    useEffect(() => {
      // get all workouts from Api
      getWorkouts(setWorkouts)  
  },[])
  
  
  

return (
  <WorkoutContext.Provider value={[workouts, setWorkouts]}>
    {props.children}
  </WorkoutContext.Provider>
)
}
