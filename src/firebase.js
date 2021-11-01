import firebase,  { initializeApp } from 'firebase/app';
import { getFirestore, getDocs } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Import the functions you need from the SDKs you need
// import from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_-JBXJWhDz79W71xkXGcUFW2tkJDiwE",
  authDomain: "test1-e9f6f.firebaseapp.com",
  projectId: "test1-e9f6f",
  storageBucket: "test1-e9f6f.appspot.com",
  messagingSenderId: "737590301664",
  appId: "1:737590301664:web:f4a648496e8aff45aad185",
  measurementId: "G-BSTWHR3FH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
export {getDocs} ;