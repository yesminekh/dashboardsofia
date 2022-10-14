import React from 'react';
import { Link } from "react-router-dom";
import'./Sidebar.css';
import {
    DesktopOutlined,
    CalendarOutlined,
    TeamOutlined 
    } from '@ant-design/icons';
  export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
            <li >

              <Link to="/" className='sidebarListItem' >
                <DesktopOutlined  className='sidebarIcon' />
                  Home
              </Link>
              </li>

              <li >
              <Link to="/Calendar" className="sidebarListItem">
                  <CalendarOutlined className="sidebarIcon" />
                  Calendar
              </Link>
              </li>

              <li >
              <Link to="/HistoryAlert" className="sidebarListItem">
                  <TeamOutlined className="sidebarIcon" />                  
                  Profile
              </Link>
              </li>

            </ul>
          </div>
          </div>
        </div>
    );
  }
  