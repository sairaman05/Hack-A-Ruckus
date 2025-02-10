import React from 'react';
import './Welcome.css'; 
import CustomCursor from './CustomCursor';

const Welcome = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="welcome-text">
        <h1>
          We present you <br />
          <span className="animated-text">Random Compile</span> <br /> & <br />
          <span className="animated-text">FIASCOde</span>
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
  