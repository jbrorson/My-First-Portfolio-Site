import React from 'react';
//import styled from 'styled-components';

import {
BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
//import Header from './components/Header';
import Content from './components/Content';
import Card from './components/Card';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/about">
              <About />
                </Route>
                  <Route path="/contact">
                    <About />
                  </Route>
                </Switch>
              <Content />
            <Card title="My skills" message="I'm a front-end developer" />
            {/* <Card title="About me" message="27 Y/O, from Stockholm" />
          <Card title="Contact" message="Write something to me..."/> */}
        <Footer />
      </Router>
    </div>  
  );
}

export default App;


