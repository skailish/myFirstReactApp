import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Img = styled.img`
width: 150px;
height: auto;
border-radius: 5px;
`
const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;`

const Lista = styled.ul`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
list-style: none;
margin: 0;
padding: 0;
`
const CharactersGallery = ({onCharacterSelected}) => {
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        const obtenerCharacters = async () => {
            const response = await fetch("http://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&limit=5&apikey=89af8964112ea3350775c024cda415b8")
            const data = await response.json();
            setCharacters(data.data.results)
        }
        obtenerCharacters()
    }, [])

    return (
        <Lista>
            { characters.map((character) => <Item onClick={()=>onCharacterSelected(character.id)} key={character.id}><p>{ character.name }</p><Img src={ character.thumbnail.path+"."+character.thumbnail.extension} alt={character.name}/></Item>)}
        </Lista>
    )
}

export default CharactersGallery
