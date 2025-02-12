import React from "react";
import "./LinkScreenStyles.css";

export default function LinkScreen({ scrollToSection }) {
  return (
    <>
      {/* Top blue line with title */}
      <div className="footer-title">HACK-A-RUCKUS</div>
      
      <div className="footer-content">
        {/* Left section with details */}
        <div className="footer-column">
          <h4>Social Media Links</h4>
          <div className="hover-line">
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com">Twitter</a>
          </div>

          <h4>Address</h4>
          <div className="hover-line">
            <p>337/1 A, Vallal RCK Nagar, SH 50A, Vengal, Tamil Nadu 601103</p>
            <a href="https://www.google.com/maps?q=337/1+A,+Vallal+RCK+Nagar,+SH+50A,+Vengal,+Tamil+Nadu+601103">Map</a>
          </div>
        </div>
        
        {/* Middle section with contact details */}
        <div className="footer-column">
          <h4>Contact Details</h4>
          <div className="hover-line">
            <p>Phone: <a href="tel:+919965503536">+91 99655 03536</a></p>
          </div>
          <button className="button-78" onClick={() => scrollToSection(0)}>Move to Top</button>
        </div>

        {/* Right section with image */}
        <div className="footer-column footer-image">
          <img src="/mnt/data/image.png" alt="Footer Graphic" className="footer-graphic" />
        </div>
      </div>
    </>
  );
}
