import React, {useState, useEffect} from 'react'
import NewExercice from '../NewExercice'
import api from '../../api'


function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('stuff')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setItems(response.data)
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[])

  let title = items.map((item, i ) => <p key={i}>{item.title}</p>)
  let limb = items.map((item, i ) => <p key={i}>{item.limb}</p>)
  let description = items.map((item, i ) => <p key={i}>{item.description}</p>)
  let type = items.map((item, i ) => <p key={i}>{item.type}</p>)

    return (
      <div className="home">
        <div className="container">
          <div>{title}</div>
          <div>{limb}</div>
          <div>{description}</div>
          <div>{type}</div>
        </div>
        
        
        <NewExercice />    
      </div>   
    );
  }

  export default Home;