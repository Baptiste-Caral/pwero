import React, { useState, useEffect, createContext } from "react"
import api from '../../api'

export const WorkoutContext = createContext()

export const WorkoutProvider = (props) => {
  
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    // get all workouts
    // const token = localStorage.getItem('token')
    // const config = {headers: {'Authorization': `Bearer ${token}`}}
    api.get('workout')
    
      .then(function (response) {
        
        setWorkouts(response.data)
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      
  },[])
  
  
  

return (
  <WorkoutContext.Provider value={[workouts, setWorkouts]}>
    {props.children}
  </WorkoutContext.Provider>
)
}
