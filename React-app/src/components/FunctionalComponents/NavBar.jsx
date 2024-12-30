import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../assets/css/Navbar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="nav-top">
        <div>
          <h1>Ajay</h1>
        </div>
        <div className="ul-list">
          <ul>
            <Link to="/" className="lis"    >
              <li>Home</li>
            </Link>
            <Link to="/about" className="lis">
              <li>About</li>
            </Link>
            <Link to="/gallery" className="lis">
              <li>Gallery</li>
            </Link>
            <Link to="/contact" className="lis">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default NavBar;
