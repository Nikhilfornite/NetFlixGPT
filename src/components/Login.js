import React,{useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';
import { PROFILE_IMG } from '../utils/constants';
const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true);
  const [errorMessage,seterrorMessage] = useState(null)
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const dispatch = useDispatch()
  const toggleSignInForm = ()=>{
    if(userNameRef && userNameRef.current) userNameRef.current.value=""
    if(passwordRef && passwordRef.current) passwordRef.current.value=""
    if(emailRef && emailRef.current) emailRef.current.value=""
    setisSignInForm(!isSignInForm);
    seterrorMessage(null);
  }

  const handleBtnClick = ()=>{
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const sendToCheck = checkValidData(isSignInForm?null:userNameRef.current.value,email,password);
    seterrorMessage(sendToCheck);

    if(sendToCheck) return // if it has any erorrs then it becomes true or else null that is false

    if(!isSignInForm){
      //sign Up logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed up 
        updateProfile(userCredential.user, {
          displayName: userNameRef.current.value, 
          photoURL: PROFILE_IMG,
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
          // An error occurred
          seterrorMessage(error.message);
        });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage);
    // ..
  });
}

if(isSignInForm){
    //sign in logic
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage);
  });
  }

  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='brightness-50' src={BG_IMG} alt='Background-Image'></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up "}</h1>
      {
        !isSignInForm && (
          <input type='text' placeholder='Full Name ' ref={userNameRef} className='p-2 bg-gray-800 my-4 py-4 w-full' required></input>
        )
      }
        <input type='text' placeholder='Email Address ' ref={emailRef} className='p-2 bg-gray-800 my-4 py-4 w-full' required></input>
        <input type='password' placeholder='Password' ref={passwordRef} className='p-2 my-4 bg-gray-800 py-4 w-full' required></input>
        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-3 my-4 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>{isSignInForm?"Sign In":"Sign Up " }</button>
        <p className='py-4  text-gray-300'>{isSignInForm?"New to Netflix?":"Already registered?"} <span className='text-white font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Sign Up Now":"Sign In Now"} </span></p>
      </form>
       
    </div>
    
  )
}

export default Login