import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDR3B6DGWLVBBtkLvfyjBJYXOJlSTHjGdw",
  authDomain: "empintern.firebaseapp.com",
  projectId: "empintern",
  storageBucket: "empintern.appspot.com",
  messagingSenderId: "647764164841",
  appId: "1:647764164841:web:567ad03012da42890bb078"
};


const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
export default db;