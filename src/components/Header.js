import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user= useSelector(store=>store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className='z-10 absolute px-8 py-2 brightness-105 flex justify-between w-full'>
        <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo'></img>
        {user && <div className='flex  p-2'>
          <img className='w-12 h-12 rounded-lg' src={user.photoURL} alt='UserPic'></img>
          <button className='font-bold  text-yellow-300 px-2'onClick={handleSignOut}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header