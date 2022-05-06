// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Z-0htLMWjxtFMhdg2FwaCKyOXP7a3t4",
  authDomain: "sports-gear-warehouse-5e15c.firebaseapp.com",
  projectId: "sports-gear-warehouse-5e15c",
  storageBucket: "sports-gear-warehouse-5e15c.appspot.com",
  messagingSenderId: "256352442334",
  appId: "1:256352442334:web:b6cb356768986f323cef4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;