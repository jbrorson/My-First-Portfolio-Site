import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Form from "./components/Form";
import Weather from "./components/Weather";
//import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

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
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/weather" component={Weather}></Route>
          <div className="Weather">
            <h4>Search for weather near you</h4>
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
          <Route exakt path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="Weather" component={Weather} /> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>
          <Route path="/">
            <About />
          </Route> */}
        </Switch>
        <Card title="Hello, I'm Josefine" />
        {/* <Content /> */}
        {/* <Card title="About me" message="27 Y/O, from Stockholm" />
          <Card title="Contact" message="Write something to me..."/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
