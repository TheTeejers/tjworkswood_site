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
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Cutting_Board_Cleaning">
                    Cutting Board Care
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navigation;
