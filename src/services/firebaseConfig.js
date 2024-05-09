// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfFn42kOk4BsPW1oMcIB7wQtqMFGxnTcE",
  authDomain: "appbar-85669.firebaseapp.com",
  projectId: "appbar-85669",
  storageBucket: "appbar-85669.appspot.com",
  messagingSenderId: "1091026423219",
  appId: "1:1091026423219:web:c5e9877cebefe899728fc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default db;