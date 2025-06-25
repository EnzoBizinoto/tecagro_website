import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJvYotHZFEK6aK-0s81eAzN3943hDEJEQ",
    authDomain: "tecagro-b1e81.firebaseapp.com",
    projectId: "tecagro-b1e81",
    storageBucket: "tecagro-b1e81.firebasestorage.app",
    messagingSenderId: "1015391936701",
    appId: "1:1015391936701:web:cb3332e8aa21329cb5d7d4"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db }; 