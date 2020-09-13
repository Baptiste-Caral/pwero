import React,{ useState, useContext, useEffect } from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import {WorkoutContext} from '../Context/WorkoutContext'
import api from '../../api'
import {getWorkouts} from '../../apiCalls'
import { useHistory } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io"
import { AiFillWarning } from "react-icons/ai"



function NewWorkout () {
  const [workouts, setWorkouts] = useContext(WorkoutContext)
  const exercices = useContext(ExerciceContext)
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(true)

  const exercicesTitles = exercices[0].map(exerciceTitle => exerciceTitle.title)
  const history = useHistory()
  
  const [form, setForm] = useState({
    title: '',
    exercice: [
      {
      name: exercicesTitles[0],
      reps: 0,
      series: 0,
      performedSeries: 0
    }
  ]} )
  const initialExercice = {
    name: exercicesTitles[0],
    reps: 0,
    series: 0,
    performedSeries: 0
  }
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
        setErrorMessage("choisir un exercice")
      } else if (exerciceArray.reps === 0 ) {
        setErrorMessage("definir le nombre de répétition")
      }else if (exerciceArray.series === 0) {
        setErrorMessage("definir le nombre de séries")
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
        reps: 0,
        series: 0,
      })
      setErrorMessage(false)
      setOpen(false)
      } 
  }
  
  const handleSubmit = (event) => {
    
    event.preventDefault()

    if (form.exercice[0].reps === 0 && form.exercice[0].series === 0) {
      setErrorMessage("Veuillez ajouter au moins un exercice")
    } else if (form.title === "") {
      setErrorMessage("ajouter un nom")
    } else {
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
  }
  
  const handleAddBtn = () => {
    if (open === false) {
      setOpen(true)
    } else if (open === true) {
      setOpen(false)
    }
  }
  // ERROR MESSAGES
  useEffect(() => {

    if (form.exercice[0].reps === 0 || form.exercice[0].series) {
      setErrorMessage(false)
    }
  },[form.exercice])
  useEffect(() => {

    if (form.exercice[0].reps === 0 || form.exercice[0].series) {
      setErrorMessage(false)
    }
  },[form.exercice])
  const buildOptions = () => {
    var arr = [];

    for (let i = 1; i <= 10; i++) {
        arr.push(<option key={i} value="{i}">{i}</option>)
    }

    return arr; 
  }
  return (
    <form className="new-workout-container" >

      <div className="new-workout-title-container" onChange={handleChange}>
        <input required autoComplete="off" placeholder="Entrer nom du workout" className="new-workout-title" name="title" />        
      </div>
      
          {/* EXERCICES DATAS */}
          <div className="new-workout-datas-container">
            <div className="new-workout-exercices-container">
              <div className="new-workout-exercices-title">Exercices:</div>
              <div onClick={handleAddBtn} className="new-workout-add">Ajouter&nbsp;<IoIosAddCircle size={24}/></div> 
            </div>
            { errorMessage &&<div className="new-workout-exercices-list">
               <div className="new-workout-warning"><AiFillWarning size={18} color={'#E2697E'}/>&nbsp;{errorMessage}</div>
            </div>}
            <div className="new-workout-exercices-list">
              {form.exercice[0].reps === 0 && <div className="new-workout-warning"><AiFillWarning size={18} color={'#E2697E'}/>&nbsp;Pas encore d'exercice ajouté</div>} 
              {form.exercice[0].reps !== 0 && form.exercice.map((exercice, i) => 
              <div className="new-workout-datas" key={i}>
                <div className="new-workout-name">{exercice.name}</div>
                <div>{exercice.reps} reps</div>
                <div>{exercice.series} series</div>
                </div>
              )}
            </div>
          </div>
      {/* ADD EXERCICE FORM */}
      
      <div className={`${open ? 'new-workout-addform' : 'new-workout-addform-hidden'}`} onChange={handleChangeExercice}>
          
          {/* REPS */}
          <div className="new-workout-select">
          <label htmlFor="reps">Nombre de Répétitions: <span>{exerciceArray.reps}</span></label>
            <select className="new-workout-input" onChange={handleChange} name={"reps"}  id="add-reps" defaultValue={exerciceArray.reps}>
              {[...Array(20)].map((x, i) => 
                <option key={i}  value={i}>{i}</option>
              )}
            </select>
          </div>
          <input type="reset" value="Reset"></input>
          {/* SERIES */}
          <div className="new-workout-select">
            <label htmlFor="series">Nombre de Séries: <span>{exerciceArray.series}</span></label>
            <select className="new-workout-input" name="series" id="add-series" defaultValue={exerciceArray.series}>
              {[...Array(10)].map((x, i) => 
                <option key={i} value={i}>{i}</option>
              )}
            </select>
          </div>
          {/* EXERCICES */}
          <div className="new-workout-select">
          <label htmlFor="series">Exercice: {form.exercice[0].length}</label>
            <select className="new-workout-input" name="name" onChange={handleChange} defaultValue={exerciceArray.name}>
              <option hidden value="">Choisir exercice</option> 
              {exercicesTitles.map((option, i) =>
                <option key={i} value={option}>{option}</option>
              )}
            </select>
            <div className="new-workout-addbtn-container">
              <button className="new-workout-addbtn" onClick={handleSubmitNewExercice}>Ajouter Exercice !</button>
            </div>
          </div>
      </div>
      <button className="new-workout-submitbtn" onClick={handleSubmit}>Créer ce workout !</button>
    </form>
  )
}
export default NewWorkout