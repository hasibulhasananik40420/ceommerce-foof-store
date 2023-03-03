// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnl1sX4vyd8wd3OgDIoNBcyIFrTOeXqRw",
    authDomain: "food-store-6eb9c.firebaseapp.com",
    projectId: "food-store-6eb9c",
    storageBucket: "food-store-6eb9c.appspot.com",
    messagingSenderId: "561722741486",
    appId: "1:561722741486:web:9c0b24324049b70772d9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth