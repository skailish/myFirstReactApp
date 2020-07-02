import React, { useState, createContext, useContext } from "react"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [color, setColor] = useState()
  const [inputType, setInputType] = useState()
  const [inputValue, setInputValue] = useState()

  return (
    <DataContext.Provider
      value={{
        color,
        setColor,
        inputType,
        setInputType,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

// Custom hooks
const setCurrentColor = (currentColor) => setColor(currentColor)
const setSearch = (searchType, request) => {
  setInputType(searchType)
  setInputValue(request)
}

const useDataContext = () => useContext(DataContext)

export { DataProvider, setSearch, setCurrentColor }
export default useDataContext
