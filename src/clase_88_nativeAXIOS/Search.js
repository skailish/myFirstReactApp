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
    justify-content: center;
}
`;
const MainContainer = styled.div``;

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Card = styled.article`
width: 300px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: inset 0px 0px 54px -17px rgba(0, 0, 111, 0.1);
color: #6585ab;
margin: 10px;
`;

const ImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
    border-radius:10px;
    border: 4px solid #eee;
    width: 60px;
    height: 40px;
    overflow: hidden;
    margin-top: 20px;
`;

const useFetch = (url) => {
    console.log(url)
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
};

const App = () => {
    const [countryName, setCountryName] = useState("EU");

    const filters = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']

    const [countries] = useFetch(
        countryName !== "all"
            ? `https://restcountries.eu/rest/v2/regionalbloc/${countryName}`
            : "https://restcountries.eu/rest/v2/all"
    );

    return (
        <>
            { filters && (
                <MainContainer>
                    <GlobalStyle />
                    <Search />
                    <select onChange={ (event) => setCountryName(event.target.value) }>
                        <option value="all">All</option>
                        { filters.map((filter, index) => (
                            <option value={ filter } key={ index }>
                                { filter }
                            </option>
                        )) }
                    </select>
                    <Container>
                        { countries &&
                            countries.map((country, index) => (
                                <Card key={ index }>
                                    <h1>{ country.name }</h1>
                                    <ImgContainer><img src={ `https://www.countryflags.io/${country.alpha2Code}/flat/64.png` } alt={ country.alpha2Code } /></ImgContainer>
                                </Card>
                            )) }
                    </Container>
                </MainContainer>
            )
            }
        </>
    );
};

export default App;