const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDA4TpmdiuEvhvE8zfcN8yi-LWyyo_BXso",
  authDomain: "gnan-project.firebaseapp.com",
  projectId: "gnan-project",
  storageBucket: "gnan-project.firebasestorage.app",
  messagingSenderId: "104682364918",
  appId: "1:104682364918:web:a7acb9e041f452476231d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore initialization

const getRecipes = async () => {
  try {
    const snapshot = await getDocs(collection(db, "recipes"));
    
    if (snapshot.empty) {
      console.log("No recipes found.");
      return;
    }

    snapshot.docs.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (e) {
    console.error("Error getting recipes:", e);
  }
};

getRecipes();
