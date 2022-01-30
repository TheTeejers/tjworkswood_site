import React, { Component } from 'react';
import logo from '../assests/images/TWW_logo.png';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Home.css';



function Home() {
  return (
    <div className="App-header">
      <img src={logo} className="TWW_logo_main" alt="logo" />
      <div className="announcement">
        <p className="working">
          TJWorksWood.com is currently under maintenance....
        </p>
      </div>
    </div>
  );
}


export default Home;
