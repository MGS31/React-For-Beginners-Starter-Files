import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFWzvmm-LJHao4c0-H_isrydcldlTgIwo",
  authDomain: "catch-of-the-day-matt-stan.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-matt-stan-default-rtdb.firebaseio.com",
});


const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;