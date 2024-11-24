// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoqIp398f3ENPBAyNT4bKTTefBWMFgNY8",
  authDomain: "lingo-bingo-bbd8d.firebaseapp.com",
  projectId: "lingo-bingo-bbd8d",
  storageBucket: "lingo-bingo-bbd8d.firebasestorage.app",
  messagingSenderId: "164610531528",
  appId: "1:164610531528:web:964a256c498b23ee0f05fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;