// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBuMG1ZeO5WPfZ_AAtOk6iGE00ycLCnwA",
  authDomain: "netflix-clone-5b1cf.firebaseapp.com",
  projectId: "netflix-clone-5b1cf",
  storageBucket: "netflix-clone-5b1cf.appspot.com",
  messagingSenderId: "1033779598680",
  appId: "1:1033779598680:web:367395bdc4ddf5c636412d",
  measurementId: "G-S3FL4N4LW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
