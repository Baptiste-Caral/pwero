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
export const addExerciceToWorkout = (workout, value, setWorkouts) => {


  workout.exercice.push(value)
  // console.log("workout.exercice", workout.exercice);
    
  api.put(`workout/${workout._id}`, workout  )
    .then(function () {
      // reload datas from API
      getWorkouts(setWorkouts)
    })
    .catch(function (error) {
      console.error(error);
    })  
}
export const deleteExerciceToWorkout = (workout, index, workouts, setWorkouts) => {

  workout.exercice.splice(index, 1)
    setWorkouts([...workouts], workout)

  api.put(`/workout/${workout._id}`, workout)
    .then(function (response) {
      console.log(response);
      getWorkouts(setWorkouts)
    })
    .catch(function (error) {
      console.log(error);
    });   
}

export const checkedExerciceToWorkout = (workout, index, workouts, setWorkouts) => {

  console.log(workout);
  console.log(index);
  // workout.exercice.splice(index, 1)
  //   setWorkouts([...workouts], workout)

  // api.put(`/workout/${workout._id}`, workout)
  //   .then(function (response) {
  //     console.log(response);
  //     getWorkouts(setWorkouts)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });   
}
