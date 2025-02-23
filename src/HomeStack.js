import React, { useState, useEffect, Suspense, lazy } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import "./App.css";
import CustomCursor from "./CustomCursor";

const HomeScreen = lazy(() => import("./HomeScreen"));

const HomeStack = ({ onLogin }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (engine) => {
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  // Updated particles configuration
  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="app-container">
      <CustomCursor />
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
          <HomeScreen onLogin={onLogin} />
        </Suspense>
      )}
    </div>
  );
};

export default HomeStack;