import React, { Component } from "react";
import "./LinkScreenStyles.css";

export default function LinkScreen({ scrollToSection }) {
  
  return (
    
    <div
    style={{
      height: 250,
      backgroundColor: "#1a1a1a",
      marginTop: 5,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
     position: 'absolute',
     bottom: 0
    }}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/redrat-910fc.appspot.com/o/299233591_140315688398063_6966127431664232928_n.jpg?alt=media&token=2b0aa366-24f0-4383-a247-5e66e8566152"
        alt="Neuronix"
        style={{
          width: "140px",
          height: "140px",
          objectFit: "cover",
          borderRadius: 10,
        }}
        className="image_neuronix"
      />
      <div
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h4 style={{ color: "grey" }}>Social Media Links</h4>
        <a
          href="www.instagram.com"
          style={{
            textDecoration: "underline",
            color: "grey",
            letterSpacing: 0.4,
          }}
        >
          instagram
        </a>
        <br></br>
        <a
          href="www.instagram.com"
          style={{
            textDecoration: "underline",
            color: "grey",
            letterSpacing: 0.4,
          }}
        >
          instagram
        </a>
        <br></br>
        <a
          href="www.instagram.com"
          style={{
            textDecoration: "underline",
            color: "grey",
            letterSpacing: 0.4,
          }}
        >
          instagram
        </a>
        <br></br>
        <a
          href="www.instagram.com"
          style={{
            textDecoration: "underline",
            color: "grey",
            letterSpacing: 0.4,
          }}
        >
          instagram
        </a>
        <br></br>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h4 style={{ color: "grey", fontSize: "bold" }}>Address</h4>
        <p style={{ color: "grey" }}>
          337/1 A, Vallal RCK Nagar, SH 50A, Vengal, Tamil Nadu 601103
        </p>
        <a href="https://www.google.com/maps?sca_esv=9b6b31f5dcc1d617&rlz=1C1RXQR_enIN1071IN1071&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiImFtcml0YSB2aXNod2EgdmlkeWFwZWV0aGFtIGNoZW5uYWkyDhAuGIAEGMcBGI4FGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMh0QLhiABBjHARiOBRivARiXBRjcBBjeBBjgBNgBAUiNE1BEWKoIcAB4ApABAJgB5QKgAY4PqgEHMC4zLjIuM7gBA8gBAPgBAZgCCaACuA_CAgQQABhHwgITEC4YgAQYQxjHARiKBRiOBRivAcICEBAuGIAEGLEDGEMYgwEYigXCAgoQABiABBhDGIoFwgIQEC4YgAQYQxjHARiKBRivAcICIhAuGIAEGEMYxwEYigUYjgUYrwEYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBixAxiDAcICBRAuGIAEmAMAiAYBkAYIugYGCAEQARgUkgcHMS4zLjIuM6AHkl4&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KW8tEUZJgVI6MQybX_L2RKZX&daddr=337/1+A,+Vallal+RCK+Nagar,+SH+50A,+Vengal,+Tamil+Nadu+601103">
          Map to{" "}
        </a>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h4 style={{ color: "grey", fontSize: "bold" }}>Contact Details</h4>
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            gap: 10,
          }}
        >
          <p style={{ color: "grey", fontSize: "bold" }}>Phone: </p>
          <a href="tel:+919965503536">
            <p style={{ color: "grey" }}>+91 99655 03536</p>
          </a>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <button
          class="button-78"
          role="button"
          onClick={() => scrollToSection(0)}
        >
          Move to Top
        </button>
      </div>
    </div>
  );
}
