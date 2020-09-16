import api from '../api'

const token = localStorage.getItem("token")
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
  
  let url = "workout"
  
    if (token !== null && token !== '' ) {
      url = `auth/userworkouts/${userId}`
    } 
    
     api.get(url)
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

