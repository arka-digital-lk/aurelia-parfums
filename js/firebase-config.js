// ============================================================
//  AURELIA PERFUMES — Firebase Configuration
//  ➜ Replace the values below with YOUR Firebase project keys
//  ➜ Get them from: Firebase Console → Project Settings → Your Apps
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDrYKU4qhzwE07oqgp4FTJGLWVuRBpgpr4",
  authDomain: "aurelia-perfume.firebaseapp.com",
  projectId: "aurelia-perfume",
  storageBucket: "aurelia-perfume.firebasestorage.app",
  messagingSenderId: "256635284149",
  appId: "1:256635284149:web:5e2579d71c9f283c3a6cfc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Auth and Firestore instances for use in script.js
const auth = firebase.auth();
const db   = firebase.firestore();

console.log("✅ Firebase initialized — AURELIA PARFUMS");
