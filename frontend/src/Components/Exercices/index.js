import React, {useState, useContext} from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import NewExercice from '../NewExercice'


function Exercices() {

  const [exercices, setExercices] = useContext(ExerciceContext)
  let [clickedButton, setClickedButton] = useState(false)

  const handleClickAddButton = () => {
  setClickedButton(true)
  console.log(clickedButton);
  }

  let title = exercices.map((exercice, i ) => 
  <div key={i}>
    <p>{exercice.title}</p>
    <button>Modifier</button>
    <button>Supprimer</button>
  </div>
  )
  // let limb = exercices.map((item, i ) => <p key={i}>{item.limb}</p>)
  // let description = exercices.map((item, i ) => <p key={i}>{item.description}</p>)
  // let type = exercices.map((item, i ) => <p key={i}>{item.type}</p>)
  
    return (
      
        <div className="exercices-container">
        <button onClick={handleClickAddButton}>Ajouter un exercice</button>
       {clickedButton && <NewExercice />} 
          <div>{title}</div>
        </div>
        
      
    );
  }

  export default Exercices;