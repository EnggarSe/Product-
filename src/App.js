import React, {Component} from 'react';
import Product from './Components/index';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {

   render(){
      return (
         <div className="App">
            <Product/>  
         </div>
       );
     }     
   }
   
export default App;
