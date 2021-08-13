import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzXjuH2Dmd-8nesgN4TNLvzWk7e9c5Uko",
  authDomain: "facebook2-5c187.firebaseapp.com",
  projectId: "facebook2-5c187",
  storageBucket: "facebook2-5c187.appspot.com",
  messagingSenderId: "31114215790",
  appId: "1:31114215790:web:959c2a252741649240017f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
