import React, { useRef, lazy, Suspense, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./NavExpandStyles.css";
import CustomCursor from "./CustomCursor";
import { auth } from './utils/firebase.utils';
import { signInWithGooglePopup } from "./utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import "./RegisterScreen.css";

// Lazy load components
const Welcome = lazy(() => import("./Welcome"));
const CompetitionGuidelines = lazy(() => import("./CompetitionGuideLines"));
const EventDetails = lazy(() => import("./EventDetails"));
const CardsCarousel = lazy(() => import("./CardsCarousel"));
const LinkScreen = lazy(() => import("./LinkScreen"));

const HomeScreen = ({onLogin}) => {
  const parallaxRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate()
  const navOptions = [
    { label: "Home", page: 0 },
    { label: "Guidelines", page: 1 }, 
    { label: "Organizers", page: 1.9 },
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
      {!isMobile && <CustomCursor />}

      <div
        className="nav-container"
        style={{
          top: scrolling ? "-60px" : "20px",
        }}
      >
        {navOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item.page)}
            className="nav-item"
          >
            {item.label}
          </div>
        ))}

        
        <div
          onClick={() => navigate("/teamform")} 
          className="accomodationbutton"
        >
          Accomodation
        </div>


        {/* Login/Signup Button */}
        <div
          onClick={auth?.currentUser ? () => auth.signOut() : handleGoogleLogin}
          className="login-button"
        >
          {auth?.currentUser ? "Sign Out" : "Login"}
        </div>

      </div>

      {/* Main Content */}
      <div style={{ height: "100%" }}>
        <Parallax pages={5} ref={parallaxRef} style={{ top: "0", left: "0" }}>
          {/* Keep existing parallax layers, they will scale automatically */}
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
          .nav-container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 12px;
            padding: 10px 15px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid transparent;
            background-clip: padding-box;
            animation: glow-border 5s infinite linear;
            transition: top 0.3s ease;
            max-width: 95%;
            overflow-x: auto;
          }

          .nav-item {
            padding: 8px 16px;
            cursor: pointer;
            font-size: 14px;
            color: #FFFFFF;
            margin: 0 5px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .login-button {
            padding: 8px 16px;
            cursor: pointer;
            font-size: 14px;
            color: #FFFFFF;
            margin-left: 10px;
            border-radius: 8px;
            background-color: #FF4500;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .accomodationbutton {
            padding: 8px 16px;
            cursor: pointer;
            font-size: 14px;
            color: #FFFFFF;
            margin-left: 10px;
            border-radius: 8px;
            background-color: #FF4500;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          @media (min-width: 768px) {
            .nav-container {
              padding: 10px 20px;
            }
            .nav-item {
              padding: 12px 24px;
              font-size: 16px;
              margin: 0 10px;
            }
            .login-button {
              padding: 10px 20px;
              font-size: 16px;
              margin-left: 20px;
            }
          }

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