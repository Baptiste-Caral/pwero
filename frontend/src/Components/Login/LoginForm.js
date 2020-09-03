import React, {useState} from 'react'
import api from '../../api'

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
    })
    .catch(function (error) {
      console.log(error)
      
    })
    setFormValues(initialState)
  }
  return (
    <div className="login-form">
      <div>Login Form</div>
      <label htmlFor="form-new-exercice-description">email</label>
      <input placeholder='' value={formValues.email} name="email" id="form-auth-email" type="text" onChange={handleChange} />
      <label htmlFor="form-new-exercice-type">password</label>
      <input placeholder='' value={formValues.password} name="password" id="form-auth-password" type="password" onChange={handleChange} />
      <button onClick={handleSubmit} >submit</button>
    </div>
    
  ) 
}

export default LoginForm