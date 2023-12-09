import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDqUexH4ewrTz4gIsxGr84exTjdF0wROkU",
    authDomain: "brand-shop-e425b.firebaseapp.com",
    projectId: "brand-shop-e425b",
    storageBucket: "brand-shop-e425b.appspot.com",
    messagingSenderId: "1042449763239",
    appId: "1:1042449763239:web:ccc56edb5ef69412a58482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;