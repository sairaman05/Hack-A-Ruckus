import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";   

import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA8oNSGc6pnflF-pZhdGrAgXrCQzXK8jDU",
  authDomain: "neuronix-9bfdd.firebaseapp.com",
  projectId: "neuronix-9bfdd",
  storageBucket: "neuronix-9bfdd.firebasestorage.app",
  messagingSenderId: "669047409257",
  appId: "1:669047409257:web:ee31a57885f854b2e8b0f8",
  measurementId: "G-WV9ZCCYGEF"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
  
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);