import React from "react";
import Competition from "./Competition";
import fiascode_logo from "./fiascode_logo.png";
import random_logo from "./randomlogo.jpg";
import { color } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function CompetitionGuideLines() {
  const FIAS_CODE = [
    {
      TITLE: " Programming languages",
      INFORMATION:
        "Python and Java.",
    },
    {
      TITLE: "Disclaimer ",
      INFORMATION:
        "Questions will be language specific. All teams are recommended to have programming knowledge in both Python and Java to maximize your winning possibility.",
    },
    {
      TITLE: "Objective",
      INFORMATION:
        "Participants are required to modify the given working code to intentionally introduce the specified error that prevents successful compilation.",
    },
    {
      TITLE: "Modification Limit",
      INFORMATION:
        "Alterations to the code must not exceed X% of the total codebase(X will vary for each question).",
    },
    {
      TITLE: "Code Comments",
      INFORMATION:
        "No comments are permitted within the code to comment on any part of the code.",
    },
    {
      TITLE: "Restrictions on Keywords",
      INFORMATION:
        "The use of raise (in Python) and throw (in Java) to introduce errors is strictly prohibited.",
    },
    {
      TITLE: "Prohibition of MalPractice",
      INFORMATION:
        "Any form of malpractice, including the use of external resources such as the Internet during the round, will result in immediate disqualification.",
    },
    {
      TITLE: "Judging System",
      INFORMATION: 
        "Judging is completely automated, we will follow DOMjudge's ranking for final decisions."
    }
  ];

  const RANDOM = [
    {
      TITLE: "Feasibile Programming Language",
      INFORMATION:
        "Python, C, C++, Java.",
    },
    {
      TITLE: "Time Limit",
      INFORMATION:
        "Each round will have a strict time limit (1hr:30min), and submissions after the timer will not be accepted.",
    },
    {
      TITLE: "Communication",
      INFORMATION:
        "Participants can only discuss within their teams. Any interaction with others during the event will result in disqualification.",
    },
    {
      TITLE: "Technical Issues",
      INFORMATION:
        " If technical issues arise, participants must inform the organizers immediately. Time adjustments will be at the discretion of the event coordinators.",
    },
    {
      TITLE: "Prohobition of Malpractice",
      INFORMATION:
        "       Any form of malpractice, including the use of external resources such as the Internet during the round, will result in immediate disqualification. Manipulation of compiler will not be entertained.",
    },
    {
      TITLE: "Tie-Breakers",
      INFORMATION:
        "the time taken to submit the solution will be considered as the judging factor.",
    },
    {
      TITLE: "Note",
      INFORMATION:
        "Prelims will happen on unstop, selected candidates will reach our campus for offline coding challenge. From that finalist will be shortlisted and compete for the Price pool."
    }
  ];

  return (
    <div>
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
      display: "flex",
      justifyContent: "center",
    }}>
      COMPETITION GUIDELINES
    </h1>
          
      <Competition logo={fiascode_logo} title={"FIAS CODE"} information={FIAS_CODE} />
      <br />
      <Competition logo={random_logo} title={"RaNDoM COmPilE"} information={RANDOM}/>
    </div>
  );
}
