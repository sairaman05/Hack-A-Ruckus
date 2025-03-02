import React, { useState } from "react";
import { motion, progress } from "framer-motion";
import Profile from "./Profile";
import profile_pic from "./profile_pic.jpg"
import shankar from "./shankar.jpg";
import wild from "./wild.jpg";
import vicky from "./vigneshwarran.jpg";
import CustomCursor from "./CustomCursor";
import mugi from "./mugi.jpg";

export default function EventDetails() {
  
  const [expandOne, setExpandOne] = useState(false);
  const [expandTwo, setExpandTwo] = useState(false);

  return (
    
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <h1 className="Head" style={{
      fontSize: '4rem',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: "'Bebas Neue', cursive",
      fontWeight: 400,
      letterSpacing: '6px',
      textShadow: '2px 3px 5px rgba(0,0,0,0.2)',
      padding: '0 2rem',
      borderBottom: '3px solid #4ecdc4',
      borderTop: '3px solid #ff6b6b',
      borderRadius: '8px',
      transition: 'all 0.4s ease-in-out',
      position: 'relative',
      margin: '2rem 0',
      textAlign: 'center',
      transform: 'rotate(-0.5deg)',
    }}>
      EVENT ORGANIZERS
    </h1>
</div>
    <br />
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          width: "45%",
          padding: "20px",
          position: "relative",
        }}
        onMouseEnter={() => setExpandOne(true)}
        onMouseLeave={() => setExpandOne(false)}
      >
        
        <motion.div
          layout="position"
          transition={{ layout: { duration: 1, type: "spring" } }}
          style={{
            cursor: "pointer",
            width: "100%",
            backgroundColor: "#1a1a1a",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <motion.img
            layout="position"
            className="logo_image"
            src="https://firebasestorage.googleapis.com/v0/b/redrat-910fc.appspot.com/o/299233591_140315688398063_6966127431664232928_n.jpg?alt=media&token=2b0aa366-24f0-4383-a247-5e66e8566152"
            alt="Neuronix Logo"
            width="150"
            height="150"
            style={{
              borderRadius: "50%",
              border: "5px solid #fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          />
          <div>
          <motion.h1 
            layout="position" 
            style={{ 
              color: "#fff",
              fontSize: "2.5rem",
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              "&:hover": {
                transform: "scale(1.05) rotate(-1deg)",
                boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)"
              }
            }}
          >
            FIASCOde
            <motion.span 
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, #4ecdc4, transparent)",
                    opacity: 0.7
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.h1>
            {expandOne && (
              <motion.p
                layout="position"
                style={{
                  color: "white",
                  marginTop: "10px",
                  fontSize: "14px",
                  fontStyle: "italic",
                  maxWidth: "300px",
                  lineHeight: "1.5",
                }}
              >
              </motion.p>
            )}
          </div>
        </motion.div>

        {expandOne && (
          <motion.div
            layout
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginTop: "20px",
              width: "100%",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <Profile
              name="Nithya Shankar"
              email="swayamlogin6283@gmail.com"
              profile_pic={shankar}
              phone="9956603536"
            />
            <Profile
              name="Vignesheshwarran S"
              email="vigneshwarran0@gmail.com"
              profile_pic={vicky}
              phone="8015918525"
            />
          </motion.div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          width: "45%",
          padding: "20px",
          position: "relative",
        }}
        onMouseEnter={() => setExpandTwo(true)}
        onMouseLeave={() => setExpandTwo(false)}
      >
        <motion.div
          layout="position"
          transition={{ layout: { duration: 1, type: "spring" } }}
          style={{
            cursor: "pointer",
            width: "100%",
            backgroundColor: "#1a1a1a",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
            zIndex: 20,
          }}
        >
          <motion.img
            layout="position"
            className="logo_image"
            src="https://firebasestorage.googleapis.com/v0/b/redrat-910fc.appspot.com/o/299233591_140315688398063_6966127431664232928_n.jpg?alt=media&token=2b0aa366-24f0-4383-a247-5e66e8566152"
            alt="Neuronix Logo"
            width="150"
            height="150"
            style={{
              borderRadius: "50%",
              border: "5px solid #fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          />
          <div>
          <motion.h1 
              layout="position" 
              style={{ 
                color: "#fff",
                fontSize: "2.5rem",
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                "&:hover": {
                  transform: "scale(1.05) rotate(-1deg)",
                  boxShadow: "0 4px 15px rgba(78, 205, 196, 0.3)"
                }
              }}
            >
              RANDOM(COMPILE) 
              <motion.span 
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "3px",
                  background: "linear-gradient(90deg, transparent, #4ecdc4, transparent)",
                  opacity: 0.7
                }}
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.h1>
            {expandTwo && (
              <motion.p
                layout="position"
                style={{
                  color: "white",
                  marginTop: "10px",
                  fontSize: "14px",
                  fontStyle: "italic",
                  maxWidth: "300px",
                  lineHeight: "1.5",
                }}
              >
              </motion.p>
            )}
          </div>
        </motion.div>

        {expandTwo && (
          <motion.div
            layout
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginTop: "20px",
              width: "100%",
              gap: "20px",
              marginBottom: "20px",
              zIndex: 10,
            }}
          >
            <Profile
              name="Sanjjey A"
              email="sanjjeyarumugam@gmail.com"
              profile_pic={wild}
              phone="9443582753"
            />
            <Profile
              name="Mukesh Charan M"
              email="mukeshcharanskillboost@gmail.com"
              profile_pic={mugi} 
              phone="6381764163"
            />
          </motion.div>
        )}
      </div>
    </div>
  </div>
 );
}
