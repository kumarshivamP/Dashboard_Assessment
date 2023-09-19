// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB77LN1O797nit8U3qibcUJZmU6q5FifhY",
  authDomain: "test-9e9f5.firebaseapp.com",
  projectId: "test-9e9f5",
  storageBucket: "test-9e9f5.appspot.com",
  messagingSenderId: "116188568345",
  appId: "1:116188568345:web:f639facbf2e002eac3c388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
