import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxrCmjgs2YnPSFDui7doZ98F_2i4ObHVg",
  authDomain: "linkedin-clone-2f5ab.firebaseapp.com",
  projectId: "linkedin-clone-2f5ab",
  storageBucket: "linkedin-clone-2f5ab.appspot.com",
  messagingSenderId: "352024880476",
  appId: "1:352024880476:web:754b66387ff90672680d99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.authGoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
