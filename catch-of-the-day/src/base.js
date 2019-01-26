import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEXLq8S5kwewD5i-ElRH79NuPoX4FV5uM",
    authDomain: "alli-b-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://alli-b-catch-of-the-day.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;