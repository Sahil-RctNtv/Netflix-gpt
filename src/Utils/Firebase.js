import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKBYWpu6qyzGfj-ArLfjox1xH8PfeSgw",
  authDomain: "netflixgpt-a7f5d.firebaseapp.com",
  projectId: "netflixgpt-a7f5d",
  storageBucket: "netflixgpt-a7f5d.firebasestorage.app",
  messagingSenderId: "867877635105",
  appId: "1:867877635105:web:779540455226de0b788f60",
  measurementId: "G-RP0L8FJ32W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
