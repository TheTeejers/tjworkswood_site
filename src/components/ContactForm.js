import { ref, getFirestore, doc, setDoc, addDoc, getDoc, collection, onSnapshot, query, where, getdocs, orderBy, limit, } from "firebase/firestore";
// import firestore from "../firebase";
import React, { useState, useEffect } from 'react';
import firebaseDB from "../firebase"
import { async } from '@firebase/util';


import './ContactForm.css';


const firestore = getFirestore();

const addOrEdit = obj =>{
  firebaseDB.child('formFills').push(
    obj,
    err => {
      if(err)
      console.log(err);
    }
  )
}



const ContactForm = () => {
  const initialFieldValues = {
    fullName: '',
    phone: '',
    email: '',
    message: '',
  }

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = e =>{
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const messagesCollection = collection(firestore, 'messages');
  async function addANewDocument() {
    const newDoc = await addDoc(messagesCollection, {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        message: values.message,
    });
  }

  async function clearForm() {

  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(values);

    addANewDocument();
    setValues({
      fullName: '',
      phone: '',
      email: '',
      message: '',
    })
    // console.log('lookie here ' + document.getElementById('fullName').value);



  }




  return (
    <div id="formContainer">
      <form id='myForm' autoComplete='off' onSubmit={handleFormSubmit}>
        <input required placeholder= "Full Name" name="fullName" value={values.fullName} onChange= {handleInputChange}/>
        <input id= "phone" type='text' placeholder= "Phone Number" name="phone" value={values.phone} onChange= {handleInputChange}/>
        <input type='email' required placeholder= "Email" name="email" value={values.email} onChange= {handleInputChange}/>
        <textarea required placeholder= "Message" name="message" value={values.message} onChange= {handleInputChange}/>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );

}

export default ContactForm;
