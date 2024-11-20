// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwq5P45b_b5l0obhQ2NZOVTxPm27y6g_I",
  authDomain: "crud-d7383.firebaseapp.com",
  projectId: "crud-d7383",
  storageBucket: "crud-d7383.firebasestorage.app",
  messagingSenderId: "454231471515",
  appId: "1:454231471515:web:5b574321df2168738f1d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
