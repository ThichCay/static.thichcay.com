// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKGFGKKZ1L1f0uu5MMmHbbqHrUTgPZMc",
  authDomain: "thichcay-com.firebaseapp.com",
  databaseURL: "https://thichcay-com-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thichcay-com",
  storageBucket: "thichcay-com.appspot.com",
  messagingSenderId: "652863268253",
  appId: "1:652863268253:web:4e31f96175d5bea7cafb74",
  measurementId: "G-QRG7VTE7PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
