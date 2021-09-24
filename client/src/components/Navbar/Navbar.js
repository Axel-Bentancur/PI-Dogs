import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "./logodog2.png";

export default function Navbar({ location }) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/dogs">
          <img src={Logo} alt="ADOG logo" title="About Dogs" className="img" />
        </Link>
        {location.pathname === "/dogs/newdog" ? (
          <Link to="/dogs">
            <div className="button">
              <span>Search</span>
            </div>
          </Link>
        ) : (
          <Link to="/dogs/newdog">
            <div className="button">
              <span>+ New Breed</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
