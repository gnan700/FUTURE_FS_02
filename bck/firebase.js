const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc  } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");
// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDA4TpmdiuEvhvE8zfcN8yi-LWyyo_BXso",
  authDomain: "gnan-project.firebaseapp.com",
  projectId: "gnan-project",
  storageBucket: "gnan-project.firebasestorage.app",
  messagingSenderId: "104682364918",
  appId: "1:104682364918:web:a7acb9e041f452476231d7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebaseStorage = getStorage(app); // Renamed to avoid conflict

module.exports = { db, firebaseStorage, collection, addDoc };