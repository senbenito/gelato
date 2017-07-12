import React, { Component } from 'react';
import logo from './logo.svg';
import StartTerm from './components/StartTerm.js'
import EndTerm from './components/EndTerm.js'
import Directions from './components/Directions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Its Cream Time</h2>
        </div>
        <StartTerm />
        <EndTerm />
        <button> submit </button>
        <Directions />

      </div>
    );
  }
}

export default App;
