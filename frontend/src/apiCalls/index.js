
import api from '../api'


export const getExercices = (setExercices) => {

  api.get('exercice')
    
      .then(function (response) {
        setExercices(response.data)
      })
      .catch(function (error) { 
        console.error(error);
      })
}
export const getWorkouts = (setWorkouts) => {

  api.get('workout')
    
      .then(function (response) {
        setWorkouts(response.data)
      })
      .catch(function (error) { 
        console.error(error);
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
export const addExerciceToWorkout = (workout, setWorkouts) => {
    
  api.delete(`workout/${workout._id}`, )
    .then(function () {
      // reload datas from API
      //getExercices(setExercices)
      
    })
    .catch(function (error) {
      console.error(error);
    })  
}
  