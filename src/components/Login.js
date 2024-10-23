import React,{useState} from 'react'
import Header from './Header'
const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true);
   const toggleSignInForm = ()=>{
    setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg' alt='Background-Image'></img>
      </div>
      <form className='w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up "}</h1>
      {
        !isSignInForm && (
          <input type='text' placeholder='Full Name ' className='p-2 bg-gray-800 my-4 py-4 w-full'></input>
        )
      }
        <input type='text' placeholder='Email Address ' className='p-2 bg-gray-800 my-4 py-4 w-full'></input>
        <input type='password' placeholder='Password' className='p-2 my-4 bg-gray-800 py-4 w-full'></input>
        <button className='p-3 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up "}</button>
        <p className='py-4  text-gray-300'>{isSignInForm?"New to Netflix?":"Already registered?"} <span className='text-white font-bold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Sign Up Now":"Sign In Now"} </span></p>
      </form>
       
    </div>
    
  )
}

export default Login