import React, { useState } from 'react';
import Add from "../img/addAvatar.png";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../firebae";
const Register = () => {

  const [error,setError] = useState(false)

 const handleSUbmit =async (e)=>{
  e.preventDefault();
   
   const displayName = e.target[0].value
   const email = e.target[1].value
   const password = e.target[2].value
   const file = e.target[3].files[0];

  
try {
  
  const res =await  createUserWithEmailAndPassword(auth, email, password)
  
} catch (error) {

  setError(true)
  
}

  

 }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Let's Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSUbmit}>
                <input type='text' placeholder='Display Name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:"none"}} type='file' id="file"/>
                <label htmlFor='file'>
                    <img src={Add} alt=""/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {error && <span>Something Went wrong</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register