import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

function Nav() {

  const [tokenOk, setTokenOk] = useState(true)

  const token = localStorage.getItem("token")
    useEffect(() => {

      if (token === null || token === '') {
        setTokenOk(false)
      }
    },[token])
    
  return (
    <div>
      <nav>
        <Link className="logo" to="/">Pwero</Link>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exercices">Exercices</Link>
            </li>
            {!tokenOk &&<li>
              <Link to="/login">Login</Link>
            </li>}
          </ul>
        </div>
      </nav>
        <div className="loginfo">
        
        {!tokenOk && <Link className="link" to="/login"><div>Connectez-vous pour créer vos propres entraînements !</div></Link> }
      </div>   

    </div>
  );
}

export default Nav;