import React from "react"
import styled from "styled-components"

const UserCard = styled.article`
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 54px -17px rgba(65, 85, 00, 0.3);
  border-radius: 20px;
`
const Text = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
`

const Data = styled.span`
  font-weight: normal;
`

const Usuario = ({ id, name, lastname, company, onEvent }) => {
  return (
    <UserCard value={id} onClick={onEvent}>
      <Text>
        Nombre <Data>{name}</Data>
      </Text>
      <Text>
        Apellido <Data>{lastname}</Data>
      </Text>
      <Text>
        Compañía <Data>{company}</Data>
      </Text>
    </UserCard>
  )
}

export default Usuario
