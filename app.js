// ═══════════════════════════════════════════════════════════
// Firebase Configuration
// ═══════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyBEoyeQvUzFJviG2oYs5sZsAQ0bR9dHN0U",
  authDomain: "my-simple-stores.firebaseapp.com",
  projectId: "my-simple-stores",
  storageBucket: "my-simple-stores.firebasestorage.app",
  messagingSenderId: "280278183648",
  appId: "1:280278183648:web:65d99dceeab2be1584ea85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// Login Function
async function login(username, code) {
  const doc = await db.collection('stores').doc(code).get();
  if (doc.exists && doc.data().username === username) {
    return doc.data();
  }
  throw new Error('Invalid credentials');
}

// Save Info
async function saveInfo(code, data) {
  await db.collection('stores').doc(code).update({ info: data });
}

// Add Product
async function addProduct(code, product) {
  const doc = await db.collection('stores').doc(code).collection('products').add({
    ...product,
    createdAt: new Date().toISOString()
  });
  return doc.id;
}

// Get Products
async function getProducts(code) {
  const snapshot = await db.collection('stores').doc(code).collection('products').get();
  return snapshot.docs.map(d => ({id: d.id, ...d.data()}));
}

// Delete Product
async function deleteProduct(code, pid) {
  await db.collection('stores').doc(code).collection('products').doc(pid).delete();
}

// Save Delivery
async function saveDelivery(code, states) {
  await db.collection('stores').doc(code).update({ delivery: states });
}

// Save Social
async function saveSocial(code, data) {
  await db.collection('stores').doc(code).update({ 'info.social': data });
}

// Upload Image
async function uploadImage(file, code) {
  const ref = storage.ref().child(`stores/${code}/${Date.now()}_${file.name}`);
  await ref.put(file);
  return await ref.getDownloadURL();
}

// Get Store Info
async function getStoreInfo(code) {
  const doc = await db.collection('stores').doc(code).get();
  return doc.exists ? doc.data() : null;
}


