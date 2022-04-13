import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLnYkTrgxfAYnu6-46oyS25wKIJ7SSXK4",
  authDomain: "mood-tracker-3b465.firebaseapp.com",
  projectId: "mood-tracker-3b465",
  storageBucket: "mood-tracker-3b465.appspot.com",
  messagingSenderId: "56576578058",
  appId: "1:56576578058:web:1198acdb776ca4a01fc5f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)