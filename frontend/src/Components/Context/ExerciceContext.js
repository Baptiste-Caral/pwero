import React, {useState, createContext, useEffect} from "react"
import api from '../../api'

export const ExerciceContext = createContext()

export const ExerciceProvider = (props) => {
  const [exercices, setExercices] = useState([])
  
  useEffect(() => {

    
    api.get('exercice')
    
      .then(function (response) {
        // handle success
        //console.log(response.data);
        setExercices(response.data)
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
      
  },[])

return (
  <ExerciceContext.Provider value={[exercices, setExercices]}>
    {props.children}
  </ExerciceContext.Provider>
)
}
