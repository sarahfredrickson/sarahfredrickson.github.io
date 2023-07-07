import React, { Component } from 'react';
import './App.css';
import About from './component/About'
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
            <Portfolio />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
