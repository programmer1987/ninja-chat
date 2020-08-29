import firebase from 'firebase'  
import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "udemy-ninja-chat-baddd.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-baddd.firebaseio.com",
    projectId: "udemy-ninja-chat-baddd",
    storageBucket: "udemy-ninja-chat-baddd.appspot.com",
    messagingSenderId: "97738141116",
    appId: ""
  };
  // Initialize Firebase
  const firebaseapp =  firebase.initializeApp(firebaseConfig);
  firebaseapp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseapp.firestore();
