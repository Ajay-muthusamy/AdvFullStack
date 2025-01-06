import React, { useEffect, useState } from "react";
import "../../assets/css/Navbar.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const[firstName,setfirstName] = useState(""); 
  const[lastName,setlastName] = useState(""); 
  const[email,seteamil] = useState(""); 
  const[password,setpassword] = useState(""); 

  async function handlesubmit(e){
    console.log(firstName,lastName,email,password);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2020/signup',{
        firstName,
        lastName,
        email,
        password
      });
      if(response.status == 200){
        alert(response.data);
        navigate('/login');
      }
      console.log(response);
    } catch (error) {
      console.log("error in the post")
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handlesubmit}>
        <h2 className="register-title">Register</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e)=>setfirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            placeholder="Enter your last name"
            onChange={(e)=>setlastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e)=>seteamil(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e)=>setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        
      </form>
    </div>
  );
};

export default Register;
