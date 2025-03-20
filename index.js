const express = require("express"); 
const app = express();
const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UrNd7f7h9xYNzq7NEFhu93uRJGAWnhs",
  authDomain: "bitpeaks-user-management.firebaseapp.com",
  projectId: "bitpeaks-user-management",
  storageBucket: "bitpeaks-user-management.appspot.com",
  messagingSenderId: "975191187530",
  appId: "1:975191187530:web:c610633f782a10134086b3",
  measurementId: "G-BYH9GBDXXJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to BitPeaks Amazon Report Generator!");
});

// Signup route
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        res.json({ message: "User signed up successfully!", user: userCredential.user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
const { signInWithEmailAndPassword } = require("firebase/auth");

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        res.json({ message: "User logged in successfully!", user: userCredential.user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

