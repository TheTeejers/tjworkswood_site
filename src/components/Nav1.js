import React, { Component } from 'react';
import logo from '../assests/images/sawblade_logo.png';



// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Nav1.css';



function Nav1() {
  return (
    <header id="header">
  <a class="site-logo" href="#">
           Logo
        </a>

  <nav role="navigation" id="nav-main" class="okayNav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contacts</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Testimonials</a></li>
    </ul>
  </nav>
</header>
)};

export default Nav1


// <div id="container">
//     <nav>
//         <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="#">WordPress</a>
//
//             <ul>
//                 <li><a href="#">Themes</a></li>
//                 <li><a href="#">Plugins</a></li>
//                 <li><a href="#">Tutorials</a></li>
//             </ul>
//             </li>
//             <li><a href="#">Web Design</a>
//
//             <ul>
//                 <li><a href="#">Resources</a></li>
//                 <li><a href="#">Links</a></li>
//                 <li><a href="#">Tutorials</a>
//
//                 <ul>
//                     <li><a href="#">HTML/CSS</a></li>
//                     <li><a href="#">jQuery</a></li>
//                     <li><a href="#">Other</a>
//
//                         <ul>
//                             <li><a href="#">Stuff</a></li>
//                             <li><a href="#">Things</a></li>
//                             <li><a href="#">Other Stuff</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//                 </li>
//             </ul>
//             </li>
//             <li><a href="#">Graphic Design</a></li>
//
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">About</a></li>
//         </ul>
//     </nav>
//   <h1>Pure CSS Drop Down Menu</h1>
// <p> A simple dropdown navigation menu made with CSS Only. Dropdowns are marked with a plus sign ( + )</p>
// </div>
