import React from "react";
import "./LinkScreenStyles.css";
import sangiImage from './sangi.jpg';  


export default function LinkScreen({ scrollToSection }) {
  return (
    <>
      {/* Red Section */}
      <div className="red-section">
        <div className="logo-container">
          <h1 className="logo-text">NEUR</h1>
          <img src={sangiImage} alt="Logo" className="logo-img" />
          <h1 className="logo-text">ONIX</h1>
        </div>
      </div>

      {/* Black Section */}
      <div className="black-section">
        <div className="footer-column">
          <h4>Get in touch</h4>
          <p>ahhh uhhhh </p>
          <p>uhhhh ahhhh</p>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>

        <div className="footer-column">
          <h4>hi nga</h4>
          <p>therila bhaa</p>
          <p>yosikanum</p>
          <p>bye</p>
        </div>

        <div className="footer-column">
          <h4>hello</h4>
          <p>i dont know what to say here uh</p>
          <p>chumma nga </p>
          <p>10999</p>
        </div>
      </div>
    </>
  );
}
