import firebase from "firebase";
import "firebase/firestore";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCvf_2YMdwFeGPSPUtN-navnBIgjEuXhYY",
  authDomain: "todo-app-a74df.firebaseapp.com",
  databaseURL: "https://todo-app-a74df.firebaseio.com",
  projectId: "todo-app-a74df",
  storageBucket: "todo-app-a74df.appspot.com",
  messagingSenderId: "772235133639",
  appId: "1:772235133639:web:3bc0fa45f77eacf11674e2",
  measurementId: "G-8FVY3H57Y6",
});
const db = firebase.firestore();
export default db;
