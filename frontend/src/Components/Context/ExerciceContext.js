import React, {useState, createContext, useEffect} from "react"
import { getExercices } from '../../apiCalls/index'

export const ExerciceContext = createContext()

export const ExerciceProvider = (props) => {
  const [exercices, setExercices] = useState([])
  
  useEffect(() => {
    
    // load datas from API
    getExercices(setExercices)
  },[])

return (
  <ExerciceContext.Provider value={[exercices, setExercices]}>
    {props.children}
  </ExerciceContext.Provider>
)
}
