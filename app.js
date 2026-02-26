// ═══════════════════════════════════════════════════════════
// Firebase Configuration
// ═══════════════════════════════════════════════════════════

// ✏️ استبدلي هذا بـ Project ID الخاص بكِ!
const firebaseConfig = {
  apiKey: "AIzaSyBEoyeQvUzFJviG2oYs5sZsAQ0bR9dHN0U",
  authDomain: "my-simple-stores
.firebaseapp.com",
  projectId: "my-simple-stores
",
  storageBucket: "my-simple-stores
.appspot.com",
  messagingSenderId: "280278183648",
  appId: "1:280278183648:web:65d99dceeab2be1584ea85"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
