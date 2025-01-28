const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { db, firebaseStorage } = require("./firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const app = express();
app.use(cors());
app.use(express.json());

// Set up Multer for file uploads
const multerStorage = multer.memoryStorage(); // Renamed to avoid conflict
const upload = multer({ storage: multerStorage });
const firebaseConfig = {
  apiKey: "AIzaSyDA4TpmdiuEvhvE8zfcN8yi-LWyyo_BXso",
  authDomain: "gnan-project.firebaseapp.com",
  projectId: "gnan-project",
  storageBucket: "gnan-project.firebasestorage.app",
  messagingSenderId: "104682364918",
  appId: "1:104682364918:web:a7acb9e041f452476231d7",
};
app.get("/", (req, res) => {
  res.send("Welcome to the Recipe Sharing App API!");
});
// Route to get all recipes
app.get('/recipes', async (req, res) => {
  try {
    const snapshot = await addDoc(collection(db, "recipes"));
  if (snapshot.empty) {
      return res.status(404).json({ error: "No recipes found" });
    }
    const recipes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Send a response back with the list of recipes
    return res.status(200).json(recipes);
  } catch (e) {
    // Handle errors
    console.error("Error retrieving recipes: ", e);
    return res.status(500).json({ error: "Failed to retrieve recipes", details: e });
  }
});


// POST route to handle file uploads
app.post("/recipes", upload.single("recipeImage"), async (req, res) => {
  try {
    const { name, cuisine, difficulty, ingredients, steps } = req.body;
      if (!name || !cuisine || !difficulty || !ingredients || !steps) {
  return res.status(400).json({ error: "Missing required fields" });
}

    // Handle the uploaded file
    const file = req.file;
    
    const storageRef = ref(firebaseStorage, `images/${Date.now()}-${file.originalname}`);
    await uploadBytes(storageRef, file.buffer);
    const imageUrl = await getDownloadURL(storageRef);

    // Save recipe data to Firestore
    const recipe = {
      name,
      cuisine,
      difficulty,
      ingredients: ingredients.split(","),
      steps,
      imageUrl,
    };

    await addDoc(collection(db, "recipes"), recipe);

    res.status(201).json({ message: "Recipe added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
