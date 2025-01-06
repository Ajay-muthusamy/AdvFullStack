import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../../assets/css/Navbar.css";

const NavBar = () => {
   const location = useLocation();
   const {state} = location || "Navbar";
  return (
    <header>
      <nav className="nav-top">
        <div>
          <h1>{state}</h1>
        </div>
        <div className="ul-list">
          <ul>
            <Link to="/navbar" className="lis"    >
              <li>Home</li>
            </Link>
            <Link to="navbar/about" className="lis">
              <li>About</li>
            </Link>
            <Link to="navbar/gallery" className="lis">
              <li>Gallery</li>
            </Link>
            <Link to="navbar/contact" className="lis">
              <li>Contact</li>
            </Link>
            <Link to="navbar/use-memo" className="lis">
              <li>useMemo</li>
            </Link>
            <Link to="/login" className="lis">
              <li>Login</li>
            </Link>
            <Link to="/register" className="lis">
              <li>SignUp</li>
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default NavBar;
