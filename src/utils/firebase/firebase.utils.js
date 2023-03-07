import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDb7_cAsLaw--adj8fe8IHQObz6mnSQ4xA",
    authDomain: "crwn-clothing-db-68a98.firebaseapp.com",
    projectId: "crwn-clothing-db-68a98",
    storageBucket: "crwn-clothing-db-68a98.appspot.com",
    messagingSenderId: "952931993892",
    appId: "1:952931993892:web:032f74c762e81faff58bb1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);