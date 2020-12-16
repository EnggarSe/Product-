import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/logo.png'
import instagram from '../../assets/instaram.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import Coffee from '../Body/coffee'
import CoffeeSider from '../Sider/coffeeSider'
const { Header, Content, Footer, Sider } = Layout;


class Navigation extends Component {
   constructor(props) {
      super(props)
      this.state = {
         menuActive : 1,
      }
   }


   render(){
      const {menuActive} = this.state
      return(
         
         <Layout className="layout">
         <div className = "navigation-bar">
            <Header>
               <Menu className = "main-menu" theme="dark animated fadeInRight" mode="horizontal" defaultSelectedKeys={['1']}>
                  <Menu.Item className = "title-logo" key="1">KOPI</Menu.Item>
                  <Menu.Item className = "title-logo" key="1"><img className = "logo animated pulse infinite" src={logo} alt = "logo"/></Menu.Item> 
                  <Menu.Item className = "title-logo" key="3">TEH</Menu.Item>
               </Menu>
            </Header>
            </div>
            <Layout>
               <Content style={{ padding: '0 50px' }}>
               <div className="body-coffee">
               {menuActive === 1 && <Coffee/>}

               </div>
               </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>
               <Menu className = "menu-social-media" theme="dark animated fadeInRight" mode="horizontal" defaultSelectedKeys={['1']}>   
                  <Menu.Item className = "social-media-logo" > <img className = "social-media animated pulse infinite" src={instagram}  alt = "logoo"/></Menu.Item>   
                  <Menu.Item className = "social-media-logo"> <img className = "social-media animated pulse infinite" src={twitter}  alt = "logoo"/></Menu.Item>      
                  <Menu.Item className = "social-media-logo"> <img className = "social-media animated pulse infinite" src={facebook}  alt = "logoo"/></Menu.Item>              
               </Menu>
            </Footer>
         </Layout>   
         
         
      )
   }
}

export default Navigation
