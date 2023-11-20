// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD8t95BtAdNbZqSOZrpoli218UA4WoqoGY",
//   authDomain: "netflix-clone-817e1.firebaseapp.com",
//   projectId: "netflix-clone-817e1",
//   storageBucket: "netflix-clone-817e1.appspot.com",
//   messagingSenderId: "154719228304",
//   appId: "1:154719228304:web:e7c5815c08dadc73ee2315",
//   measurementId: "G-MX48ZBR4GK",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8t95BtAdNbZqSOZrpoli218UA4WoqoGY",
  authDomain: "netflix-clone-817e1.firebaseapp.com",
  projectId: "netflix-clone-817e1",
  storageBucket: "netflix-clone-817e1.appspot.com",
  messagingSenderId: "154719228304",
  appId: "1:154719228304:web:e7c5815c08dadc73ee2315",
  measurementId: "G-MX48ZBR4GK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
