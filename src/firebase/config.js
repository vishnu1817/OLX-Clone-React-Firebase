import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKEZeeLlqwEBj-SAG7tqg_lTF2f6-Zngk",
    authDomain: "olx-clone-c3d88.firebaseapp.com",
    projectId: "olx-clone-c3d88",
    storageBucket: "olx-clone-c3d88.appspot.com",
    messagingSenderId: "891977455737",
    appId: "1:891977455737:web:32b26e04d7fcff1ad21ca8",
    measurementId: "G-H8B4K6FRMW"
  };
  
export default firebase.initializeApp(firebaseConfig)