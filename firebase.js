import * as firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1WjsGCiDCT0I0JBv3XQsi3MNBx3WFnXM",
    authDomain: "chategy-73.firebaseapp.com",
    projectId: "chategy-73",
    storageBucket: "chategy-73.appspot.com",
    messagingSenderId: "639381570787",
    appId: "1:639381570787:web:c6dec79768d54575e971d6"
  };

let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };