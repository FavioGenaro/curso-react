// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8thLOnL0yk451qNFQanfl3XHQIBjLo-o",
    authDomain: "react-curso-1743c.firebaseapp.com",
    projectId: "react-curso-1743c",
    storageBucket: "react-curso-1743c.appspot.com",
    messagingSenderId: "750001847864",
    appId: "1:750001847864:web:d887a5f7974943d821b0cd"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp) // nos otorga todas las funcionalidades de autenticación

export const FirebaseDB = getFirestore(FirebaseApp) // para la configuración de la base de datos Firestore
