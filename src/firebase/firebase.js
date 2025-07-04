import { initializeApp } from "firebase/app"
import { REACT_APP_GOOGLE_API_KEY } from "../../.gitignore/api" 

// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const firebaseConfig = {
    apiKey: REACT_APP_GOOGLE_API_KEY,
    authDomain: "mystore-15b89.firebaseapp.com",
    projectId: "mystore-15b89",
    storageBucket: "mystore-15b89.firebasestorage.app",
    messagingSenderId: "646336087205",
    appId: "1:646336087205:web:c64053c6de523cf48d794c",
    measurementId: "G-LCGPVPYJMH"
}

export const app = initializeApp(firebaseConfig)