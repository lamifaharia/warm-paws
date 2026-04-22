import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 1. Import getAuth
import { getAnalytics, isSupported } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyAWriD7M5uRxSz1cVncp9meLi9qni8isY8",
  authDomain: "warm-paws-f3715.firebaseapp.com",
  projectId: "warm-paws-f3715",
  storageBucket: "warm-paws-f3715.firebasestorage.app",
  messagingSenderId: "322403146788",
  appId: "1:322403146788:web:4a78674a497bd7de824cb1",
  measurementId: "G-S6G5448ZRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialize and Export Auth
export const auth = getAuth(app);

// 3. Safe Analytics initialization
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});