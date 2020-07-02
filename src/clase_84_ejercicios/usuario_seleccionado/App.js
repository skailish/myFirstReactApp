import React from "react"
import { DataProvider } from "./contexts/DataContext"
import ListaUsuarios from "./components/ListaUsuarios"
import ControlUsuario from "./components/ControlUsuario"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}`

const MainContainer = styled.div`
  display: flex;
`

const App = () => {
  return (
    <>
      <DataProvider>
        <GlobalStyle />
        <MainContainer>
          <ListaUsuarios />
        </MainContainer>
        <ControlUsuario />
      </DataProvider>
    </>
  )
}

export default App
