import React,{ useState, useContext, useEffect } from 'react'
import { ExerciceContext } from '../Context/ExerciceContext'
import { WorkoutContext } from '../Context/WorkoutContext'
import { useHistory } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io"
import { AiFillWarning } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import update from 'immutability-helper'

import { api } from '../../api'

function NewWorkout () {
  // STATE CONTEXT
  const [workouts, setWorkouts] = useContext(WorkoutContext)
  const exercices = useContext(ExerciceContext)

  // LOCAL STATE
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(true)
  
  const exercicesList = exercices[0].map(exercice => exercice)

  
  
  const history = useHistory() // useHistory: https://reactrouter.com/web/api/Hooks
  
  const [form, setForm] = useState({
    title: '',
    exercice: [
      {
      name: "",
      reps: 0,
      series: 0,
      performedSeries: 0
      }
    ]
  })
 
  
const [customExercices, setCustomExercices] = useState([])
const [exerciceArray, setExerciceArray] = useState([])

const userId = localStorage.getItem('userId')

 useEffect(() => {

   api.get(`/auth/custom/${userId}`)
       .then(function (response) {
         setCustomExercices(response.data)
       })
       .catch(function (error) { 
         console.error(error); 
       })
 },[userId])
  
  const handleChangeTitle = (event) => {
    setForm({
      ...form,
      title: event.target.value  
    }) 
  }

  const handleChangeExercice = (event) => {
    const name = event.target.name  
    setExerciceArray({
      ...exerciceArray,
      [name]: event.target.name === "name" ?  event.target.value : parseInt(event.target.value, 10)  
    }) 
  }
    const reset = document.querySelector("#reset")
    const handleSubmitNewExercice = (event) => {

      event.preventDefault()
      // Handle Errors
      if (exerciceArray.name === undefined ) {
        setErrorMessage("choisir un exercice")
      } else if (exerciceArray.reps === 0 ) {
        setErrorMessage("definir le nombre de répétition")
      }else if (exerciceArray.series === 0) {
        setErrorMessage("definir le nombre de séries")
      }else {

        // Delete initial exercice from initial state
        if (form.exercice[0].reps === 0 && form.exercice[0].series === 0) {
          form.exercice.splice(0, 1)
        }
        // Push the new exercice in the workout
        form.exercice.push(exerciceArray)
        
        // reset form values
        reset.click()
        setExerciceArray({
        ...exerciceArray,
        name: "",
        reps: 0,
        series: 0,
      })
        setErrorMessage(false)
        setOpen(false)
      } 
  }
  
  const handleSubmit = (event) => {

    const userId = localStorage.getItem("userId")
    
    event.preventDefault()
    

    if (form.exercice[0].reps === 0 && form.exercice[0].series === 0) {
      setErrorMessage("Veuillez ajouter au moins un exercice")
    } else if (form.title === "") {
      setErrorMessage("ajouter un nom")
    } else {

      api.post(`auth/userworkouts/${userId}`, form )
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) { 
          console.error(error);
        })
        
          const newWorkouts = update(workouts, {
            list: {$push: [form]}
          })
          setWorkouts(newWorkouts)

        
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
  
  
  return (
    <div className="new-workout-container" >
      {/* TITLE INPUT */}
      <div className="new-workout-title-container" >
        <input required autoComplete="off" placeholder="Entrer nom du workout" className="new-workout-title" onChange={handleChangeTitle} />        
      </div>
      <form >

        {/* EXERCICES DATAS */}
        <div className="new-workout-datas-container">
          <div className="new-workout-exercices-container">
            <div className="new-workout-exercices-title">Exercices:</div>
            {!open && <div onClick={handleAddBtn} className="new-workout-add">Ajouter&nbsp;<IoIosAddCircle size={24}/></div>}
            {open && <div onClick={handleAddBtn} className="new-workout-add"><AiOutlineClose size={24} color={'#E2697E'}/></div>} 
          </div>
          {errorMessage &&
          <div className="new-workout-exercices-list">
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
            {/* EXERCICES */}
            <div className="new-workout-select">
              <label htmlFor="series">Exercice: {form.exercice[0].length}</label>
              <select className="new-workout-input" name="name" defaultValue={exerciceArray.name}>
                <option hidden value="">Choisir exercice</option> 
                <optgroup label="Exercices Perso">
                {customExercices &&
                customExercices.map((exo) => 
                  <option key={exo.title}>{exo.title}</option>
                )}
                </optgroup>
                {exercicesList.map((option, i) =>
                  <optgroup key={i} label={option.name}>
                  {option.exercices.map((exercice) => 
                    <option key={exercice.title}>{exercice.title}</option>
                  )}
                  </optgroup>
                )}
              </select>
            </div>
            
            {/* REPS */}
            <div className="new-workout-select">
            <label htmlFor="reps">Nombre de Répétitions par série: <span>{exerciceArray.reps}</span></label>
              <select className="new-workout-input" name={"reps"}  id="add-reps" defaultValue={exerciceArray.reps}>
                {[...Array(20)].map((x, i) => 
                  <option key={i}  value={i}>{i}</option>
                )}
              </select>
            </div>
            <input type="reset" value="Reset" id='reset'></input>
            {/* SERIES */}
            <div className="new-workout-select">
              <label htmlFor="series">Nombre de Séries: <span>{exerciceArray.series}</span></label>
              <select className="new-workout-input" name="series" id="add-series" defaultValue={exerciceArray.series}>
                {[...Array(10)].map((x, i) => 
                  <option key={i} value={i}>{i}</option>
                )}
              </select>
              <div className="new-workout-addbtn-container">
                <button className="new-workout-addbtn" onClick={handleSubmitNewExercice}>Ajouter Exercice !</button>
              </div>
            </div>
        </div>
      </form>
        {!open &&<button className="new-workout-submitbtn" onClick={handleSubmit}>Créer ce workout !</button>}
    </div>
  )
}
export default NewWorkout