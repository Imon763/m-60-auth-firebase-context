// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMk1ViVEXjCxFkLuq9XifBCl5OerKinU",
  authDomain: "module-60-auth-firebase-contxt.firebaseapp.com",
  projectId: "module-60-auth-firebase-contxt",
  storageBucket: "module-60-auth-firebase-contxt.appspot.com",
  messagingSenderId: "626167797768",
  appId: "1:626167797768:web:c7a778a5e98b6bdd2fd9bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;