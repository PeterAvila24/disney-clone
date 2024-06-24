import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDoqL9li4kmsMpqg9CqQkPHNJlsJpTI0FY",
    authDomain: "disneyplus-clone-10401.firebaseapp.com",
    projectId: "disneyplus-clone-10401",
    storageBucket: "disneyplus-clone-10401.appspot.com",
    messagingSenderId: "289355250596",
    appId: "1:289355250596:web:cab044ba63b98a633d1f31",
    measurementId: "G-MFDH6G1NZC"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
