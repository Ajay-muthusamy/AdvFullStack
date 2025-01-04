import React, { useState } from "react";
import "../../assets/css/Navbar.css";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setemail] = useState("");
  const [Password, setpassword] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2020/login", {
        Email,
        Password,
      });
      console.log(response)
      if (response.status == 200) {
        if(response.data.isLoggedin){
          alert(response.data.Message);
          navigate("/navbar",{state:response.data.userName});
        }
        else{
          navigate("/");
        }
      } else {
        alert(response.data.Message);
      }
    } catch (error) {
      console.log("error in login", error);
    }
  }
  return (
    <div>
      <div className="login-container" onSubmit={handlesubmit}>
        <form className="login-form">
          <h2 className="login-title">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={Email}
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={Password}
              placeholder="Enter your password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
