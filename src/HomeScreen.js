import React, { useRef, lazy, Suspense, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./NavExpandStyles.css";
import CustomCursor from "./CustomCursor";
import { auth } from './utils/firebase.utils';
import { signInWithGooglePopup } from "./utils/firebase.utils";
import { useNavigate } from "react-router-dom";

// Lazy load components
const Welcome = lazy(() => import("./Welcome"));
const CompetitionGuidelines = lazy(() => import("./CompetitionGuideLines"));
const EventDetails = lazy(() => import("./EventDetails"));
const CardsCarousel = lazy(() => import("./CardsCarousel"));
const LinkScreen = lazy(() => import("./LinkScreen"));


const HomeScreen = ({onLogin}) => {
  const parallaxRef = useRef(null);
  const [scrolling, setScrolling] = useState(false); // Track scroll state
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const navigate = useNavigate()
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

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGooglePopup();
      onLogin(result.user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <CustomCursor />

      {/* Top Navigation Bar */}
      <div
        style={{
          position: "absolute",
          top: scrolling ? "-60px" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: "12px",
          padding: "10px 20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          animation: "glow-border 5s infinite linear",
          transition: "top 0.3s ease",
        }}
      >
        {/* Navigation Links */}
        {navOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item.page)}
            style={{
              padding: "12px 24px",
              cursor: "pointer",
              fontSize: "16px",
              color: "#FFFFFF",
              margin: "0 10px",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.color = "#FFD700";
              e.currentTarget.style.boxShadow = "0px 0px 20px 5px rgba(255, 215, 0, 0.6)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.label}
          </div>
        ))}

        {/* Login/Signup Button */}
        <div
          onClick={auth?.currentUser ? () => auth.signOut() : handleGoogleLogin}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#FFFFFF",
            marginLeft: "20px",
            borderRadius: "8px",
            backgroundColor: "#FF4500",
            border: "2px solid transparent",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FFD700";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF4500";
            e.currentTarget.style.color = "#FFFFFF";
          }}
        >
           {auth?.currentUser ? "Sign Out" : "Login"}
        </div>
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
          <ParallaxLayer offset={0} speed={1} style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Welcome />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1} style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Suspense fallback={<div>Loading...</div>}>
              <CompetitionGuidelines />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1} style={{ zIndex: 40 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <EventDetails />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Suspense fallback={<div>Loading...</div>}>
              <CardsCarousel />
            </Suspense>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={1} style={{ position: "absolute", bottom: 0 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <LinkScreen />
            </Suspense>
          </ParallaxLayer>
        </Parallax>
      </div>

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
