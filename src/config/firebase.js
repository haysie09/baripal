// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPA-DeScJkq_261CO7GbBU5LZxVFG8_iU",
  authDomain: "baripal-app.firebaseapp.com",
  projectId: "baripal-app",
  storageBucket: "baripal-app.firebasestorage.app",
  messagingSenderId: "921283686541",
  appId: "1:921283686541:web:2a0b0b80721c60a67a32c4",
  measurementId: "G-RGNF4Y41WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);