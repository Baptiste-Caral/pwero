import React, {useState, useContext} from 'react'
import { api } from '../../api'
import {ExerciceContext} from '../Context/ExerciceContext'
import { getExercices } from '../../apiCalls/index'


function NewExercice({closeForm, data}) {

  const initialState = {
    name: '',
    title: '',
    link: ''
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
    const userId = localStorage.getItem("userId")
    const config = {headers: {'Authorization': `Bearer ${token}`}}
    
    api.post(`auth/addexercice/${userId}`, 
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

    closeForm(formValues)
  }
    return (
   
        <form autoComplete="off" className="form-new-exercice" >
          <label htmlFor="form-new-exercice-title">Nom de l'exercice</label>
          <input placeholder='Curl Biceps' value={formValues.title} name="title" id="form-new-exercice-title" type="text" onChange={handleChangeForm} />
          <div className="new-workout-select">
            <select className="new-workout-input" name="name" value={formValues.name} onChange={handleChangeForm} >
              <option hidden value="">Groupe musculaire</option> 
              {data.map((option, i) =>
                <option key={i} label={option.name} value={option.name}></option >   
              )}
            </select>
          </div>
          {/* <label htmlFor="form-new-exercice-limb">Lien Youtube (optionnel)</label>
          <input placeholder='Biceps' value={formValues.limb} name="link" id="form-new-exercice-link" type="text" onChange={handleChangeForm} /> */}
          <button onClick={handleSubmitForm}>Ajouter</button>
        </form> 
    );
  }

  export default NewExercice;