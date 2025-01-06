import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/Navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <header>
      <nav className="nav-top">
        <div>
          <h1>{username || "Guest"}</h1>
        </div>
        <div className="ul-list">
          <ul>
            <Link to="/navbar" className="lis">
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

            <li className="lis" onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default NavBar;
