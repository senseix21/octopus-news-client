// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD55OEvxLo9iNTn0DrJLuzbIxZbiWLzqRE",
    authDomain: "octopus-news-2c164.firebaseapp.com",
    projectId: "octopus-news-2c164",
    storageBucket: "octopus-news-2c164.appspot.com",
    messagingSenderId: "70265014428",
    appId: "1:70265014428:web:ca7644a572575027970559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;