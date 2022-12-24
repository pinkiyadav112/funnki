import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCN_DecSxKO1awkUwk_CrJi3DVzqujKsWY",
    authDomain: "funnki-6cdb3.firebaseapp.com",
    databaseURL: "https://funnki-6cdb3-default-rtdb.firebaseio.com",
    projectId: "funnki-6cdb3",
    storageBucket: "funnki-6cdb3.appspot.com",
    messagingSenderId: "348195215706",
    appId: "1:348195215706:web:fc563e3b6b47914dad7b63",
    measurementId: "G-BF82M03F8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const firestore = getFirestore(app);

const storage = getStorage(app);
const analytics = getAnalytics(app);
export { app, auth,storage,firestore,analytics}