// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf6mxGiOtTqsRgsM1tAo06UjmHllEBk7o",
  authDomain: "netflixgpt-5b73b.firebaseapp.com",
  projectId: "netflixgpt-5b73b",
  storageBucket: "netflixgpt-5b73b.firebasestorage.app",
  messagingSenderId: "630026569820",
  appId: "1:630026569820:web:402d3e7c4bc83391ebbe99",
  measurementId: "G-709HSPJ8VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//call once and use it everwhere for authentication
 export const auth = getAuth();