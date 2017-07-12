import React, { Component } from 'react';
import logo from './logo.svg';
import StartTerm from './components/StartTerm.js'
import EndTerm from './components/EndTerm.js'
import Directions from './components/Directions'
// import Mappy from './components/Mappy.js'
import './App.css';

class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         StartTerm : 'Boulder CO',
         EndTerm: 'Denver CO'
      }
   }

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
        <Directions
            StartTerm={ this.state.StartTerm }
            EndTerm={ this.state.EndTerm }
             />
      </div>
    );
  }
}

export default App;
