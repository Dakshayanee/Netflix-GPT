import React, { useRef, useState } from 'react'
import Head from './Head'
import { checkValidData } from '../Utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { USER_AVTAR } from '../Utils/constants';



const Login = () => {

// useRef is used to refer the fields eg input field otherwise
// go with useState

const dispatch=useDispatch();

    //to change the state of toggleSignInForm
  const[isSignin,setisSignin]= useState(true);

  //to set the error message below the field
  const[errorMessage,setErrorMessage]=useState(null);

  //to store and refer the values
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  //for form validation 
  const handleButtonClick = () => {
      //validate the form data
   // console.log(email.current.value);
    //console.log(password.current.value);
    

   const message= checkValidData(
    email.current.value,
    password.current.value,
    isSignin ? '' :name.current.value   // Only check name when not signing in 
  ) ;    
   setErrorMessage(message);

   //if there is message eg.emaild is not valid just return
   if(message)return;

   //after validation do sign in and sign up 
    if(!isSignin){
      //do signup
      createUserWithEmailAndPassword(auth, 
        email.current.value,
        password.current.value,
        name.current.value
      )
      .then((userCredential) => {
    // Signed up 
       const user = userCredential.user;

       //update profile
         updateProfile(user, {
         displayName: name.current.value,
          photoURL: USER_AVTAR,
          })
            .then(() => {
        // Profile updated!dispatch
        //trying to access the user id,email... from updated value not from old one
          const {uid , email,displayName,photoURL} = auth.currentUser;
             dispatch(addUser({
                  uid:uid,
                  email:email,
                  displayName:displayName, 
                  photoURL:photoURL}))
         
          
         })
           .catch((error) => {
        // An error occurred 
          setErrorMessage(error.message);
         });
       console.log(user);
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"_"+ errorMessage);
  });

    }
    else{
      //do signin
      signInWithEmailAndPassword(auth, 
        email.current.value,
        password.current.value)
     .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log(user);

       // Dispatch user data to store after successful sign-in
       dispatch(addUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));

      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"_"+ errorMessage);
  });
 }
}

  const toggleSignInForm = () =>{
    setisSignin(!isSignin);
  }
  return (
    <div >
        <Head/>
      <div className='absolute'>
      <img 
      className='h-screen w-screen'
      src='https://blog.farmerswife.com/hs-fs/hubfs/840_560.jpeg?width=840&height=545&name=840_560.jpeg'
      alt='bg-img'/>
       </div>

      {/* when you signin it submit the form thats why it refresh the page,we dont want to submit the form thats why use prevent default */}
       <form onSubmit={(e) => e.preventDefault()} 
       className='p-12 bg-black absolute  w-3/12 my-36 mx-auto rounded-lg right-0 left-0 text-white bg-opacity-80'>
       <h1 className='font-bold text-3xl py-4' >{isSignin ?"Sign In" : "Sign Up"}</h1>

       {!isSignin && (
       <input 
       ref={name}
        type='text' 
        placeholder=' Full Name' 
        className='p-4 my-4 w-full bg-gray-700 rounded-md'
        />
       )}
        <input
        ref={email}
         type='text'
          placeholder='Email address' 
          className='p-4 my-4 w-full bg-gray-700 rounded-md '
          />
        <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700 rounded-md'
        />
            {/* To show error message under the field */}
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>  

        <button 
        className='p-4 my-4  bg-red-700 w-full rounded-md'
        onClick={handleButtonClick}
        >
        {isSignin ?"Sign In" : "Sign Up"}
        </button>

       {/* to check sign in or not */}
        {isSignin ? 
        <p>New to Netflix?
          <span 
          onClick={toggleSignInForm}
          className='font-bold cursor-pointer'>
            Sign up now</span></p> 
            :
            <p>alredy registered ?
          <span 
          onClick={toggleSignInForm}
          className='font-bold cursor-pointer'>
            Sign in now</span></p>}
       </form>
  </div>
     

  )
}

export default Login
