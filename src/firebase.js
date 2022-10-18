import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuNgigdgV1VKlL1gbmKZ45_ysqIJqUwwI",
  authDomain: "netflix-4d29e.firebaseapp.com",
  projectId: "netflix-4d29e",
  storageBucket: "netflix-4d29e.appspot.com",
  messagingSenderId: "464465723151",
  appId: "1:464465723151:web:4ac0af6700a71e9967887a"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };