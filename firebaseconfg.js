// Use import se estiver usando módulos (Node.js ou ES Modules)
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Para Realtime Database
// import { getFirestore } from 'firebase/firestore'; // Para Cloud Firestore

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const db = getFirestore(app); // Para Firestore

export { database };
// export { db };
