// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCnBbmPUkDYdLkz637W9fII0RU4RTvaIuw",
  authDomain: "tiktok-clone-7a4cf.firebaseapp.com",
  projectId: "tiktok-clone-7a4cf",
  storageBucket: "tiktok-clone-7a4cf.appspot.com",
  messagingSenderId: "626856891977",
  appId: "1:626856891977:web:5ecf4cbc85507187a25198",
  measurementId: "G-C01R840N15"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore(firebaseApp)
export default db;