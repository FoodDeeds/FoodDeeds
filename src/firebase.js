import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADVV5vbUIJc24-SDyCyVNYn-fZhh6mzJM",
    authDomain: "capstone-fooddeeds.firebaseapp.com",
    projectId: "capstone-fooddeeds",
    storageBucket: "capstone-fooddeeds.appspot.com",
    messagingSenderId: "957867003659",
    appId: "1:957867003659:web:787c26b278c426279c9c0e",
    measurementId: "G-Q4DXN1JJE6"
});

const db = firebaseApp.firestore();

export default db;
