import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBbA8wvW7-KmDfhZIZqtxqdDTu6nDbQnNQ",
    authDomain: "cki-leap.firebaseapp.com",
    projectId: "cki-leap",
    storageBucket: "cki-leap.appspot.com",
    messagingSenderId: "789291438183",
    appId: "1:789291438183:web:e5e9591ae14ba0639ec4c2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
