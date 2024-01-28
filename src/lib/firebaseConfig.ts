import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth
} from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF3z8DOz4uDQCrLFavQqJnoymSqT0E_xc",
  authDomain: "uofthacks-kgzb.firebaseapp.com",
  projectId: "uofthacks-kgzb",
  storageBucket: "uofthacks-kgzb.appspot.com",
  messagingSenderId: "402995133815",
  appId: "1:402995133815:web:7eeb0b6b4fc92ac64ef572",
  measurementId: "G-FT2908EN8N"
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
auth.useDeviceLanguage();
const provider: GoogleAuthProvider = new GoogleAuthProvider();

export { app, auth, provider, signInWithPopup };
