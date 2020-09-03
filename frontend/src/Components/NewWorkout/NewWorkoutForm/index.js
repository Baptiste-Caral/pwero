import React,{ useContext } from 'react'
import Select from './Select'
import {ExerciceContext} from '../../Context/ExerciceContext'

function NewWorkoutForm  () {

  const options = useContext(ExerciceContext)
  const ExercicesTitles = options[0].map(exerciceTitle => exerciceTitle.title)
    
  return (
    <div className="new-workout-form">
      <Select options={ExercicesTitles}/>
    </div>  
  )   
}
  
export default NewWorkoutForm



