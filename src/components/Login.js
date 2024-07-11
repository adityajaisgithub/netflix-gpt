import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = ()=>{
         setIsSignInForm(!isSignInForm);
  }
  return (
    <>
    <Header/>

    <div className='absolute'>
      <img
           src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg'
           alt='bg-img'/>
    </div>

    <form className='w-1/4 p-12 bg-black block absolute mx-auto right-0 left-0 my-36 text-white opacity-80' >
      <h1 className='font-bold text-3xl py-4 cursor-pointer'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Name' className='p-3 my-4 w-full rounded-lg bg-gray-700'/>}
      <input type='text' placeholder='Email address or phone number' className='p-3 my-4 w-full rounded-lg bg-gray-700'/>
      <input type='password' placeholder='Password' className='p-3 my-4 w-full rounded-lg bg-gray-700'/>
      <button className='p-2 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignInForm?"New to Netflix? Sign up now.":"Already User? Sign In now"}</p>
    </form>

    </>
  )
}

export default Login