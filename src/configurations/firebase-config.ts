// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKq3FDHJYEwkR56iiEyrQF9o_wIYMXD3A",
    authDomain: "java-27-30-bakery-shop-f0dae.firebaseapp.com",
    projectId: "java-27-30-bakery-shop-f0dae",
    storageBucket: "java-27-30-bakery-shop-f0dae.firebasestorage.app",
    messagingSenderId: "804838202909",
    appId: "1:804838202909:web:2324ee2a0e7761fc0630f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);