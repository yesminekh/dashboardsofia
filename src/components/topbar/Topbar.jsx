import React, { useEffect } from "react";
import "./topbar.css";
import image from'../../assets/logo.jpg';
import {
  NotificationOutlined ,
  SettingOutlined ,
  LogoutOutlined ,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import AuthService from "../../service/Auth.service";
import { Dropdown, Menu, } from 'antd';



export default function Topbar(props) {
  function logOut() {
    AuthService.logout();
  }
var email = AuthService.getCurrentUser()  
 
   console.log(email)

  const menu = (

    <Menu>
      
    <div className="MenuItems">
                <Link to="/HistoryAlert" >
                <li className="MenuItems ">
                  EditProfile
                </li>
                </Link>
                  <li className="MenuItems">
                    Theme
                  </li>
                
                  <li className="MenuItems">
                   <span>
                    <a href="/login" className="nav-link" onClick={logOut}>Log out</a>
                    </span>     
                     <LogoutOutlined/>
                  </li>
              </div>
              </Menu>
    
  );

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
       
          <span className="logo">SofiaTech</span>
      
        </div>
        <div className="topRight">
          
        {props.current ? 

         <div className="topbarIconContainer">
   
     </div>
      
       :
          <div className="topbarIconContainer">
          
           <span className = "nav-link" >     
                 {email.substring(0, email.indexOf('.'))} 
            </span>
                
       </div>
          }
          <div className="topRight">
          <NotificationOutlined />
          </div>

          <div className="topRight">
          <Dropdown overlay={menu} className="topRight">
           <a >
           <SettingOutlined />
           </a>
         </Dropdown>
          </div>
          
          <Link to="/" className="link">
          <li>
          <img src={image} alt="" className="topAvatar" />
          </li>
          </Link>
        </div>
      </div>
    </div>
  );
}
