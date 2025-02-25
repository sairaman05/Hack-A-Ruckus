import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RegisterScreen.css";
import CustomCursor from "./CustomCursor";

const TeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [boys, setBoys] = useState(0);
  const [girls, setGirls] = useState(0);
  const [leader, setLeader] = useState("");
  const FEE_PER_PERSON = 500;
  
  const totalFee = (boys + girls) * FEE_PER_PERSON;

  const handlePayment = async () => {
    alert("Payment Successful!");
  };

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <CustomCursor />
      <div className="content">
        <motion.div className="instructions" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <h2>Instructions</h2>
          <p>1. Enter your team details carefully.</p>
          <p>2. Specify the number of boys and girls.</p>
          <p>3. Review the total accommodation fee.</p>
          <p>4. Proceed with the payment.</p>
        </motion.div>
        
        <motion.div className="form-inner" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          <h2 className="heading">Team Registration</h2>

          <div className="input-container">
            <label>Team Name:</label>
            <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Enter team name" />
          </div>

          <div className="input-container">
            <label>Team Leader:</label>
            <input type="text" value={leader} onChange={(e) => setLeader(e.target.value)} placeholder="Enter leader name" />
          </div>

          <div className="input-container">
            <label>Number of Boys:</label>
            <input type="number" value={boys} onChange={(e) => setBoys(Number(e.target.value))} min="0" />
          </div>

          <div className="input-container">
            <label>Number of Girls:</label>
            <input type="number" value={girls} onChange={(e) => setGirls(Number(e.target.value))} min="0" />
          </div>

          <h3 className="total-fee">Total Accommodation Fee: ₹{totalFee}</h3>
          <motion.button 
            type="button" 
            className="razorpay-button" 
            onClick={handlePayment} 
            whileHover={{ scale: 1.00 }} 
            whileTap={{ scale: 0.95 }}>
            Confirm & Pay for Accommodation
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamForm;
