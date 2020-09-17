import axios from 'axios'
import { api } from '../api'
import { config } from '../api'

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
  let url = `${config.url.API_URL}workout`
  
    if (token !== null && token !== '' ) {
      url = `${config.url.API_URL}auth/userworkouts/${userId}`
    } 
    
     axios({
       method: 'get',
       url: url,
       headers: {'Authorization': `Bearer ${token}`}

     })
          .then(function (response) {
        
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

