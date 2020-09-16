import React, { useState, createContext, useEffect } from "react"

// user = true => user isconnected

export const UserContext = createContext()

export const UserProvider = (props) => {

  const [user, setUser] = useState()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token !== '' && token !== null) {
      setUser(true)
    }
  },[setUser])


return (
  <UserContext.Provider value={[user, setUser]}>
    {props.children}
  </UserContext.Provider>
)
}
