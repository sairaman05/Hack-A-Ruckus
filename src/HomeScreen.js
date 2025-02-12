import React, { useRef, lazy, Suspense, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./NavExpandStyles.css";
import Box from "@mui/material/Box";
import CustomCursor from "./CustomCursor";

// Lazy load components
const Welcome = lazy(() => import("./Welcome"));
const CompetitionGuidelines = lazy(() => import("./CompetitionGuideLines"));
const EventDetails = lazy(() => import("./EventDetails"));
const CardsCarousel = lazy(() => import("./CardsCarousel"));
const LinkScreen = lazy(() => import("./LinkScreen"))

const HomeScreen = () => {
  const parallaxRef = useRef(null);
  const [scrolling, setScrolling] = useState(false); // Track scroll state
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const navOptions = [
    { label: "Home", page: 0 },
    { label: "Competition Guidelines", page: 1 },
    { label: "Event Organizers", page: 1.9 },
    { label: "Sponsors", page: 3 },
  ];

  const scrollToSection = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  useEffect(() => {
    // Function to track scroll direction
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setScrolling(true);
      } else {
        // Scrolling up
        setScrolling(false);
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <CustomCursor />
      {/* Top Navigation Bar */}
      <div
        style={{
          position: "absolute",
          top: scrolling ? "-60px" : "20px", // Hide on scroll down, show on scroll up
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Black background with reduced opacity
          borderRadius: "12px",
          padding: "10px 20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)", // Glassy feel
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          animation: "glow-border 5s infinite linear", // Smooth moving color border
          transition: "top 0.3s ease", // Smooth transition when hiding/showing
        }}
      >
        {navOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item.page)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              position: "relative",
              fontSize: "16px",
              color: "#FFFFFF",
              textAlign: "center",
              margin: "0 10px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)", // Adding a subtle blur to buttons
              transition: "all 0.3s ease", // Smooth transition on hover
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // Transparent white on hover
              target.style.color = "#FFD700";
              target.style.boxShadow = "0px 0px 20px 5px rgba(255, 215, 0, 0.6)";
              target.style.transform = "scale(1.05)"; // Slight scale up
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // Original dark state
              target.style.color = "#FFFFFF";
              target.style.boxShadow = "none";
              target.style.transform = "scale(1)"; // Reset scale
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "linear-gradient(90deg, #FFB6C1, #FF6347)", // Brighter gradient
                transform: "translateX(-100%)",
                zIndex: -1,
                transition: "transform 0.3s ease",
              }}
              className="hover-bg"
            ></span>
            {item.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ height: "100%" }}>
        <Parallax pages={5} ref={parallaxRef} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={4}
            style={{
              backgroundImage: "url('https://awv3node-homepage.surge.sh/build/assets/stars.svg')",
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Welcome />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <CompetitionGuidelines />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1} style={{ zIndex: 40 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <EventDetails />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <CardsCarousel />
            </Suspense>
          </ParallaxLayer>
        

        <ParallaxLayer
            offset={4}
            speed={1}
            style={{
              position: "absolute",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <LinkScreen />
            </Suspense>
          </ParallaxLayer>
      </Parallax>
      </div>

      {/* Animation for dynamic border */}
      <style>
        {`
          @keyframes glow-border {
            0% {
              border-color: rgba(255, 105, 180, 0.8); 
              box-shadow: 0 0 12px rgba(255, 105, 180, 0.8);
            }
            25% {
              border-color: rgba(255, 165, 0, 0.8);
              box-shadow: 0 0 12px rgba(255, 165, 0, 0.8);
            }
            50% {
              border-color: rgba(34, 193, 195, 0.8);
              box-shadow: 0 0 12px rgba(34, 193, 195, 0.8);
            }
            75% {
              border-color: rgba(253, 187, 45, 0.8);
              box-shadow: 0 0 12px rgba(253, 187, 45, 0.8);
            }
            100% {
              border-color: rgba(255, 105, 180, 0.8);
              box-shadow: 0 0 12px rgba(255, 105, 180, 0.8);
            }
          }
        `}
      </style>

    </div>
  );
};

export default HomeScreen;
