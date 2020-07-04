import React, {useState} from 'react'
import CharactersGallery from './components/CharactersGallery'
import CharacterCard from './components/CharacterCard'

const App = () => {
    const [characterId, setCharacterId] = useState();
    return (
        <>
            <CharacterCard id={ characterId }/>
            <CharactersGallery onCharacterSelected={ setCharacterId }/>  
        </>
    )
}

export default App
