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
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import firebase from "./db.configs";

const connect = {};

// const app = initializeApp(firebase.system, "app");
// const appdev = initializeApp(firebase.app.dev, "appdev");
// const apptest = initializeApp(firebase.app.test, "apptest");
// const posdev = initializeApp(firebase.pos.dev, "posdev");
// const postest = initializeApp(firebase.pos.test, "postest");
// const hubdev = initializeApp(firebase.hub.dev, "hubdev");
// const hubtest = initializeApp(firebase.hub.test, "hubtest");
const riderdev = initializeApp(firebase.rider.dev, "riderdev");
const ridertest = initializeApp(firebase.rider.test, "ridertest");

connect.firebase = {
  //   database: getDatabase(app),
  //   auth: getAuth(app),
  //   storage: getStorage(app),
  //   appdevdatabase: getDatabase(appdev),
  //   appdevauth: getAuth(appdev),
  //   appdevstorage: getStorage(appdev),
  //   apptestdatabase: getDatabase(apptest),
  //   apptestauth: getAuth(apptest),
  //   appteststorage: getStorage(apptest),
  //   posdevdatabase: getDatabase(posdev),
  //   posdevauth: getAuth(posdev),
  //   posdevstorage: getStorage(posdev),
  //   postestdatabase: getDatabase(postest),
  //   postestauth: getAuth(postest),
  //   posteststorage: getStorage(postest),
  //   hubdevdatabase: getDatabase(hubdev),
  //   hubdevauth: getAuth(hubdev),
  //   hubdevstorage: getStorage(hubdev),
  //   hubtestdatabase: getDatabase(hubtest),
  //   hubtestauth: getAuth(hubtest),
  //   hubteststorage: getStorage(hubtest),
  riderdevdatabase: getDatabase(riderdev),
  riderdevauth: getAuth(riderdev),
  riderdevstorage: getStorage(riderdev),
  ridertestdatabase: getDatabase(ridertest),
  ridertestauth: getAuth(ridertest),
  riderteststorage: getStorage(ridertest),
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
  storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
};

export default connect;
