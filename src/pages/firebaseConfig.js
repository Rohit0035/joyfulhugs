// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyB_fogKFxRRALU_EmrWsAJthokzjRQDJww",
  authDomain: "joyfulbugs.firebaseapp.com",
  projectId: "joyfulbugs",
  storageBucket: "joyfulbugs.appspot.com", // ✅ corrected
  messagingSenderId: "1030345067025",
  appId: "1:1030345067025:web:f6544dc52acab7cecf7fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = getStorage(app);
const db = getFirestore(app);

// Export the initialized services
export { app, storage, db };