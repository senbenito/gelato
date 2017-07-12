import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form.js'
import Directions from './components/Directions'
// import Mappy from './components/Mappy.js'
import './App.css';

class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         StartTerm : 'Galvanize Boulder CO',
         EndTerm: 'Boulder Public Library CO'
      }
    this.setTerms = this.setTerms.bind(this)
   }

   setTerms (Start, End, event){
      event.preventDefault()
      console.log('set terms', Start, End);
      this.setState({
         StartTerm: Start,
         EndTerm: End
      })
   }

   // funtion
   //    gets called on submit, takes props of Terms and updare state

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Its Cream Time</h2>
        </div>
        <Form setTerms={ this.setTerms }/>
        <Directions
            StartTerm={ this.state.StartTerm }
            EndTerm={ this.state.EndTerm }
             />
      </div>
    );
  }
}

export default App;
