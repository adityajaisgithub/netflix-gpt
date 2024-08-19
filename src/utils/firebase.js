// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUbQItzfnllmk611CxftK6yDT5MKIgoR4",
  authDomain: "netflixgpt-60c22.firebaseapp.com",
  projectId: "netflixgpt-60c22",
  storageBucket: "netflixgpt-60c22.appspot.com",
  messagingSenderId: "148078179126",
  appId: "1:148078179126:web:0751eb0d94d8dedbed7997",
  measurementId: "G-YXBJZ7KYCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();