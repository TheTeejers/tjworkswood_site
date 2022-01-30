import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import logo from '../assests/images/sawblade_logo.png';

function Navigation() {
  return (
    <div className="navigation1">

        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navigation">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} className="TWW_logo_menu" alt="logo" />
            </NavLink>
            <div class="dropdown-content">
              <ul className="navbar-nav ml-auto">
                <NavLink className="nav-link" to="/">
                  <li className="nav-item">
                    Home
                  </li>
                </NavLink>
                <NavLink className="nav-link" to="/Cutting_Board_Care">
                  <li className="nav-item">
                    Cutting Board Care
                  </li>
                </NavLink>
                <NavLink className="nav-link" to="/Projects">
                  <li className="nav-item">
                    Projects
                  </li>
                </NavLink>
                <a className="nav-link" href="https://www.youtube.com/channel/UC1-dqpQvYh7XpVCsma_Fnog" target="blank">
                  <li className="nav-item">
                    Videos
                  </li>
                </a>
                <NavLink className="nav-link" to="/About">
                  <li className="nav-item">
                    About
                  </li>
                </NavLink>
                <NavLink className="nav-link" to="/Contact">
                  <li className="nav-item">
                    Contact
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navigation;
