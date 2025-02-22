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

import HomeStack from "./HomeStack";


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
      <Routes>
        <Route
          path="/"
          element={
              <HomeStack onLogin={setUser} />
          }
        />
      
      </Routes>
    </Router>
  );
};

export default App;