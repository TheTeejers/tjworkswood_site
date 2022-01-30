import logo from './assests/images/TWW_logo.png';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Cutting_Board_Care from './components/Cutting_Board_Care.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';

import './App.css';



function App() {
  return (
    <div>
      <Header />

      <div className="App">


        <Home />


        <Footer />
      </div>
    </div>
  );
}

export default App;
