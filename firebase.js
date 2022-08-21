// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNz0maanEx_gTArGfKKvM9HfXfuFasZ_E",
  authDomain: "medium-clone-replit-b6224.firebaseapp.com",
  projectId: "medium-clone-replit-b6224",
  storageBucket: "medium-clone-replit-b6224.appspot.com",
  messagingSenderId: "205596938945",
  appId: "1:205596938945:web:a818ab27ba9a5fcddbfa40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(auth)

export { auth, provider, db };
