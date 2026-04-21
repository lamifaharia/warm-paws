// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsP3cnHzeIhsaBDl8DE95BGBG8AEypgks",
//   authDomain: "warm-paws-f6c0f.firebaseapp.com",
//   projectId: "warm-paws-f6c0f",
// };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsP3cnHzeIhsaBDl8DE95BGBG8AEypgks",
  authDomain: "warm-paws-f6c0f.firebaseapp.com",
  projectId: "warm-paws-f6c0f",
  storageBucket: "warm-paws-f6c0f.firebasestorage.app",
  messagingSenderId: "541690389206",
  appId: "1:541690389206:web:928f9d5f88288350205f77",
  measurementId: "G-03VFYPEE1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig);