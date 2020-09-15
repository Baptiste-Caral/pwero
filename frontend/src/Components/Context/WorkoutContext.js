import React, { useState, useEffect, createContext } from "react"
import { getWorkouts } from '../../apiCalls/index'

export const WorkoutContext = createContext()

export const WorkoutProvider = (props) => {

  const object = [
    {_id: '',
     title: "",
     exercice: [{
      name: '',
      reps: '',
      series: '',
      performedSeries: ''
      }]
    }
  ]
  
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
