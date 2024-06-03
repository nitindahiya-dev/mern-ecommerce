// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-ecom-33c43.firebaseapp.com",
  projectId: "mern-ecom-33c43",
  storageBucket: "mern-ecom-33c43.appspot.com",
  messagingSenderId: "170413209882",
  appId: "1:170413209882:web:024a52e95abb06cd8a54a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);