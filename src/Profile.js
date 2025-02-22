import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import profile_pic from "./profile_pic.jpg";

export default function Profile({ name, email, profile_pic, phone }) {
  const [expand, setExpand] = useState(false);

  const profileDetails = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
    >
      <motion.div
        layout="size"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#1a1a1a",
          padding: "20px",
          borderRadius: "15px",
          gap: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <motion.img
          src={profile_pic}
          alt="Neuronix Logo"
          width="150"
          height="150"
          style={{
            borderRadius: "50%",
            border: "5px solid #fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
          layout="position"
        />
      </motion.div>
      {expand && (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            backgroundColor: "#1a1a1a",
            borderRadius: 10,
            marginLeft: 10,
            padding: 10,
          }}
          transition={{ duration: 0.3 }}
        >
          {profileDetails.map((detail) => (
            <motion.div
              key={detail.label}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <p style={{ color: "white" }}>
                <strong>{detail.label}: </strong>
                {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
 );
}
