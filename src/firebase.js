// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from  'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAw1ZqPL9DZlOAnnJYU0zf6b35pvBu5ZCA",
  authDomain: "robinhood-45ac4.firebaseapp.com",
  projectId: "robinhood-45ac4",
  storageBucket: "robinhood-45ac4.appspot.com",
  messagingSenderId: "786666588363",
  appId: "1:786666588363:web:1d92f87f9fafa90fdb334e",
  measurementId: "G-ZYBTLZ3E9F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };