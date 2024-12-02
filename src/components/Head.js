import React from 'react'
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../Utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth'; 
import { LOGO } from '../Utils/constants';

const Head = () => {
  
  //to redirect
  const navigate= useNavigate();

  const dispatch=useDispatch();

  //to add user profile pic
  const user =useSelector( store => store.user)

    
  //   <----i want this present all time  thats why put it into head--->

     //sign in/sign out this function will get called 
     //we have to do this once thats why use useEffect
     useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
           const {uid , email,displayName,photoURL} = user;
           dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }))
              navigate("/browse");
          } 
            else {
            // User is signed out
             dispatch(removeUser());
             navigate("/");
          }
        });

        //unsubscribe when component unmount
        //when header is unloaded unsubscribe the onAuthStateChanged
        return () => unsubscribe();
   },[])


   const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
   }

  return (
    <div className='absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
       <img
       className='w-40'
       src={LOGO}
        alt='logo'
        />

       {/* only when user signin show this div(profile pic) */}
       {user&&
        (
        <div className='flex p-8'>
          <img 
          className='w-6 h-6 mr-1'
          alt='usericon' src={user?.photoURL}
          />
          <button onClick={handleSignOut} className='font-bold text-white'>
            Sign Out
            </button>
        </div>
        )
      }
    </div>
  )
}

export default Head



