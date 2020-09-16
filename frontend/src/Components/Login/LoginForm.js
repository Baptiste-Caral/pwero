import React, {useState} from 'react'
import api from '../../api'
import {Link} from "react-router-dom"

function LoginForm  () {

  const initialState = {
    
    email: '',
    password: ''
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
    
    api.post('auth/login', 
      formValues)
    .then(function (response) {
      
      const token = response.data.token
      localStorage.setItem('token', token)
      const userId = response.data.userId
      localStorage.setItem('userId',userId)
      
    })
    .catch(function (error) {
      console.log(error)
      
    })
    setFormValues(initialState)
  }
  return (
    <div className="login-form">
      <div>Connexion</div>
      <label htmlFor="form-new-exercice-description">email</label>
      <input placeholder='' value={formValues.email} name="email" id="form-auth-email" type="text" onChange={handleChange} />
      <label htmlFor="form-new-exercice-type">password</label>
      <input placeholder='' value={formValues.password} name="password" id="form-auth-password" type="password" onChange={handleChange} />
      <button onClick={handleSubmit} >submit</button>
      <Link to="/signup" className="login-form-signup">Pas encore de compte: S'inscrire</Link>
    </div>
    
  ) 
}

export default LoginForm