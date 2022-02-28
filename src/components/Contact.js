import React, { Component } from 'react';
import logo from '../assests/images/TWW_logo.png';
import ContactForm from './ContactForm.js'
import Header from './Header.js'

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Contact.css';



function Home() {
  return (
    <div>

      <Header />

        <p className="working">
          Please let me know if you are interested in any commission work or any other inquiries!
        </p>
        <ContactForm />


    </div>
  );
}


export default Home;
