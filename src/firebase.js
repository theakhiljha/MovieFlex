import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCf_YSjnMa0Hbp43oq_ZqXsIgiVSi2FVko",
  authDomain: "movieflex-8b75f.firebaseapp.com",
  databaseURL: "https://movieflex-8b75f.firebaseio.com",
  projectId: "movieflex-8b75f",
  storageBucket: "movieflex-8b75f.appspot.com",
  messagingSenderId: "783628299483",
  appId: "1:783628299483:web:1e10436a54c544d04930fe",
  measurementId: "G-5CBWDHE8QT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
