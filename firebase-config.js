/* =========================================================
   FIRESTORE CONFIG
   Get these values from: Firebase console → Project settings
   → General tab → "Your apps" → SDK setup and configuration.
   (If you haven't created a web app in your Firebase project
   yet, click the </> icon there to register one first.)
========================================================= */
const firebaseConfig = {
  apiKey: "AIzaSyBi42zotckHIZtSN8Po-wHp_vtaWRwcKM4",
  authDomain: "atl-inventory-system.firebaseapp.com",
  projectId: "atl-inventory-system",
  storageBucket: "atl-inventory-system.firebasestorage.app",
  messagingSenderId: "926617977636",
  appId: "1:926617977636:web:451bf026451fb896bae9b1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
