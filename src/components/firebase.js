// components/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your Firebase configuration object, which you get from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDxeifwkcWcEu5rAeLLq9AFc8DvBrqzOIg",
  authDomain: "sport-b4f75.firebaseapp.com",
  projectId: "sport-b4f75",
  storageBucket: "sport-b4f75.appspot.com",
  messagingSenderId: "1075859489090",
  appId: "1:1075859489090:web:b3d6b3e6f4df0d803088db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export auth and googleProvider to use in other components
export { auth, googleProvider, signInWithPopup };
