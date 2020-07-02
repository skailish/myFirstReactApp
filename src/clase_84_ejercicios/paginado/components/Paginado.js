import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Lista = styled.ul`
  display: flex;
`
const Item = styled.li`
  color: ·6585ab;
  background-color: white;
  font-weight: bold;
  width: 20px;
  height: 20px;
  padding: 10px;

  &:hover {
    color: white;
    background-color: #6585ab;
  }
`
const Paginado = () => {
  return (
    <Lista>
      <Item key="1">1</Item>
      <Item key="2">2</Item>
      <Item key="3">3</Item>
      <Item key="4">4</Item>
      <Item key="5">5</Item>
    </Lista>
  )
}

export default Paginado
