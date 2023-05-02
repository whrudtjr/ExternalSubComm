// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa2Hm-DFl9KdzeMjqRTgNIaNgWrkrnbm0",
  authDomain: "externalsubcomm.firebaseapp.com",
  projectId: "externalsubcomm",
  storageBucket: "externalsubcomm.appspot.com",
  messagingSenderId: "2223048479",
  appId: "1:2223048479:web:938b4c5eac72b69788522a",
  measurementId: "G-SQ169S0TF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


export { app, analytics, db, auth }