import axios from 'axios'
import api from '../api'
const token = localStorage.getItem('token')
    
const userId = localStorage.getItem("userId")

export const getExercices = (setExercices) => {

  api.get('exercice')
      .then(function (response) {
        setExercices(response.data)
      })
      .catch(function (error) { 
        console.error(error); 
      })
}
export function getWorkouts(setWorkouts) {

  const token = localStorage.getItem("token")
  let url = "http://localhost:3001/api/workout"
  
    if (token !== null && token !== '' ) {
      url = `http://localhost:3001/api/auth/userworkouts/${userId}`
    } 
    
     axios({
       method: 'get',
       url: url,
       headers: {'Authorization': `Bearer ${token}`}

     })
          .then(function (response) {
        
            console.log("token", token);
            setWorkouts(response.data) 
            
          })
          .catch(function (error) { 
            console.error(error)
          })
       
  }
export const deleteExercice = (exercice, setExercices) => {
    
  api.delete(`exercice/${exercice._id}`, )
    .then(function () {
      // reload datas from API
      getExercices(setExercices)
    })
    .catch(function (error) {
      console.error(error);
    })  
}
export const modifyWorkout = (workout, index) => {
  if (token !== null) {
  api.put(`auth/userworkouts/${userId}/${index}`, workout  )
    .then(function () {
      
    })
    .catch(function (error) {
      console.error(error);
    }) 
  } 
}

