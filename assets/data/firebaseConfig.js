// assets/data/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCJvYotHZFEK6aK-0s81eAzN3943hDEJEQ",
    authDomain: "tecagro-b1e81.firebaseapp.com",
    projectId: "tecagro-b1e81",
    storageBucket: "tecagro-b1e81.firebasestorage.app",
    messagingSenderId: "1015391936701",
    appId: "1:1015391936701:web:cb3332e8aa21329cb5d7d4"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Cloud Firestore e obtenha uma referência ao serviço
const db = getFirestore(app);

export { db }; // Exporte a instância do Firestore para ser usada em outros arquivos