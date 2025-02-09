import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Competition({ logo, title, information }) {
  const [expand, setExpand] = useState(false);

  return (
    <motion.div
      layout="position"
      transition={{layout: {duration: 1, type:"spring"}, damping: 100}}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 20,
        padding: 20,
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
      }}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
    >
      <motion.div
        layout="position"
        style={{ alignItems: "center", justifyContent: "center", flexDirection: expand ? "column" : "row", display: 'flex' }}
      >
        <img
          src={logo}
          style={{ height: 200, width: 200, borderRadius: "50%" }}
        />
        <motion.h1 layout="position" style={{ color: "white", textAlign: "center", marginLeft: expand ? 0 : 10 }}>{title}</motion.h1>
      </motion.div>
      {expand && (
        <motion.div layout>
          {information.map((item, index) => (
            <motion.div layout key={index}>
              <motion.p
                layout="position"
                style={{ opacity: expand ? 1 : 0, transition: "opacity 1s ease-in-out" }}
                initial
              >
                <p style={{ color: 'white' }}><strong>{item.TITLE}: </strong>{item.INFORMATION}</p>
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
