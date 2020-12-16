import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Image, Carousel } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import courasel1 from '../../assets/courasel3.jpeg'
import { MDBAnimation } from "mdbreact";
const { Header, Content, Footer } = Layout;


const contentStyle = {
   marginTop : "30px",
   height: '500px',
   width : "300px",
   color: '#fff',
   lineHeight: '160px',
   textAlign: 'center',
   background: '#364d79',
 };

class CoffeeSider extends Component {


   render(){
      return(
      <div className = "coffee-sider"> 
         <img src={courasel1} alt=""/>
      </div>
             
         
         
      )
   }
}

export default CoffeeSider
