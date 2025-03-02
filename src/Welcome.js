import React from 'react';
import './Welcome.css';
import CustomCursor from './CustomCursor';
import { auth } from './utils/firebase.utils';
import { FaUserCircle } from 'react-icons/fa';
import Logo from "./neuronix.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* User Info at Top Right Corner */}
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span className="user-name">{auth?.currentUser?.displayName || "Guest"}</span>
      </div>

      {/* Welcome Text */}
      <div className="welcome-text">
        <h1>
          <span className="animated-text">We present you</span> <br />
          <span className="animated-text">FIASCOde</span> <br /> & <br />
          <span className="animated-text">RANDOM (COmPilE)</span>
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
