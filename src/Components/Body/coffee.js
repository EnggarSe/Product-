import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import royalAro from '../../assets/royalAro3.png'
import { MDBAnimation } from "mdbreact";
const { Header, Content, Footer } = Layout;




class Coffee extends Component {


   render(){
      return(
      <div className = "description">
         <h1 className = "title">The Power <br/>of Royal Aro</h1>
         <MDBAnimation type = "bounce" infinite duration = "2s" >
         <Image className = "royal-aro " width={800} src={royalAro} />
         </MDBAnimation>
         <h3 className = "title2">Authentic arabica coffee <br/>from roast bean light to medium <br/>authentic and unique taste <br/> the heritage is our pride</h3>
      </div>
             
         
         
      )
   }
}

export default Coffee
