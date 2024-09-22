// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "techsphere-f8567.firebaseapp.com",
  projectId: "techsphere-f8567",
  storageBucket: "techsphere-f8567.appspot.com",
  messagingSenderId: "429306355748",
  appId: "1:429306355748:web:e781d5c2dfd008f2ab38b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
