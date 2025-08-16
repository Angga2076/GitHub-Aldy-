// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase project kamu
const firebaseConfig = {
  apiKey: "AIzaSyBnGBCVMpa0e3Spvznij2DasQ0jWtTWnwY",
  authDomain: "web-bang-aldy21.firebaseapp.com",
  projectId: "web-bang-aldy21",
  storageBucket: "web-bang-aldy21.firebasestorage.app",
  messagingSenderId: "550629073899",
  appId: "1:550629073899:web:461734d71f7e237921afae",
  measurementId: "G-XGM3G40NJ5"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Login & Logout
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
