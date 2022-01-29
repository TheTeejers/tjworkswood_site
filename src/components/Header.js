
import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation.js'

class Header extends Component {

  render() {
    return (
      <div className='headerContainer'>
        <Navigation />
      </div>
    );
  }
}



export default Header;
