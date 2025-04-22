// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTgrpZzek7bwQWzv-wG4HtxDIczJzegHs",
  authDomain: "portfolio-haylee.firebaseapp.com",
  databaseURL: "https://portfolio-haylee-default-rtdb.firebaseio.com",
  projectId: "portfolio-haylee",
  storageBucket: "portfolio-haylee.firebasestorage.app",
  messagingSenderId: "209678872133",
  appId: "1:209678872133:web:1c15b938ab945ef527bd2c",
  measurementId: "G-H2H02J793N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);
export {database}