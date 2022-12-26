import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyDrYOKRMQfw2KGvkjbAmZnM1onlsGQkWqg",
  
    authDomain: "funnki-e741f.firebaseapp.com",
  
    databaseURL: "https://funnki-e741f-default-rtdb.firebaseio.com",
  
    projectId: "funnki-e741f",
  
    storageBucket: "funnki-e741f.appspot.com",
  
    messagingSenderId: "261438141829",
  
    appId: "1:261438141829:web:a80a3fd1645ae69fa480ec",
  
    measurementId: "G-4NYJWFPCJM"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const firestore = getFirestore(app);

const storage = getStorage(app);
const analytics = getAnalytics(app);
export { app, auth,storage,firestore,analytics}