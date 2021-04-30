import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbb9P554-t1eiBC3ADIviSXL_UUFF1EsY",
    authDomain: "signal-clone-8a075.firebaseapp.com",
    projectId: "signal-clone-8a075",
    storageBucket: "signal-clone-8a075.appspot.com",
    messagingSenderId: "47279117775",
    appId: "1:47279117775:web:95f0e6338241c0b6bdaeba"
  };

  let app;

  if (firebase.apps.length === 0)
  {
      app = firebase.initializeApp(firebaseConfig);
  }
  else
  {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = app.auth();

  export {db , auth};