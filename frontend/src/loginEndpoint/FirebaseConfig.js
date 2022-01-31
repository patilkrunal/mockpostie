// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9jLaMAnw4KrlMISLvWmlqrMaILvV7mL8",
  authDomain: "mockapi-fc598.firebaseapp.com",
  databaseURL: "https://mockapi-fc598-default-rtdb.firebaseio.com",
  projectId: "mockapi-fc598",
  storageBucket: "mockapi-fc598.appspot.com",
  messagingSenderId: "145327061745",
  appId: "1:145327061745:web:d24907e4d9c6538b7b0750",
  measurementId: "G-BS2ZJKX7K3"
};


// //auth
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app); 

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const authentication = firebase.auth();
// export {firebase}