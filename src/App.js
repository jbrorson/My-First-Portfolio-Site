import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SearchWeather from "./components/SearchWeather";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/weather" component={SearchWeather} />
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
