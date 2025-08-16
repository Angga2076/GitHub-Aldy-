// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnGBCVMpa0e3Spvznij2DasQ0jWtTWnwY",
  authDomain: "web-bang-aldy21.firebaseapp.com",
  projectId: "web-bang-aldy21",
  storageBucket: "web-bang-aldy21.firebasestorage.app",
  messagingSenderId: "550629073899",
  appId: "1:550629073899:web:461734d71f7e237921afae",
  measurementId: "G-XGM3G40NJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
