import React, { Component } from 'react';
import logo from '../assests/images/sawblade_logo.png';



// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Nav.css';


function Nav() {
  return (
    <div id="container">

        <nav id='navBar'>


            <ul>
                <li><a href="/"><img className="navLogo" src={logo} className="TWW_logo_header" alt="logo" /></a></li>
                <li><a href="#">WordPress</a>

                <ul>
                    <li><a href="#">Themes</a></li>
                    <li><a href="#">Plugins</a></li>
                    <li><a href="#">Tutorials</a></li>
                </ul>
                </li>
                <li><a href="#">Web Design</a>

                <ul>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Links</a></li>
                    <li><a href="#">Tutorials</a>

                    <ul>
                        <li><a href="#">HTML/CSS</a></li>
                        <li><a href="#">jQuery</a></li>
                        <li><a href="#">Other</a>

                            <ul>
                                <li><a href="#">Stuff</a></li>
                                <li><a href="#">Things</a></li>
                                <li><a href="#">Other Stuff</a></li>
                            </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><a href="#">Graphic Design</a></li>

                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>

    <p> A simple dropdown navigation menu made with CSS Only. Dropdowns are marked with a plus sign ( + )</p>
    </div>
)};

export default Nav


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
