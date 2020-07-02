import React, { useContext } from "react"
import DataContext from "../contexts/DataContext"
import styled from "styled-components"

const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid lightgray;
`
const Text = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
`
const Data = styled.span`
  font-weight: normal;
`

const DetalleUsuarioData = (currentUser) => {
  return (
    <>
      <Text>
        Edad <Data>{currentUser.age}</Data>
      </Text>
      <Text>
        Mail <Data>{currentUser.email}</Data>
      </Text>
      <Text>
        Teléfono <Data>{currentUser.phone}</Data>
      </Text>
    </>
  )
}

const DetalleUsuario = () => {
  const { currentUser } = useContext(DataContext)
  return (
    <DetailsCard>
      {currentUser.lenght > 0 ? (
        <DetalleUsuarioData currentUser={currentUser} />
      ) : (
        "Seleccione un usuario"
      )}
    </DetailsCard>
  )
}

export default DetalleUsuario
