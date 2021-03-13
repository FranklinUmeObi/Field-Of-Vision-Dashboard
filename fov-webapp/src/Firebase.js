import firebase from "firebase";
import "firebase/auth";


let config = {
    apiKey: "AIzaSyChcUN8JT0Ww4EZsI_dT1WmJI4NH3TJSE8",
    authDomain: "fov-dashboard.firebaseapp.com",
    projectId: "fov-dashboard",
    storageBucket: "fov-dashboard.appspot.com",
    messagingSenderId: "985575055085",
    appId: "1:985575055085:web:99d95d2ed37b93d2b676e4"
}

const app = firebase.initializeApp(config);

export default app;