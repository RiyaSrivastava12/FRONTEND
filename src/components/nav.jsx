import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LoginIcon from "@mui/icons-material/Login";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const login = useSelector((state) => state.login);
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact to="/">
            Health Service Management
            <LocalHospitalIcon />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-pills me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/home"
                >
                  <i class="fas fa-home" />
                  &nbsp; Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/insurance">
                  <i class="fas fa-users" />
                  &nbsp; Insurance-Policy
                </NavLink>
              </li>
              
              
              
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  <i class="fas fa-book-open" />
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
              {login.loggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/logout">
                    <i class="fas fa-sign-in-alt" />
                    &nbsp; Logout
                    
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/login">
                    <i class="fas fa-user-plus" />
                    &nbsp; Login
                    
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
