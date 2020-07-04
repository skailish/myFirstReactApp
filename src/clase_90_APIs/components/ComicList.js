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

const ComicList = ({comics}) => {

    return (
        <Lista>
            { comics.map((comic) => <Item key={ comic.id }><strong>{ comic.title }</strong><Img src={ comic.thumbnail.path + "." + comic.thumbnail.extension }/></Item>)}
        </Lista>
            
    )
}

export default ComicList
