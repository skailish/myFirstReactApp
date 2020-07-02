import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #fff;
    display: flex; 
    justify-content: space-around;
}
`;

const SearchArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;`

const MainContainer = styled.div`
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Card = styled.article`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
padding: 0 10px;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: inset 0px 0px 54px -17px rgba(0, 0, 111, 0.1);
color: #6585ab;
margin-bottom: 20px;
`;
const Select = styled.select`
border-radius: 5px;
height: 50px;
width: 300px;
border: 1px solid #eee;
padding: 5px;`

const Results = styled.div`
width: 50%;
display: flex;
`
const SelectedCountry = styled.div`
position: fixed;
border-radius:10px;
right: 0;
top: 90px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: fit-content;
max-width: 50%;
overflow: hidden;
margin: 20px;
`
const FlagContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
    overflow: hidden;
    margin-left: 10px;
`;

const Img = styled.img`
`;

const Info = styled.p`
color: #6585ab;
`
const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Cuando la respuesta llega bien
                setData(data)
                setIsLoading(false)
            })
            .catch(() => {
                // Cuando hay un error
                setIsLoading(false)
                setIsError(true)
            })
    }, [url])

    return [data, isLoading, isError]
}

// Create the select list
const toRegions = (acc, actual) => {
    acc.push(actual.region)
    return acc
}
const toUniqueRegions = (acc, actual) => {
    let isValid = actual !== "" && !acc.includes(actual);
    return isValid ? [...acc, actual] : acc;
}
const listRegions = (country, index) => {
    return (<option value={ country } key={ index }>{ country }</option>)
}

const App = () => {
    const [regionName, setRegionName] = useState("all");
    const [photoSrc, setPhotoSrc] = useState()
    // get the data
    const [data] = useFetch("https://restcountries.eu/rest/v2/all")
    const [countries, isLoading, isError] = useFetch(
        regionName !== "all"
            ? `https://restcountries.eu/rest/v2/region/${regionName}`
            : "https://restcountries.eu/rest/v2/all"
    );
    const [photoInfo, setPhotoInfo] = useState()

    const [showSelectedCountry, setShowSelectedCountry] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("argentina")
    const [selectedCountryData] = useFetch(`https://restcountries.eu/rest/v2/name/${selectedCountry}`)

    const [actualPhoto] = useFetch(`https://pixabay.com/api/?key=17287699-3c0e5ae910dd0a59e921fdb57&q=${selectedCountry}&image_type=photo&per_page=3`)


    const showCountryInfo = (event) => {
        setSelectedCountry(event.target.innerText)
        setShowSelectedCountry(true)
    }
    const filterRegion = (event) => { setRegionName(event.target.value); setShowSelectedCountry(false) }

    useEffect(() => {

        console.log("entré")
        if (actualPhoto) {
            setPhotoSrc(actualPhoto.hits[0].webformatURL)
            setPhotoInfo(actualPhoto)
        }


    }, [actualPhoto])


    return (
        <>
            { isLoading && <p>Loading...</p> }
            { isError && <p>Error! Try again </p> }
            { data && (
                <MainContainer>
                    <GlobalStyle />
                    <SearchArea>
                        <Select onChange={ filterRegion }>
                            <option value="all">All</option>
                            {
                                data
                                    .reduce(toRegions, [])
                                    .reduce(toUniqueRegions, [])
                                    .map(listRegions) }
                        </Select>
                    </SearchArea>
                    <Results>
                        <Container>
                            { countries &&
                                countries.map((country) => (
                                    <Card key={ country.name } onClick={ showCountryInfo }>
                                        <h5>{ country.name }</h5>
                                        <FlagContainer><img src={ `https://www.countryflags.io/${country.alpha2Code}/flat/32.png` } alt={ country.alpha2Code } /></FlagContainer>
                                    </Card>
                                )) }
                        </Container>
                        <SelectedCountry>
                            { !showSelectedCountry && <h3>Select a country from the list</h3> }
                            { showSelectedCountry && (
                                <><h1>{ selectedCountryData[0].name }</h1>
                                    <Info>
                                        <Img src={ photoSrc } alt={ selectedCountryData[0].name } />
                                        { photoInfo && <p>{ console.log(photoInfo.tags) }</p> }

                                    </Info></>) }
                        </SelectedCountry>
                    </Results>
                </MainContainer>
            )
            }
        </>
    );
};

export default App;