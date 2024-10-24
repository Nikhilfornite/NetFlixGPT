// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-kwfOlhWzHqL-VyUv-86R-vZsm-sEY0",
  authDomain: "netflixgpt-1853f.firebaseapp.com",
  projectId: "netflixgpt-1853f",
  storageBucket: "netflixgpt-1853f.appspot.com",
  messagingSenderId: "225989800407",
  appId: "1:225989800407:web:572fb560461f42b40b5b92",
  measurementId: "G-X6Z632CL80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);