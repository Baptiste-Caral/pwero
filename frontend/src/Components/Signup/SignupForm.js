import React, { useState } from 'react'
import { api } from '../../api'
import {Link} from "react-router-dom"

function LoginForm() {
  
  const [accountCreated, setAccountCreated] = useState(false)
  const [error, setError] = useState('')
 
  const initialState = {
    
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange= (evt) => {
    const name = evt.target.name
    
    setFormValues({
      ...formValues,
      [name]: evt.target.value
    })
  }
    
  const handleSubmit = (evt) => {

    evt.preventDefault()
    if(formValues.password === formValues.confirmPassword) {
      api.post('auth/signup', formValues)
      .then(function (response) {
        
        setAccountCreated(true)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    } else {
      setError("Veuillez saisir 2 mots de passe identiques ")
    }
    
    
  }
  return (
    <div className="login-form">
      {!accountCreated && 
      <div>
        <div >Félicitations! Ton Compte a bien été Créé... </div>
        <div>Non tu ne recevras pas de mail de confirmation... </div>
        <div>Je sais c'est un peu à la rache mais je n'ai pas encore codé cette fonctionnalité</div>
        <div>Bon allez... en attendant</div>
      </div>
      }
      {accountCreated && 
        <div className="login-form">
          <div>Inscription</div>
          <label htmlFor="email">Ton email</label>
          <input placeholder='' value={formValues.email} name="email" id="form-auth-email" type="email" onChange={handleChange} />
          <label htmlFor="password">Ton mot de passe</label>
          <input placeholder='' value={formValues.password} name="password" id="form-auth-password" type="password" onChange={handleChange} />
          <label htmlFor="confirmPassword">Confirme ton mot de passe</label>
          <div>{error}</div>
          <input placeholder='' value={formValues.confirmPassword} name="confirmPassword" id="form-auth-confirmPassword" type="password" onChange={handleChange} />
          <button onClick={handleSubmit}>Je veux m'entraîner !</button>
        </div>
      }
      {!accountCreated &&<Link to="/login" className="login-form-signup">Clique ici pour te connecter</Link>}
    </div>
    
  ) 
}

export default LoginForm