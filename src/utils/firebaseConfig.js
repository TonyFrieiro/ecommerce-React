// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwX5yJdb1BYwt_s91v20C2B19pGv-s_FA",
  authDomain: "euporie-7f10e.firebaseapp.com",
  projectId: "euporie-7f10e",
  storageBucket: "euporie-7f10e.appspot.com",
  messagingSenderId: "26857929575",
  appId: "1:26857929575:web:2054ddecf7fc43efcd8dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);