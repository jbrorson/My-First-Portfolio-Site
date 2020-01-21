import React from "react";
//import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
// import Content from "./components/Content";
import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./components/About";
import FirstPage from "./components/FirstPage";

// const projects = [
//   {
//     title: "Project 1",
//     url: "https://github.com/jbrorson/React---Portfolio"
//   }
// ];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
          <FirstPage message="Hi, I'm Josefine, I'm a Front-End Developer" />

          <Route exact path="about" component={About} />
        </Switch>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch> */}
        {/* <Content /> */}
        <Card title="My skills" />
        <Card />
        <Card />
        <Card />
        {/* <Card title="About me" message="27 Y/O, from Stockholm" />
          <Card title="Contact" message="Write something to me..."/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
