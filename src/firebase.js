import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHAjxKEeb1L0xovFSRxW4ohUaQImGsy0",
  authDomain: "vchat-ba763.firebaseapp.com",
  projectId: "vchat-ba763",
  storageBucket: "vchat-ba763.appspot.com",
  messagingSenderId: "943410277489",
  appId: "1:943410277489:web:af120b73764aa55a9e7fd0",
  measurementId: "G-7MTB5WMLCP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
