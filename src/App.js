import logo from './assests/images/TWW_logo.png';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Cutting_Board_Cleaning from './components/Cutting_Board_Cleaning.js';
import Home from './Home.js';

import './App.css';



function App() {
  return (
    <div className="App">
      <Home />
      <Cutting_Board_Cleaning />


      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/Cutting_Board_Cleaning">Expenses</Link>


    </div>
  );
}

export default App;
