import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Firebase requirements.
const firebaseConfig = {
  apiKey: "AIzaSyB-Fexg168VD0nzGhzzT0h1VDFjMnMeK-A",
  authDomain: "modelviewapp.firebaseapp.com",
  projectId: "modelviewapp",
  storageBucket: "modelviewapp.appspot.com",
  messagingSenderId: "1072150370830",
  appId: "1:1072150370830:web:a713f5207e3059b13ffa5f",
  measurementId: "G-ZJH4XDXJQL",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

const projectStorage = firebase.storage();

const timeStamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timeStamp };
