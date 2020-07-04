import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import ComicList from './ComicList'
import EventList from './EventList'

const Img = styled.img`
    width: 150px;
    height: auto;
    border-radius: 5px;
`

const Card = styled.article`
    text-align: center;
    height: fit-content;
    margin: 0 auto;
`
const CharacterCard = ({id}) => {
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [eleccion, setEleccion]=useState('comics')
    const [listaComics, setListaComics] = useState([]);
    const [listaEvents, setListaEvents] = useState([]);

    useEffect(() => {
        const obtenerListaEvents = async () => {
            const response = await fetch(`http://gateway.marvel.com/v1/public/characters/${id}/events?limit=5&apikey=89af8964112ea3350775c024cda415b8`)
            const data = await response.json()
            setListaEvents(data.data.results)
        }

        if(id){obtenerListaEvents()}

    },[id])

    useEffect(() => {
        const obtenerListaComics = async () => {
            const response = await fetch(`http://gateway.marvel.com/v1/public/characters/${id}/comics?limit=5&apikey=89af8964112ea3350775c024cda415b8`)
            const data = await response.json()
            setListaComics(data.data.results)
        }

        if(id){obtenerListaComics()}

    },[id])
    useEffect(() => {
        const obtenerInfoCharacter = async () => {
            const response = await fetch(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=89af8964112ea3350775c024cda415b8`)
            const data = await response.json();
            setSelectedCharacter(data.data.results[0]);
        }

        if(id){ obtenerInfoCharacter()}
        
    }, [id])


    return (
        <>
            {selectedCharacter && <Card>
                <h2>{ selectedCharacter.name }</h2>
                <Img src={ selectedCharacter.thumbnail.path + "." + selectedCharacter.thumbnail.extension } alt={ selectedCharacter.name } />
                <p>{ selectedCharacter.description }</p>
                <select onChange={(event)=>setEleccion(event.target.value)}>
                    <option value="comics">Mostrar Comics</option>
                    <option value="events">Mostrar Eventos</option>
                </select>

                { eleccion==="comics" && <ComicList comics={listaComics} />}
                { eleccion === "events" && <EventList events={ listaEvents } /> }
            </Card>}
        </>
    )
}

export default CharacterCard
