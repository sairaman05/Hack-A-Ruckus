import React, { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import CustomCursor from "./CustomCursor";

const HomeScreen = lazy(() => import("./HomeScreen"));

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000); // Welcome screen duration

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (main) => {
    try {
      await loadFull(main); // Ensures tsparticles is properly initialized
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: "#000" },
    },
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: ["#4facfe", "#00f2fe"] },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: true },
      size: { value: 5, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  };

  return (
    <div>
      <useCanvasCursor />
      {showWelcome && (
        <div className="welcome-screen">
          <Particles
            id="welcome-particles"
            init={particlesInit}
            options={particlesOptions}
            className="particles-container"
          />
          <div className="welcome-message">
            <h1 className="sliced-text">WELCOME TO Hack-a-Ruckus</h1>
          </div>
        </div>
      )}
      {!showWelcome && (
        <Suspense fallback={<div className="loading">Loading content...</div>}>
          <HomeScreen />
        </Suspense>
      )}
    </div>
  );
};

export default App;
