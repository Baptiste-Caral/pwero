import React, {useState} from 'react'
import api from '../../api'


function NewExercice() {

  const initialState = {
    title: '',
    limb: '',
    description: '',
    type: ''
  }
  
  const [formValues, setFormValues] = useState(initialState)


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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error) 
    });
    setFormValues(initialState)
  }

    return (
   
        <form action="">
        <div>Ajouter nouvel exercice</div>
          <label htmlFor="form-new-exercice-title">Exercice</label>
          <input placeholder='Curl Biceps' value={formValues.title} name="title" id="form-new-exercice-title" type="text" onChange={handleChangeForm} />
          <label htmlFor="form-new-exercice-member">Partie du corps activée</label>
          <input placeholder='Bras' value={formValues.limb} name="limb" id="form-new-exercice-limb" type="text-area" onChange={handleChangeForm} />
          <label htmlFor="form-new-exercice-description">Description</label>
          <input placeholder='' value={formValues.description} name="description" id="form-new-exercice-description" type="text" onChange={handleChangeForm} />
          <label htmlFor="form-new-exercice-type">Type</label>
          <input placeholder='' value={formValues.type} name="type" id="form-new-exercice-type" type="text" onChange={handleChangeForm} />
          <button onClick={handleSubmitForm} >submit</button>
        </form> 
    );
  }

  export default NewExercice;