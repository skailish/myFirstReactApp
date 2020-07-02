import React from "react"
import styled from "styled-components"

const UserCard = styled.article`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Text = styled.p`
  font-weight: bold;
`

const Usuario = ({ user }) => {
  return (
    <UserCard>
      <Text>
        Nombre <span>{user.firstname}</span>
      </Text>
      <Text>
        Apellido <span>{user.lastname}</span>
      </Text>
      <Text>
        Compañía <span>{user.company}</span>
      </Text>
    </UserCard>
  )
}

export default Usuario
