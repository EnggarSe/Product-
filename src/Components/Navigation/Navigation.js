import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/logo.png'
import Coffee from '../Body/coffee'
const { Header, Content, Footer } = Layout;
// import { MDBAnimation } from "mdbreact";



class Navigation extends Component {


   render(){
      return(
         
         <Layout className="layout">
         <div className = "navigation-bar">
            <Header>
               <Menu theme="dark animated fadeInRight" mode="horizontal" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">KOPI</Menu.Item>
                 <img className = "logo animated pulse infinite" src={logo} alt = "logo"/>
                  <Menu.Item key="3">TEH</Menu.Item>
               </Menu>
            </Header>
            </div>
               <Content style={{ padding: '0 50px' }}>
               <div className="site-layout-content">


               </div>
               </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
         </Layout>   
         
         
      )
   }
}

export default Navigation
