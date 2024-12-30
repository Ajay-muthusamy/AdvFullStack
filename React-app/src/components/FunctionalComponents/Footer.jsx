import React from "react";
import "../../assets/css/Navbar.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="flex-container">
        <div className="meta-container">
          <div>
            <img
              src="https://logos-world.net/wp-content/uploads/2021/11/Meta-Emblem.png"
              alt="Meta Logo"
              className="footer-img"
            />
          </div>

          <div>
            <h1>Meta Open Source</h1>
            <p>Copyright © Meta Platforms, Inc uwu?</p>
          </div>
        </div>
        <div>
          <h1 style={{ borderBottom: "2px solid red" }}>Learn React</h1>
          <div>
            <ul>
              <li>Quick Start</li>
              <li>Installation</li>
              <li>Describing the UI</li>
              <li>Adding Interactivity</li>
              <li>Managing State</li>
              <li>Escape Hatches</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 style={{ borderBottom: "2px solid red" }}>API Reference</h1>
          <div>
            <ul>
              <li>React APIs</li>
              <li>React DOM APIs</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 style={{ borderBottom: "2px solid red" }}>Community</h1>
          <div>
            <ul>
              <li>Code of Conduct</li>
              <li>Meet the Team</li>
              <li>Docs Contributors</li>
              <li>Acknowledgements</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 style={{ borderBottom: "2px solid red" }}>More</h1>
          <div>
            <ul>
              <li>Blog </li>
              <li>React Native</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        
        <section className="form-container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </section>


      </section>
    </footer>
  );
};

export default Footer;
