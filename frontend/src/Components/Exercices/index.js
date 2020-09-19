import React, {useState, useContext, useEffect} from 'react'
import {ExerciceContext} from '../Context/ExerciceContext'
import NewExercice from '../NewExercice'
import {deleteExercice} from '../../apiCalls'
import { api } from "../../api"

//icons
import { MdDeleteForever } from "react-icons/md"
import { AiFillPlusCircle } from "react-icons/ai"

function Exercices() {

  const [exercices, setExercices] = useContext(ExerciceContext)
  let exercicesListForProps = exercices.map((list) => list)
  const [clickedButton, setClickedButton] = useState({button: false})
  const [customExercices, setCustomExercices] = useState([])
  const userId = localStorage.getItem('userId')

  useEffect(() => {

    api.get(`/auth/custom/${userId}`)
        .then(function (response) {
          setCustomExercices(response.data)
        })
        .catch(function (error) { 
          console.error(error); 
        })
  },[userId])


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


  let exercicesList = exercices.map((list) =>
  <div className="exercices-list" key={list._id}>
      <div className="exercices-list-name">{list.name}</div> 
        {list.exercices.map((exercice) => 
          <div key={exercice.title}>
            <div className="exercices-list-title">
              {exercice.title}  
            </div>
          </div>
        )}
  </div> 
  )
  const customExercicesList = customExercices.map((list) =>
  <div className="exercices-list-title" key={list._id}>
    <div className="exercices-list-custom">
      <div >{list.title}</div>
      <MdDeleteForever color={'#E2697E'} size={24} onClick={() => deleteExercice(list, setExercices)}/>
    </div>
  </div> 
  )
  
  
  
  
    return (
      
        <div className="exercices-container">
          <h1>Exercices</h1>
          <div className="exercices" onClick={openForm}>
            <h3>Créé ton exercice</h3> 
            <div className="exercices-add-button"><AiFillPlusCircle size={24} color={'#fff'}/></div> 
          </div>
          <div>{clickedButton.button && <NewExercice data={exercicesListForProps} closeForm={closeForm}/>}</div>  
          
          
            <div className="exercices-list">
              
                <div className="exercices-list-name">Exo Perso</div>
                {customExercicesList}  
              </div>
            
          
          <div>{exercicesList}</div>
        </div>
        
      
    );
  }

  export default Exercices;