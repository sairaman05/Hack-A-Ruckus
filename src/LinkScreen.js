import React from "react";
import "./LinkScreenStyles.css";
import sangiImage from './sangi.jpg';
import CustomCursor from "./CustomCursor";

export default function LinkScreen({ scrollToSection }) {
  return (
    <>
    <div className="wholeclass">
      {/* Red Section */}
      <div className="red-section" style={{ marginTop: '30px' }}>
        <div className="logo-container">
          <h1 className="logo-text">NEUR</h1>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/redrat-910fc.appspot.com/o/299233591_140315688398063_6966127431664232928_n.jpg?alt=media&token=2b0aa366-24f0-4383-a247-5e66e8566152"
            alt="Logo" 
            className="logo-img" 
          />
          <h1 className="logo-text">ONIX</h1>
        </div>
      </div>

      {/* Black Section */}
      <div className="black-section">
        <div className="footer-column">
          <br />
          <br />
          <br />
          <h4>Get in touch with us!</h4>
          <div className="social-handles">
            <h5>LinkedIn</h5>
            <p>@Neuronix Club AIE</p>
            <p>@I R Oviya</p>
            <h5>Instagram</h5>
            <p>@neuronix_ai</p>
            <p>@oviya.ir</p>
          </div>
        </div>

        <div className="footer-column">
          <br />
          <br />
          <br />
          <h4>Visit Us</h4>
          <p>Amrita Vishwa Vidyapeetham</p>
          <p>Chennai Campus</p>
          <p>337/1A, Vengal Village,</p>
          <p>Thiruvallur District</p>
          <p>Tamil Nadu - 601 103</p>
        </div>

        <div className="footer-column contact-info">
          <br />
          <br />
          <br />
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.949799020373!2d80.0274183!3d13.2629694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52814946112d6f%3A0x57a644f6f25f9b0c!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Chennai!5e0!3m2!1sen!2sin!4v1716385421543!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}