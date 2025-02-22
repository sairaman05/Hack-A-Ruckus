import React, { useState, useEffect } from "react";
import { db, auth } from "../utils/firebase.utils";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [teamName, setTeamName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [memberCount, setMemberCount] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false)
  const [registeredDate, setRegisteredDate] = useState(null);
  const [registrationDone, setRegistrationDone] = useState(false)
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const checkRegistration = async () => {
        const docRef = doc(db, "Registrations", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRegisteredDate(docSnap.data().registeredAt.toDate().toLocaleString());
        }
      };
      checkRegistration();
    }
  }, [user]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!user) {
      setMessage("You must be logged in to register.");
      return;
    }
    setLoading(true)
    const docRef = doc(db, "Registrations", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setMessage(You have already registered on ${docSnap.data().registeredAt.toDate().toLocaleString()});
      return;
    }
    await setDoc(docRef, {
      teamName,
      collegeName,
      phoneNumber,
      leaderName,
      memberCount,
      registeredAt: serverTimestamp(),
      email: auth?.currentUser?.email,
      registratorName: auth?.currentUser?.displayName
    });
    setMessage("Registration successful!");
    setLoading(false)
    setRegistrationDone(true)
  };

  return (
    <div className="register-page">
      <div className="event-info">
        <h2>Event Instructions</h2>
        <p>1. Each team must have a minimum of 3 members and a maximum of 5 members.</p>
        <p>2. The event will be conducted in three rounds: Preliminary, Semi-Final, and Final.</p>
        <p>3. Participants must carry their college ID cards.</p>
        <p>4. Registration fee: ₹500 per team.</p>
        <p>5. Payment must be made using Razorpay before registration.</p>

        <h3>How to Pay with Razorpay?</h3>
        <p>1. Click the "Pay Now" button below.</p>
        <p>2. Complete the payment process through Razorpay.</p>
        <p>3. After payment, note down the transaction ID.</p>
        <p>4. Enter the transaction ID in the registration form.</p>
      </div>

      <div className="register-container">
        <h2>Event Registration</h2>
        {registeredDate ? (
          <p className="register-message">You have already registered on {registeredDate}</p>
        ) : (
          <form onSubmit={loading && !registrationDone ? null : handleRegister} className="register-form">
            <input type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
            <input type="text" placeholder="College Name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} required />
            <input type="text" placeholder="Leader Name" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} required />
            <input type="number" placeholder="Number of Members" value={memberCount} onChange={(e) => setMemberCount(e.target.value)} required />
            <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <input type="text" placeholder="Transaction ID" required />
            {!registrationDone && (
                <button type="submit" className="register-button">{loading ? "Loading... " : "Pay & Register"}</button>
            )}
          </form>
        )}
        {message && <p className="register-message">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterScreen;
