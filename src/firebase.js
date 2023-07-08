import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAaDnUfQ2vJbNb1cE_tE4V8olPqFQ599cI",
    authDomain: "clone-ytube-deba.firebaseapp.com",
    projectId: "clone-ytube-deba",
    storageBucket: "clone-ytube-deba.appspot.com",
    messagingSenderId: "412954983437",
    appId: "1:412954983437:web:5efc812d8b04c74bae6944"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()