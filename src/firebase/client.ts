import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup, type UserCredential } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBSd9dKk1o78712xxCCjbw3hgQ-vtDFnEk',
  authDomain: 'rock-your-astro-ede3c.firebaseapp.com',
  databaseURL: 'https://rock-your-astro-ede3c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'rock-your-astro-ede3c',
  storageBucket: 'rock-your-astro-ede3c.appspot.com',
  messagingSenderId: '301319897532',
  appId: '1:301319897532:web:df1b910016201998596bb9',
  measurementId: 'G-ZMFCTMS971',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const projectAuth = getAuth(app)
