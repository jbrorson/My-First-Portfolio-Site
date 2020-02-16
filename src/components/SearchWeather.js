import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Weather from "./Weather";

const StyledApi = styled.div`
  display: block;
  justify-content: center;
  margin-top: 20vh;
  padding: 20px;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  color: ${props => props.theme.main};
`;

function SearchWeatherApi() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "4c3bcc1a616eb2ab02b2cde1a35170a6";
  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    )
      .then(res => res.json())
      .then(data => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp - 273.15),
        error: ""
      });
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        description: "",
        temperature: "",
        error: "Please Type A City And Country"
      });
    }
  }

  return (
    <StyledApi>
      <div className="WeatherApi">
        <h3>WEATHER APP</h3>
        <Form getWeather={fetchData} />
        <Weather
          city={weather.city}
          country={weather.country}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
        />
        {console.log(weather.data)}
      </div>
    </StyledApi>
  );
}

export default SearchWeatherApi;
