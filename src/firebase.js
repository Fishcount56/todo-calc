import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDvJB43pJkgUCq6NXAS4h7SHhYs9Qpz004",
    authDomain: "lf-task-rn.firebaseapp.com",
    projectId: "lf-task-rn",
    storageBucket: "lf-task-rn.appspot.com",
    messagingSenderId: "58345781297",
    appId: "1:58345781297:web:eec02f776c781dc0007d10",
    measurementId: "G-QK5HHGG851"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }