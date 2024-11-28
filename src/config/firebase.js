// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNGIU9xzeWpALnuogRlsAD9MkJGORW_bQ",
  authDomain: "word-herald-assembly.firebaseapp.com",
  projectId: "word-herald-assembly",
  storageBucket: "word-herald-assembly.firebasestorage.app",
  messagingSenderId: "617387817221",
  appId: "1:617387817221:web:6625042a65ea1d30485f6c",
  measurementId: "G-ZBKT0PTGYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);