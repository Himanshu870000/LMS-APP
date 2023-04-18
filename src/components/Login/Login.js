import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginBack from '../../assets/loginBack.png'
import Logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import facebook from '../../assets/signUpFacebook.png'
// import { unstable_HistoryRouter } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // do something with email and password, like log in the user
  // }
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
            <img style={{ height: "70%", width: '10%' }} class="mx-auto" src={Logo} alt='' />
          </div>
          <p className=' text-center p-7 ml-5 text-2xl font-medium'>Login</p>

          <div class="flex flex-col ml-6 items-center">
            <div class="flex flex-col w-1/2 mt-2 sm:grid-cols-2 mx-auto">
              <form>
                <input type="email" name="email" className="my-2 w-full bg-gray-200  rounded-md py-2 px-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                <input type="password" name="password" className="my-2 w-full bg-gray-200 rounded-md py-2 px-3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                <Link className="underline decoration-solid p-3 text-blue-500 hover:text-black">Forgot Password</Link>

                <Link to='/HomePage' type="submit" className="bg-purple-500 w-full flex justify-center items-center hover:bg-purple-700 text-white font-bold my-3 py-3 px-4 rounded-full">
                  Login
                </Link>

              </form>



              <p className=' text-center text-gray-500 mt-2'>--------------- or Sign Up With ---------------</p>

              <div class="flex flex-row justify-center items-center">
                <div class="flex flex-col mx-10 mt-4">
                  <img style={{ height: '100%', width: '50%' }} class="mx-auto" src={google} alt='' />
                  <p style={{fontWeight:500}} className='text-1xl'>Google</p>
                </div>
                <div class="flex flex-col mx-10 mt-4">
                  <img style={{ height: '40%', width: '40%' }} class="mx-auto" src={facebook} alt='' />
                  <p style={{fontWeight:500}} className='text-1xl'>Facebook</p>
                </div>
              </div>
              <div className='flex flex-row justify-center p-5 items-center'>
                <p style={{fontSize:13, fontWeight:500}} className=' mx-1'>Don't have an account ? </p>
                <Link to='/Signup' style={{fontSize:16}} className=' text-xl text-blue-600'>Sign Up</Link>
              </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
