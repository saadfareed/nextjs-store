// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "instant-goodss-bbeef.firebaseapp.com",
  databaseURL: "https://instant-goodss-bbeef-default-rtdb.firebaseio.com",
  projectId: "instant-goodss-bbeef",
  storageBucket: "instant-goodss-bbeef.appspot.com",
  messagingSenderId: "427164328534",
  appId: "1:427164328534:web:fd7cf4933f63146e99d1f7",
  measurementId: "G-0ENLDTZGV5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);