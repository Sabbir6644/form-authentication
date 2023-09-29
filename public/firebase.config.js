// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1RigOLV33sZCcp8OvcTa-H4awduEZ-kw",
  authDomain: "form-authentication-851e4.firebaseapp.com",
  projectId: "form-authentication-851e4",
  storageBucket: "form-authentication-851e4.appspot.com",
  messagingSenderId: "11795530083",
  appId: "1:11795530083:web:7cfc83365aa3f7e0779356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;