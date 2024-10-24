import React,{useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true);
  const [errorMessage,seterrorMessage] = useState(null)
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const userNameRef = useRef(null);

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
    seterrorMessage(checkValidData(isSignInForm?null:userNameRef.current.value,email,password));

  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg' alt='Background-Image'></img>
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