import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const user= useSelector(store=>store.user);
  const dispatch = useDispatch();
  // since i need to know whether the user has loged in or out to give certain permission 
  // and header is in all routes i make below useEffect in a central place
  // onAuthStatechange now, only if user logs in then it allows to browse page and also if user tries to come to login page it wont allow and automatically puts him in browse page.
  useEffect(()=>{
    //its like a observer called when user signs in and also when signs out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when my component unmounts
    return ()=>unsubscribe()
  },[])

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className='z-10 absolute px-8 py-2 brightness-105 flex justify-between w-full'>
        <img className='w-40' src={LOGO} alt='Logo'></img>
        {user && <div className='flex  p-2'>
          <img className='w-12 h-12 rounded-lg' src={user.photoURL} alt='UserPic'></img>
          <button className='font-bold  text-yellow-300 px-2'onClick={handleSignOut}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header