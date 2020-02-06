import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "&APPID=ecb6bb549043ad885a846281fc27a8f7";
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
    <Router>
      <div className="App">
        <Navbar />
        {/* <backgroundStyle /> */}
        {/* <img src={MyBackground} alt="Background" />
        </backgroundStyle> */}

        {/* <div className="Weather">
            <h4>Search for weather near you</h4>
            <Form getWeather={fetchData} />
            <Weather
              city={weather.city}
              country={weather.country}
              description={weather.description}
              temperature={weather.temperature}
              error={weather.error}
            />
          </div> */}
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />

          <Route path="/weather" component={Weather} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Card />
  </div>
);

export default App;
