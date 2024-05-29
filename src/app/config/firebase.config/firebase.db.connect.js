import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  off,
  get,
  child,
  push,
  set,
  update,
  remove,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithCredential,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const connect = {};

const firebaseConfig = {
  apiKey: "AIzaSyB5dE90o5wrWbOOgvJrLrBW9K_8Vf9K3w0",
  authDomain: "test-kadiwa-rider.firebaseapp.com",
  projectId: "test-kadiwa-rider",
  storageBucket: "test-kadiwa-rider.appspot.com",
  messagingSenderId: "587621642955",
  appId: "1:587621642955:web:cab598aa5ca9fd522aa14e",
  measurementId: "G-Y66MVT8C9X",
};

const app = initializeApp(firebaseConfig);

connect.firebase = {
  database: getDatabase(app),
  auth: getAuth(app),
  getDatabase: getDatabase,
  ref,
  onValue,
  off,
  get,
  child,
  push,
  set,
  update,
  remove,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithCredential,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
};

export default connect;
