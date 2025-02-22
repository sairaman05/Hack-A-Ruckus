import React from "react";
import Competition from "./Competition";
import fiascode_logo from "./fiascodelogo.jpg";
import random_logo from "./randomlogo.jpg";
import { color } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function CompetitionGuideLines() {
  const FIAS_CODE = [
    {
      TITLE: "Objective : ",
      INFORMATION:
        "Participants are required to modify the given working code to intentionally introduce the specified error that prevents successful compilation.",
    },
    {
      TITLE: "Modification Limit : ",
      INFORMATION:
        "Alterations to the code must not exceed 10% of the total codebase.",
    },
    {
      TITLE: "Code Comments : ",
      INFORMATION:
        "No comments are permitted within the code to comment any part of the code.",
    },
    {
      TITLE: "Restrictions on Keywords : ",
      INFORMATION:
        "The use of raise (in Python) and throw (in Java) to introduce errors is strictly prohibited.",
    },
    {
      TITLE: "Prohobition of Malpractice : ",
      INFORMATION:
        "Any form of malpractice, including the use of external resources such as the internet during the round, will result in immediate disqualification.",
    },
    {
      TITLE: "Tie-Breakers : ",
      INFORMATION:
        "In the event of a tie, the time taken to submit the solution will be considered as the deciding factor.",
    },
  ];

  return (
    <div>
      <h1 className="Header"> COMPETITION  GUIDELINES </h1>
      <Competition logo={fiascode_logo} title={"FIAS CODE"} information={FIAS_CODE} />
      <br />
      <Competition logo={random_logo} title={"RaNDoM COmPilE"} information={FIAS_CODE} />
    </div>
  );
}
