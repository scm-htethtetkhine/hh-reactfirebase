import firebase from '@firebase/app';
import "firebase/database";

const config = {
  apiKey: "AIzaSyB3GHbnf8KnTmOSJGnjHhpWH9zYwYBhtbo",
  authDomain: "crudfirebase-302d1.firebaseapp.com",
  databaseURL: "https://crudfirebase-302d1-default-rtdb.firebaseio.com",
  projectId: "crudfirebase-302d1",
  storageBucket: "crudfirebase-302d1.appspot.com",
  messagingSenderId: "266895172701",
  appId: "1:266895172701:web:f215bfda5bd0f23ff6d9b4",
  measurementId: "G-16PCEHM8QF"
};
firebase.initializeApp(config);

export default firebase.database();