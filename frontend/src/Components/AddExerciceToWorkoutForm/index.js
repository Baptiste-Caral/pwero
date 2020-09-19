import React,{ useState, useContext, useEffect } from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import { AiFillPlusCircle } from "react-icons/ai"
import { api } from "../../api"

function AddExerciceToWorkoutForm  ({getFormValues}) {

  const exercices = useContext(ExerciceContext)
  const exercicesList = exercices[0].map(exercice => exercice)
  
  const [customExercices, setCustomExercices] = useState([])
  const [open, setOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    reps: 1,
    series: 1,
    performedSeries: 0
  })

  const handleChange = (event) => {

    const name = event.target.name
     setFormValues({
       ...formValues,
       [name]: event.target.name === "name" ?  event.target.value : parseInt(event.target.value, 10)  
    })
    
  }
  const handleSubmit = (event) => {
    
    event.preventDefault()
    // close select div
    setOpen(false)
    // Put Values to parent component
    getFormValues(formValues)
  }
  const handleOpenList = () => {
    if (open === false) {
      setOpen(true)
    } else if (open === true)
      setOpen(false)   
  }
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
  
  return (
    <div className="new-workout-form">
      <div className="add-exercice">
        <div className="add-exercice-text">Ajouter un exercice&nbsp;</div>
        <AiFillPlusCircle color="#F8BD33" onClick={handleOpenList} size={32}/>
      </div>
      <div className="select-form-container">
        <form className={`add-exercice-form ${open ? "add-exercice-form" : "add-exercice-form-open"}`} onChange={handleChange}>
          {/* EXERCICES */}
          <div className="new-workout-select">
            <label htmlFor="series">Exercice:</label>
            <select className="new-workout-input" name="name" >
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
            {/* <Select options={exercicesList} size={'large'}/> */}
            <label htmlFor="reps">Nombre de reps par série</label>
            <select name="reps" id="add-reps">
            {[...Array(20)].map((x, i) => 
              <option key={i} value={i+1}>{i+1}</option>
            )}
            </select>
            <label htmlFor="series">Nombre de séries </label>
            <select name="series" id="add-series">
            {[...Array(10)].map((x, i) => 
              <option key={i} value={i+1}>{i+1}</option>
            )}
            </select>
          
        <button className="form-btn" onClick={handleSubmit}>Ajouter cet exercice</button>
          </form>
        </div>

    </div>  
  )   
}
  
export default AddExerciceToWorkoutForm



