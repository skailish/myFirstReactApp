import React,{useEffect, useState} from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 150px;
    height: auto;
    border-radius: 5px;
`

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const Lista = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`


const EventList = ({events}) => {
    return (
        <Lista>
            { events.map((event) => <Item key={ event.id }><strong>{ event.title }</strong><Img src={ event.thumbnail.path + "." + event.thumbnail.extension }/></Item>)}
        </Lista>
            
    )
}

export default EventList
