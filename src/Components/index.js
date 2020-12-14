import React, {Component} from 'react'
import Navigation from './Navigation/Navigation'
import './style/index.css'

class Product extends Component {


   render(){
      return(
         <div className = "product">
            <Navigation/>
         </div>
      )
   }
}

export default Product