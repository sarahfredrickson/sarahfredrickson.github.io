import React, { Component } from 'react';
import './App.css';
import About from './component/About'
import Courses from './component/Courses'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './component/Home'
import Portfolio from './component/Portfolio'

class App extends Component {
  render() {
    return (
      <div id="page">
        <div id="wrap">
          <Header />
          <div id="main">
            <Home />
            <About />
            <div id = "experiences">
              <Experience />
              <Courses />
            </div>
            <div id = "portfolio">
              <Portfolio />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
