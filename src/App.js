import React, { Component } from 'react';
import Form from './components/Form.js'
import Directions from './components/Directions'
import './App.css';

class App extends Component {
   constructor(props){
      super(props)
      this.state = {
        FrozenTerm : 'ice+cream',
        StartTerm : 'Galvanize Boulder',
        EndTerm: 'Boulder Public Library CO'
      }
    this.setTerms = this.setTerms.bind(this)
   }

   setTerms (Frozen, Start, End, event){
      event.preventDefault()
      this.setState({
        FrozenTerm: Frozen,
        StartTerm: Start,
        EndTerm: End
      })
   }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={'https://s-media-cache-ak0.pinimg.com/originals/9c/36/1f/9c361fd7c7d2311b9cf776490de7b600.gif'} className="App-logo" alt="logo" />
          <h2> knex('life').insert('ice-cream') </h2>
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
