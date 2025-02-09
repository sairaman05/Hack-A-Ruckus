import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

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
          src="data:image/jpeg;base64,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"
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
