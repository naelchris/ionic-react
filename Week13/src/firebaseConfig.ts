// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ONpZWq9L9di2HdUs5Ql14EwMIXTSVV4",
  authDomain: "ionic-firebase-706ce.firebaseapp.com",
  projectId: "ionic-firebase-706ce",
  storageBucket: "ionic-firebase-706ce.appspot.com",
  messagingSenderId: "147834712362",
  appId: "1:147834712362:web:32232d46f9864aabf66e53",
  measurementId: "G-VDJ585RDRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);