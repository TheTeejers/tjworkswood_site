
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className='footerContainer'>
        <p>Designed and Developed with &hearts; by <a className='mailLink' href="mailto:tj@tjworkswood.com">TJ Loughry</a></p>
        <p>&#9400; 2022</p>
      </div>
    );
  }
}



export default Footer;
