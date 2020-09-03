import React from 'react'
import NewWorkout from '../NewWorkout'
import Workouts from '../Workouts'



function Home() {

  
    return (
      <div className="home">
        <Workouts /> 
        <NewWorkout />
      </div>   
    );
  }

  export default Home;