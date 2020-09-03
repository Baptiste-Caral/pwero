import React, {useState, useContext} from 'react'
import {WorkoutContext} from '../Context/WorkoutContext'
// import NewExercice from '../NewExercice'
import api from '../../api'
import AddExerciceToWorkoutForm from '../NewWorkout/NewWorkoutForm/index'
import { MdDeleteForever } from "react-icons/md"
import { AiFillPlusCircle } from "react-icons/ai"



function Exercices() {

  const [workouts, setWorkouts] = useContext(WorkoutContext)
  const [clickedButton, setClickedButton] = useState(false)
  
  const handleClickAddButton = () => {
  setClickedButton(true)
  console.log(clickedButton);
  }

  const deleteExercice =  (workout, index) => {
   
    
    workout.exercice.splice(index, 1)
    setWorkouts([...workouts], workout)
    console.log(workout);

    // Put new array in database
    api.put(`/workout/${workout._id}`, workout)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  
  let title = workouts.map(workout => 
    
  <div className="workout-container" key={workout._id}>
    <div>Ajouter un exercice <AiFillPlusCircle /></div>
    <AddExerciceToWorkoutForm />
    <div>{workout.title}</div>
    <div>{workout.exercice.map((exo, index) =>
      <div key={index}>
        {exo}
        <MdDeleteForever onClick={() => deleteExercice(workout, index)}/>
      </div> 
    )}
    </div> 
  </div>
  )
  
  // let limb = exercices.map((item, i ) => <p key={i}>{item.limb}</p>)
  // let description = exercices.map((item, i ) => <p key={i}>{item.description}</p>)
  // let type = exercices.map((item, i ) => <p key={i}>{item.type}</p>)
  
    return (
      
        <div className="exercices-container">
        <button onClick={handleClickAddButton}>New Workout</button>
          <div>{title}</div>  
        </div>
        
      
    );
  }

  export default Exercices;