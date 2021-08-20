import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBl_aXAKaTVSd9YZf1mC5cU7l12R7lAN60",
  authDomain: "discord-clone-redux-96ae2.firebaseapp.com",
  projectId: "discord-clone-redux-96ae2",
  storageBucket: "discord-clone-redux-96ae2.appspot.com",
  messagingSenderId: "169627166634",
  appId: "1:169627166634:web:f39c673f74d0dbb26a6dd3",
  measurementId: "G-QW35WDZZQC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
