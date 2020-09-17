import React, { useState ,useContext, useEffect } from 'react'
import api from '../../api'
import {Link} from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { WorkoutContext } from '../Context/WorkoutContext'
import { useHistory } from "react-router-dom";
import { getWorkouts } from "../../apiCalls"

function LoginForm() {
  
  const history = useHistory() // useHistory: https://reactrouter.com/web/api/Hooks
  const [user, setUser] = useContext(UserContext)
  const [workouts, setWorkouts] = useContext(WorkoutContext)
  const [connected, setConnected] = useState(false)
  
  
  // useEffect(() => {
  //   getWorkouts(setWorkouts)
  // })
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
      
      getWorkouts(setWorkouts)
      setUser(true)    
        history.push("/")
        window.location.reload() 

      
    })
    .catch(function (error) {
      console.log(error)
    })
    setFormValues(initialState)
  }
  return (
    <div className="login-form">
      <div>Connexion</div>
      <label htmlFor="email">Ton email</label>
      <input placeholder='' value={formValues.email} name="email" id="form-auth-email" type="email" onChange={handleChange} />
      <label htmlFor="password">Ton mot de passe</label>
      <input placeholder='' value={formValues.password} name="password" id="form-auth-password" type="password" onChange={handleChange} />
      <button onClick={handleSubmit} >submit</button>
      <Link to="/signup" className="login-form-signup">Pas encore de compte: S'inscrire</Link>
    </div>
    
  ) 
}

export default LoginForm