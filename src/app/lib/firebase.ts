import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKAq-N-8MPOw6kETA3L-BOUQtKaGMOlkc",
  authDomain: "xpensease-5a520.firebaseapp.com",
  projectId: "xpensease-5a520",
  storageBucket: "xpensease-5a520.firebasestorage.app",
  messagingSenderId: "845005712128",
  appId: "1:845005712128:web:a37245939915641d1a21e5",
  measurementId: "G-BHYPW6GW1N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
