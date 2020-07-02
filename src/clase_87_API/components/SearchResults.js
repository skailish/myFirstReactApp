import React from "react"
import useDataContext from "../contexts/DataContext"
import styled from "styled-components"

const ResultCard = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5px;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0px 0px 54px -17px rgba(0, 0, 555, 0.2);
`
const Title = styled.h2`
  color: ${(props) => props.color};
`
const Color = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const SearchResults = () => {
  const { color } = useDataContext()
  return (
    <>
      <ResultCard>
        <Title>{color.name.value}</Title>
        <Color color={color.hex.value}></Color>
        <ul>
          <li>HEX: {color.hex.value}</li>
        </ul>
      </ResultCard>
    </>
  )
}

export default SearchResults
