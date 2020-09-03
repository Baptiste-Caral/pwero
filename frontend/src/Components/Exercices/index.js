import React, {useState, useContext} from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import NewExercice from '../NewExercice'
import {deleteExercice} from '../../apiCalls/index'

function Exercices() {

  const [exercices, setExercices] = useContext(ExerciceContext)
  const [clickedButton, setClickedButton] = useState({button: false})

  const openForm = () => {
    setClickedButton({button: true})
  }

  const closeForm = (NewExerciceTitle) => {
    setClickedButton({button: false, title: NewExerciceTitle})
  }


  let title = exercices.map((exercice) => 
    <div key={exercice._id}>
      <p>{exercice.title}</p>
      <button>Modifier</button>
      <button onClick={() => deleteExercice(exercice, setExercices)}>Supprimer</button>
    </div>
  )
  // let limb = exercices.map((item, i ) => <p key={i}>{item.limb}</p>)
  
  
    return (
      
        <div className="exercices-container">
        <button onClick={openForm}>Ajouter un exercice</button>
        {clickedButton.title && <div>nouvel exercice: {clickedButton.title} ajouté!</div>}
        {clickedButton.button && <NewExercice closeForm={closeForm}/>} 
        <div>{title}</div>
        </div>
        
      
    );
  }

  export default Exercices;