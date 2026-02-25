// ═══════════════════════════════════════════════════════════
// Firebase Configuration
// ═══════════════════════════════════════════════════════════

// ✏️ استبدلي هذا بـ Project ID الخاص بكِ!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "my-simple-stores
.firebaseapp.com",
  projectId: "my-simple-stores
",
  storageBucket: "my-simple-stores
.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
