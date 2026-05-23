// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz8i2uabTupYrtdepO68j7w72fzIXphNI",
  authDomain: "improper-prototype.firebaseapp.com",
  projectId: "improper-prototype",
  storageBucket: "improper-prototype.firebasestorage.app",
  messagingSenderId: "94761416130",
  appId: "1:94761416130:web:f61a22004ee846d521525b",
  measurementId: "G-MHC70N22X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
