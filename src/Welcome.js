import React from 'react';
import './Welcome.css'; 
import CustomCursor from './CustomCursor';

const Welcome = () => {
  return (
    <div className="welcome-text">
      <h1>
        <span className="animated-text">We present you</span> <br />
        <span className="animated-text">Random Compile</span> <br /> & <br />
        <span className="animated-text">FIASCOde</span>
      </h1>
    </div>
  );
};

export default Welcome;