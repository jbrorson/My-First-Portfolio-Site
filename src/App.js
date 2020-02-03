//import React, { Component, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

// const AppStyle = styled.div`
//   width: 100%;
//   height: 100%;
// `;

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* <Card /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
//function App() {
// const [weather, setWeather] = useState([]);
// const APIKEY = "&APPID=ecb6bb549043ad885a846281fc27a8f7";
// async function fetchData(e) {
//   const city = e.target.elements.city.value;
//   const country = e.target.elements.country.value;
//   e.preventDefault();
//   const apiData = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
//   )
//     .then(res => res.json())
//     .then(data => data);
//   if (city && country) {
//     setWeather({
//       data: apiData,
//       city: apiData.city,
//       country: apiData.sys.country,
//       description: apiData.weather[0].description,
//       temperature: Math.round(apiData.main.temp - 273.15),
//       error: ""
//     });
//   } else {
//     setWeather({
//       data: "",
//       city: "",
//       country: "",
//       description: "",
//       temperature: "",
//       error: "Please Type A City And Country"
//     });
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <Switch>
//             <Header />
//             <Route path="/weather" component={Weather}></Route>
//           <div className="Weather">
//             <h4>Search for weather near you</h4>
//             <Form getWeather={fetchData} />
//             <Weather
//               city={weather.city}
//               country={weather.country}
//               description={weather.description}
//               temperature={weather.temperature}
//               error={weather.error}
//             />
//           </div>
//             <Route exakt path="/" component={Home} />
//             <Route path="/about" component={About} />
//           </Switch>
//           <Card title="Hello, I'm Josefine" />
//           <Content />
//           <Footer />
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;
