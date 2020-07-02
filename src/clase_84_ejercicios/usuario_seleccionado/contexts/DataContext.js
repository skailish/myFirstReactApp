import React, { useState, createContext } from "react"
import userData from "../data"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(userData)
  const [userId, setUserId] = useState()
  const [currentUser, setCurrentUser] = useState([])
  const filterUsers = (user) => user._id === userId
  const handleClick = (event) => {
    setUserId(event.target.value)
    setCurrentUser(users.filter(filterUsers))
  }

  return (
    <DataContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser, handleClick }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider }
export default DataContext
