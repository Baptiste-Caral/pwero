import React,{ useState, useContext } from 'react'
import Select from './Select'
import {ExerciceContext} from '../Context/ExerciceContext'
import { AiFillPlusCircle } from "react-icons/ai"

function AddExerciceToWorkoutForm  ({getValue}) {

  const exercices = useContext(ExerciceContext)
  const exercicesTitles = exercices[0].map(exerciceTitle => exerciceTitle.title)

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
    // Put Values 
    getValue(formValues)
  }
  const handleOpenList = () => {
    if (open === false) {
      setOpen(true)
    } else if (open === true)
      setOpen(false)   
  }
  
  return (
    <div className="new-workout-form">
      <div className="add-exercice">
        <AiFillPlusCircle color={'#fff'} onClick={handleOpenList} size={32}/>
      </div>
        <div className="select-form-container">
          <form 
            className={`add-exercice-form ${open ? "add-exercice-form" : "add-exercice-form-open"}`}
            onChange={handleChange} >
            <label htmlFor="reps">Nombre de reps</label>
            <select name="reps" id="add-reps">
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
            <label htmlFor="series">nombre de series </label>
            <select name="series" id="add-series">
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          
        <Select options={exercicesTitles} size={'large'} getValue={getValue}/>
        <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>

    </div>  
  )   
}
  
export default AddExerciceToWorkoutForm


