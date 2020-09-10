import React, {useState, useContext} from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import NewExercice from '../NewExercice'
import {deleteExercice} from '../../apiCalls/index'

//icons
import { MdDeleteForever } from "react-icons/md"
import { AiFillPlusCircle } from "react-icons/ai"

function Exercices() {

  const [exercices, setExercices] = useContext(ExerciceContext)
  const [clickedButton, setClickedButton] = useState({button: false})

  const openForm = () => {
    setClickedButton({button: true})
    if (clickedButton.button === false) {
      setClickedButton({button: true})
    } else if (clickedButton.button === true)
    setClickedButton({button: false})
  }

  const closeForm = (NewExerciceTitle) => {
    setClickedButton({button: false, title: NewExerciceTitle})
  }


  let exercicesList = exercices.map((exercice) =>
  <div key={exercice._id}>
    <div className="exercices-list" >
      <div>{exercice.title}</div>
      <div><MdDeleteForever color={'#E2697E'} size={24} onClick={() => deleteExercice(exercice, setExercices)}/></div>
    </div>
    <div className="exercices-border"></div>

  </div> 

  )
  // let limb = exercices.map((item, i ) => <p key={i}>{item.limb}</p>)
  
  
    return (
      
        <div className="exercices-container">
          <h1>Exercices</h1>
          <div className="exercices" onClick={openForm}>
            <h3>Ajouter</h3> 
            <div className="exercices-add-button"><AiFillPlusCircle size={24} color={'#fff'}/></div> 
          </div>
          <div>{clickedButton.button && <NewExercice closeForm={closeForm}/>}</div>  
          <div>{exercicesList}</div>
        </div>
        
      
    );
  }

  export default Exercices;