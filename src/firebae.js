import {initializeApp} from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtsvzzcoX7T_QFqNrGKYWa386IBNYxb7Q",
  authDomain: "chat-d8d03.firebaseapp.com",
  projectId: "chat-d8d03",
  storageBucket: "chat-d8d03.appspot.com",
  messagingSenderId: "1023164026031",
  appId: "1:1023164026031:web:e07b33bce4aea2ebaad85a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()