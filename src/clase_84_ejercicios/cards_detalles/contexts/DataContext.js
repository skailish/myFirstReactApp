import React, { useState, createContext } from "react"
import userData from "../components/data"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(userData)

  return (
    <DataContext.Provider value={{ users, setUsers }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider }
export default DataContext
