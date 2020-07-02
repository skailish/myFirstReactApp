import React, { useContext } from "react"
import Usuario from "./Usuario"
import DataContext from "../contexts/DataContext"

import styled from "styled-components"

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0 0 40px 20px;
  padding: 0;
`

const Filters = () => {
  const { users, handleClick } = useContext(DataContext)

  const listUsuarios = (user) => {
    return (
      <Usuario
        key={user._id}
        id={user._id}
        name={user.name.first}
        lastname={user.name.last}
        company={user.company}
        onEvent={handleClick}
      />
    )
  }
  const finalUserList = users.map(listUsuarios)

  return <ListContainer>{finalUserList}</ListContainer>
}

export default Filters
