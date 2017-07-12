import React, {Component} from 'react'

class Form extends Component {
   constructor(props){
      super(props)
      this.state = {
         StartTerm: '',
         EndTerm:  ''
      }
      this.handleStartChange = this.handleStartChange.bind(this)
      this.handleEndChange = this.handleEndChange.bind(this)

   }
   handleFrozenChange(event) {
     this.setState({FrozenTerm: event.target.value});
   }
   handleStartChange(event) {
     this.setState({StartTerm: event.target.value});
   }
   handleEndChange(event) {
     this.setState({EndTerm: event.target.value});
   }

   render(){
      return (
         <form>
            <p>
              <input type="radio" name="frozen" id="ice-cream" value="ice+cream" onChange={ this.handleFrozenChange } />
              <label htmlFor="ice-cream">Ice Cream</label>
              <input type="radio" name="frozen" id="gelato" value="gelato" onChange={ this.handleFrozenChange } />
              <label htmlFor="gelato">Gelato</label>
              <input type="radio" name="frozen" id="fro-yo" value="frozen+yogurt" onChange={ this.handleFrozenChange } />
              <label htmlFor="fro-yo">FroYo</label>
            </p>
            <input placeholder="start location" type="text" onChange={ this.handleStartChange } />
            <input placeholder="destination" onChange={ this.handleEndChange } />
            <input type="submit" onClick={(event) => this.props.setTerms(this.state.FrozenTerm, this.state.StartTerm, this.state.EndTerm, event)} />
         </form>
      )
   }

}




export default Form
