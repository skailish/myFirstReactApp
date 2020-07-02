import React, { useEffect, useState } from 'react'

const EjemploClase = () => {
    const [fotoUrl, setFotoUrl] = useState()
    // useEffect(() => {
    //     fetch("https://restcountries.eu/rest/v2/all")
    //         .then((response) => response.json())
    //         .then(data => data[2].name)
    //         .then(pais => fetch(`https://pixabay.com/api/?key=17287699-3c0e5ae910dd0a59e921fdb57&q=${pais}&image_type=photo&per_page=3`))
    //         .then(response => response.json())
    //         .then(data => setFotoUrl(data.hits[0].largeImageURL))

    // }, [])


    useEffect(() => {
        const obtenerFoto = async () => {
            const paises = await fetch("https://restcountries.eu/rest/v2/all")
            const result = await paises.json()
            const pais = result[10].name
            const foto = await fetch(`https://pixabay.com/api/?key=17287699-3c0e5ae910dd0a59e921fdb57&q=${pais}&image_type=photo&per_page=3`)
            const fotoJson = await foto.json()
            setFotoUrl(fotoJson.hits[0].largeImageURL)
        }
        obtenerFoto()
    }, [])

    return (
        <div>

            <img src={ fotoUrl } alt="" />
        </div>
    )
}

export default EjemploClase
