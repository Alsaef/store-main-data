// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdFp024frbhiKHmvRYfbTbGFxt5LpNBBE",
  authDomain: "my-shop-b9cbe.firebaseapp.com",
  projectId: "my-shop-b9cbe",
  storageBucket: "my-shop-b9cbe.appspot.com",
  messagingSenderId: "560963523390",
  appId: "1:560963523390:web:14b5413306a7b7a552d26f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;