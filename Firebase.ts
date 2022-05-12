// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt678P3cjk59ssOt45HwAlxTVE7vyk6kw",
  authDomain: "linkedin-clone-by-ashok.firebaseapp.com",
  projectId: "linkedin-clone-by-ashok",
  storageBucket: "linkedin-clone-by-ashok.appspot.com",
  messagingSenderId: "566473953086",
  appId: "1:566473953086:web:a71654ed9026d10849e66f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage=getStorage()

export {app,db}