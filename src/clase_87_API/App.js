import React, { useEffect } from "react"
import useDataContext, { DataProvider } from "./contexts/DataContext"
import SearchResults from "./components/SearchResults"
import axios from "axios"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`

// const InputPart = styled.input`
//   height: 50px;
//   width: 60px;
// `
const InputComplete = styled.input`
  height: 50px;
  width: 150px;
`

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const MainContainer = styled.div`
  display: flex;
`

const App = () => {
  const { setCurrentColor } = useDataContext()
  useEffect(() => {
    axios.get(`https://www.thecolorapi.com/id?hex=000000`).then((response) => {
      setCurrentColor(response.data.colors.hex.value)
      console.log(response.data)
    })
  }, [setCurrentColor])
  return (
    <DataProvider>
      <GlobalStyle />
      <MainContainer>
        <Container>
          <InputComplete />
        </Container>
        <SearchResults />
      </MainContainer>
    </DataProvider>
  )
}

export default App
