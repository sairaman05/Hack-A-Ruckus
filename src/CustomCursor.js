import React, { useEffect, useState } from "react";
import "./CursorStyles.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false); 
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 500); // Duration of the glow effect
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick); 

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div
        className={`custom-cursor-inner ${isClicked ? "custom-cursor-glow" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-outer ${isClicked ? "custom-cursor-glow" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
