import React, {useState, useEffect} from 'react'
import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3002/api/',
  
});

function Home() {

  const [items, setItems] = useState([])
  const [formStuffInput, setFormStuffInput] = useState('')


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
  let stuff = items.map((item, i ) => <p key={i}>{item.description}</p>)

  const handleChangeFormStuff = (evt) => {
    setFormStuffInput(evt.target.value)
  }

  const handleSubmitFormStuff = (evt) => {

    evt.preventDefault()

    api.post('stuff', {
      firstName: formStuffInput, 
    })
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
    });
    setFormStuffInput('')
  }

    return (
      <div className="home">
        {stuff}
        <form action="" method="post">
        <label htmlFor="form-stuff">Form stuff</label>
          <input placeholder='entre un truc' value={formStuffInput} name="form-stuff" id="form-stuff" type="text" onChange={handleChangeFormStuff}/>
          <button onClick={handleSubmitFormStuff} type="submit">submit</button>
        </form>
      </div>
      
    );
  }

  export default Home;