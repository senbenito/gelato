import React, {Component} from 'react';

class Directions extends Component{
   constructor(props){
      super(props)
   }

   render(){
      let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDu22c6aKA6YrRNOQs9TusUKMWoA7KHBH8&origin=${ this.props.StartTerm }&waypoints=gelato%20${ this.props.EndTerm }&destination=${ this.props.EndTerm }`
      let elm = null
      if (true) {
         elm =     <iframe className="map"
                    src={ url } allowfullscreen>
                  </iframe>
      }

      return(
         <div>
           { elm }
         </div>
      )
   }
}

export default Directions
//dgd
