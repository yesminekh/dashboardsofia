import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import Home from "./components/pages/home/home";
import Calendarr from "./components/pages/calendar/Calendarr";
import Login from './components/pages/login/Login'
import Singup from "./components/pages/Singup/Singup";
import HistoryAlert from './components/pages/HistoryAlert/HistoryAlert.jsx'
import { Layout } from 'antd';
import './App.css'
import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import MainApp from "./components/MainApp";
const { Header, Content, Sider } = Layout;


function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp/>}>          
                        <Route index path="/" element={<Home />} />
                        <Route path="/Calendar" element={<Calendarr />} />
                        <Route path="/Calendar/:id" element={<Calendarr />} />
                        <Route path="/HistoryAlert" element={<HistoryAlert />} />
           </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </Provider>


  );
}
export default App;