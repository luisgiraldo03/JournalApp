// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnmVHupoHTn4jh2aEeEfreGwtMiNdKjNo",
    authDomain: "react-cursos-5976c.firebaseapp.com",
    projectId: "react-cursos-5976c",
    storageBucket: "react-cursos-5976c.appspot.com",
    messagingSenderId: "428758028463",
    appId: "1:428758028463:web:71461eed40da3992da045a",
    measurementId: "G-QSS907TSVX"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
