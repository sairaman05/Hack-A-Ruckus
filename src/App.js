import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { signInWithGooglePopup, auth } from "./utils/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import TeamForm from "./TeamForm";
import HomeStack from "./HomeStack";
import { Analytics } from "@vercel/analytics/react";


const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });
    return () => unsubscribe();
  }, []);


  if (loading) return <div>Loading...</div>; 

  return (
    <Router>
      <Analytics />
      <Routes>
        <Route
          path="/"
          element={
              <HomeStack onLogin={setUser} />
          }
        />
        <Route path="/teamform" element={<TeamForm />} />
      </Routes>
    </Router>
  );
};

export default App;