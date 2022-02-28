// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, getFirestore, doc, setDoc, addDoc, getDoc, collection, onSnapshot, query, where, getdocs, orderBy, limit, } from 'firebase/firestore';
import database from 'firebase/database';
import { async } from '@firebase/util';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLUORxmZiSa6oPKCYNJq2kAmmCUAA3mX8",
  authDomain: "tjworkswood-v0-1.firebaseapp.com",
  projectId: "tjworkswood-v0-1",
  storageBucket: "tjworkswood-v0-1.appspot.com",
  messagingSenderId: "524610814868",
  appId: "1:524610814868:web:eed366874a424c2fec8581",
  measurementId: "G-D09WNZ5DG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore =getFirestore();
const speacialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14');
var firebaseDB = initializeApp(firebaseConfig)
var fireDB = firebaseDB
// const childDoc = doc(speacialOfTheDay, 'orderHistory/totalSales');
function writeDailySpecial(){
  const docData={
    description: 'test order',
    price: '3.99',
    milk:'2%',
    vegan: false
  };
  setDoc(speacialOfTheDay, docData, { merge: true})
  .then(() => {
    console.log('This has been written to DB');
  })
  .catch((error) => {
    console.log(`I got an error! ${error}`)
  })
}



const ordersCollection = collection(firestore, 'orders');
async function addANewDocument() {
  const newDoc = await addDoc(ordersCollection, {
    customer: 'TJ',
    drink: 'stuff',
    total_cost: (100 + Math.floor(Math.random() * 400))/100,
  });
  console.log(`doc was created at ${newDoc.path}`)
}


async function readASingleDocument() {
  const mySnapshot = await getDoc(speacialOfTheDay);
   if (mySnapshot.exists()) {
     const docData = mySnapshot.data();
     console.log(`my data is ${JSON.stringify(docData)}`);
   }
}


console.log("reading me?")
// writeDailySpecial()
// addANewDocument()


export default firebaseDB
