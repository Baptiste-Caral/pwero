import React,{ useState, useContext } from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import {WorkoutContext} from '../Context/WorkoutContext'
import api from '../../api'
import {getWorkouts} from '../../apiCalls'
import { useHistory } from "react-router-dom";

function NewWorkout () {
  const [workouts, setWorkouts] = useContext(WorkoutContext)
  const exercices = useContext(ExerciceContext)

  const exercicesTitles = exercices[0].map(exerciceTitle => exerciceTitle.title)
const history = useHistory()
  const [form, setForm] = useState({
    title: 'Workout',
    exercice: [
      {
      name: exercicesTitles[0],
      reps: 0,
      series: 0,
      performedSeries: 0
    }
  ] 
  })
  const initialExercice = [{
    name: exercicesTitles[0],
    reps: 1,
    series: 1,
    performedSeries: 0
  }]
  const [exerciceArray, setExerciceArray] = useState(initialExercice)

  const handleChange = (event) => {

    const name = event.target.name
     setForm({
       ...form,
       [name]: event.target.value  
    }) 
  }
  const handleChangeExercice = (event) => {
    const name = event.target.name  
     setExerciceArray({
      ...exerciceArray,
      [name]: event.target.value  
   }) 
    }

    const handleSubmitNewExercice = (event) => {

      event.preventDefault()
      // Delete initial exercice from initial state
      if (exerciceArray.name === undefined ) {
        alert("choisir un exercice")
      } else if (exerciceArray.reps === undefined) {
        alert("definir le nombre de répétition")
      }else if (exerciceArray.series === undefined) {
        alert("definir le nombre de séries")
      }else {

        if (form.exercice[0].reps === 0 && form.exercice[0].series === 0) {
          form.exercice.splice(0, 1)
        }

        // Push the new exercice in the workout
        form.exercice.push(exerciceArray)
        setForm({...form, form})
        // reset form values
        setExerciceArray({
        ...exerciceArray,
        name: exercicesTitles[0],
        reps: 1,
        series: 1,
      })
      } 
  }
  const handleSubmit = (event) => {
    
    event.preventDefault()
  
    // Put Values 
    api.post('workout', form )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) { 
        console.error(error);
      })
    getWorkouts(setWorkouts)
    history.push('/');
   
  }

  return (
    <form className="new-workout-container" >

      <div onChange={handleChange}>
        <input className="new-workout-title" name="title" defaultValue={form.title}/>
      </div>

      <div className="new-workout-exercices" onChange={handleChangeExercice}>
          {/* REPS */}
          <div className="new-workout-reps">
            
            <select name="reps" id="add-reps" value={exerciceArray.reps}>
              <option value="" selected disabled hidden>Choose here</option>
              {[...Array(20)].map((x, i) => 
                <option key={i} value={i+1}>{i+1}</option>
              )}
            </select>
          </div>
          {/* SERIES */}
          <div className="new-workout-series">
            
            <select name="series" id="add-series" value={exerciceArray.series}>
              <option value="" selected disabled hidden>Choose here</option>
              {[...Array(10)].map((x, i) => 
                <option key={i} value={i+1}>{i+1}</option>
              )}
            </select>
          </div>
          {/* EXERCICES */}
          <div className="new-workout-select">
            <select name="name" onChange={handleChange} value={exerciceArray.name}>
              <option value="" selected disabled hidden>Choose here</option>
              {exercicesTitles.map((option, i) => 
                <option key={i} value={option}>{option}</option>
              )}
            </select>
            <button onClick={handleSubmitNewExercice}>Ajouter Exercice !</button>
          </div>
      </div>
          {/* EXERCICES DATAS */}
          <div lassName="new-workout-datas-container">
            {form.exercice[0].reps !== 0 && form.exercice.map((exercice, i) => 
            <div className="new-workout-datas" key={i}>
              <div>{exercice.name}</div>
              <div>{exercice.reps} reps</div>
              <div>{exercice.series} series</div>
            </div>
            )}
          </div>
      <button onClick={handleSubmit}>Créer ce workout !</button>
    </form>
  )
}
export default NewWorkout