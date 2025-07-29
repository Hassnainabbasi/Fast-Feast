// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage,connectStorageEmulator } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4qpRag2pNrekyu6GJh8h_c4pJ5Svib-0",
  authDomain: "food-project-8f597.firebaseapp.com",
  projectId: "food-project-8f597",
  storageBucket: "food-project-8f597.appspot.com",
  messagingSenderId: "1052577103295",
  appId: "1:1052577103295:web:28201630f941d0bee2b50a",
  measurementId: "G-2DEBXE0DY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const storage = getStorage(app)
const db = getFirestore(app);
connectStorageEmulator(storage, 'localhost', 9199);


export {auth,db} ;