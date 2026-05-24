// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhfToUUvgdrSab9G7suPxg8_jTvmyx9G8",
  authDomain: "improperfinal.firebaseapp.com",
  projectId: "improperfinal",
  storageBucket: "improperfinal.firebasestorage.app",
  messagingSenderId: "286890572428",
  appId: "1:286890572428:web:268fed76da1aca79ee59a9",
  measurementId: "G-78NB7GX58N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Services
export const db = getFirestore(app);
export const auth = getAuth(app);
