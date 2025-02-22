import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "./Profile";
import sangi from './sangi.jpg';
import CustomCursor from "./CustomCursor";

export default function EventDetails() {
  
  const [expandOne, setExpandOne] = useState(false);
  const [expandTwo, setExpandTwo] = useState(false);

  return (
    
    <div>
    <h1 className="Head" style={{
      textAlign: 'center',
      fontSize: '4rem',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '6px',
      textShadow: '2px 4px 6px rgba(0,0,0,0.15)',
      margin: '2rem 0',
      position: 'relative',
      display: 'inline-block',
      transform: 'rotate(-2deg)',
      padding: '0 2rem'
    }}>
      EVENT ORGANIZERS
    </h1>
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
            <motion.h1 layout="position" style={{ color: "white", margin: 0 }}>
              FIAS CODE
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                blanditiis labore esse aspernatur veritatis. At magni
                reprehenderit repudiandae beatae iure!
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
              email="sample@mail.com"
              profile_pic={"sangi"}
              phone="+91 15678"
            />
            <Profile
              name="Vignesh"
              email="smaple@gmail.com"
              profile_pic={"null"}
              phone="+91 15678"
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
            <motion.h1 layout="position" style={{ color: "white", margin: 0 }}>
              RANDOM COMPILE
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                blanditiis labore esse aspernatur veritatis. At magni
                reprehenderit repudiandae beatae iure!
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
              name="Sanjjey"
              email="sample@mail.com"
              profile_pic={"null"}
              phone="+91 15678"
            />
            <Profile
              name="Mukesh Charan"
              email="smaple@gmail.com"
              profile_pic={"null"}
              phone="+91 15678"
            />
          </motion.div>
        )}
      </div>
    </div>
  </div>
 );
}
