import React from "react"
import useDataContext from "../contexts/DataContext"
import Filter from "./Usuario"

import styled from "styled-components"

const ListContainer = styled.ul`
  margin: 0 0 40px 20px;
  padding: 0;
`

const Filters = () => {
  let i = 0
  const { pokemonList, filters, setFilters } = useDataContext()

  const handleClick = (event) => {
    return event.target.checked
      ? setFilters([...filters, event.target.value])
      : setFilters(filters.filter((filter) => filter !== event.target.value))
  }

  const toListOfAllTypes = (acc, actual) => {
    acc.push(...actual.type)
    return acc
  }

  const toListOfSingleTypes = (acc, actual) => {
    return acc.includes(actual) ? acc : [...acc, actual]
  }

  const listTypes = (tipo) => {
    i++
    return <Filter key={i} text={tipo} clickHandler={handleClick} />
  }
  return (
    <ListContainer>
      {pokemonList
        .reduce(toListOfAllTypes, [])
        .reduce(toListOfSingleTypes, [])
        .map(listTypes)}
    </ListContainer>
  )
}

export default Filters
