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

   handleStartChange(event) {
      console.log('start change');
     this.setState({StartTerm: event.target.value});
   }
   handleEndChange(event) {
      console.log('end change');
     this.setState({EndTerm: event.target.value});
   }

   render(){
      console.log('from state start', this.state.StartTerm);
      return (
         <form>
            <input placeholder="start location" type="text" onChange={ this.handleStartChange } />
            <input placeholder="destination" onChange={ this.handleEndChange } />
            <input type="submit" onClick={(event) => this.props.setTerms(this.state.StartTerm, this.state.EndTerm, event)} />
         </form>
      )
   }

}




export default Form
