// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtm1d-YA36cLifhV3E7OwkmQ3wbEx12xQ",
    authDomain: "realtor-clone-react-d6abb.firebaseapp.com",
    projectId: "realtor-clone-react-d6abb",
    storageBucket: "realtor-clone-react-d6abb.appspot.com",
    messagingSenderId: "120237796155",
    appId: "1:120237796155:web:d7721d22e5b261d048651e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();