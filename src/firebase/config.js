import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDs7L8BA9PMsd0bHRStZkk1vDl6CIgj1Mg",
  authDomain: "thedojo-app.firebaseapp.com",
  projectId: "thedojo-app",
  storageBucket: "thedojo-app.appspot.com",
  messagingSenderId: "1042824801419",
  appId: "1:1042824801419:web:7492fec4b0dd3c9299388e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
