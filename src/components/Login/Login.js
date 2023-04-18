import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginBack from '../../assets/loginBack.png'
import Logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import facebook from '../../assets/signUpFacebook.png'
// import { unstable_HistoryRouter } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // do something with email and password, like log in the user
      console.log("Email:", email);
      console.log("Password:", password);
      
      window.location.href = "/HomePage";
    } else {
      // show error message
      alert("Please enter your email and password.");
    }
  }


  return (
    <div>
      <div className='flex flex-row h-screen bg-purple-500'>
        <div class="flex">
          <img src={loginBack} alt='' />
        </div>
        <div className='flex flex-col h-screen justify-center bg-white relative' style={{ borderTopLeftRadius: 40, borderBottomLeftRadius: 40, width: '80%' }}>
          <div class=" flex justify-end mr-48">
            <Link to='/' className='text-xl text-black'>&#10006;</Link>
          </div>
          <div class="flex justify-end mt-4">
            <img style={{ height: "80%", width: '10%' }} class="mx-auto" src={Logo} alt='' />
          </div>
          <p className=' text-center p-7 ml-5 text-2xl font-medium'>Login</p>

          <div class="flex flex-col ml-6 items-center">
            <div class="flex flex-col w-1/2 mt-2 sm:grid-cols-2 mx-auto">
              <form onSubmit={handleSubmit}>
                <input type="email" name="email" className="my-2 w-full bg-gray-200  rounded-md py-2 px-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                <input type="password" name="password" className="my-2 w-full bg-gray-200 rounded-md py-2 px-3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                <Link className="underline decoration-solid p-3 text-blue-500 hover:text-black">Forgot Password</Link>
              <div className='mt-4'>
                <button type="submit" className="inline-block w-full px-6 py-3 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-full cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">
                  Login
                </button>
                </div>
              </form>



              <p className=' text-center text-gray-500 mt-2'>--------------- or Sign Up With ---------------</p>

              <div class="flex flex-row justify-center items-center">
                <div class="flex flex-col mx-10 mt-4">
                  <img style={{ height: '100%', width: '50%' }} class="mx-auto" src={google} alt='' />
                  <p style={{ fontWeight: 500 }} className='text-1xl'>Google</p>
                </div>
                <div class="flex flex-col mx-10 mt-4">
                  <img style={{ height: '40%', width: '40%' }} class="mx-auto" src={facebook} alt='' />
                  <p style={{ fontWeight: 500 }} className='text-1xl'>Facebook</p>
                </div>
              </div>
              <div className='flex flex-row justify-center p-5 items-center'>
                <p style={{ fontSize: 13, fontWeight: 500 }} className=' mx-1'>Don't have an account ? </p>
                <Link to='/Signup' style={{ fontSize: 16 }} className=' text-xl text-blue-600'>Sign Up</Link>
              </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
