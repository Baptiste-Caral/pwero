import React, {useState, useContext} from 'react'
import { api } from '../../api'
import {ExerciceContext} from '../Context/ExerciceContext'
import { getExercices } from '../../apiCalls/index'

function NewExercice({closeForm}) {

  const initialState = {
    title: '',
    limb: ''
  }
  
  const [formValues, setFormValues] = useState(initialState)
  const [exercices, setExercices] = useContext(ExerciceContext)


  const handleChangeForm= (evt) => {
    const name = evt.target.name
    
    setFormValues({
      ...formValues,
      [name]: evt.target.value
    })
    
  }

  const handleSubmitForm = (evt) => {

    evt.preventDefault()
    const token = localStorage.getItem('token')
    const config = {headers: {'Authorization': `Bearer ${token}`}}
    
    api.post('exercice', 
      formValues,
      config
      )
    .then(function (response) {
      
      // reload datas from API
      getExercices(setExercices)
    
    })
    .catch(function (error) {
      console.log(error) 
    });
    setFormValues(initialState)

    closeForm(formValues.title)
  }

    return (
   
        <form className="form-new-exercice">
          <label htmlFor="form-new-exercice-title">Exercice</label>
          <input placeholder='Curl Biceps' value={formValues.title} name="title" id="form-new-exercice-title" type="text" onChange={handleChangeForm} />
          <label htmlFor="form-new-exercice-limb">Muscle activé</label>
          <input placeholder='Biceps' value={formValues.limb} name="limb" id="form-new-exercice-limb" type="text-area" onChange={handleChangeForm} />
          <button onClick={handleSubmitForm} >submit</button>
        </form> 
    );
  }

  export default NewExercice;