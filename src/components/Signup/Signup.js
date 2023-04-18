import React from 'react'
import { Link } from 'react-router-dom'
import SingupBackImage from '../../assets/signUpBack.png'
import Logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import facebook from '../../assets/signUpFacebook.png'

export default function Signup() {


    return (
        <div>
            <div className="flex flex-row h-screen bg-purple-500">
                <div className="flex">
                    <img src={SingupBackImage} alt='' />
                </div>
                <div className="flex flex-col h-screen justify-center bg-white relative" style={{ borderTopLeftRadius: 40, borderBottomLeftRadius: 40, width: '80%' }}>
                    <div class=" flex justify-end mr-48">
                        <Link to='/' className='text-xl text-black'>&#10006;</Link>
                    </div>
                    <div class="flex justify-end mt-4">
                        <img style={{ height: "80%", width: '10%' }} class="mx-auto" src={Logo} alt='' />
                    </div>
                    <p className=' text-center p-7 ml-8 text-2xl font-medium'>Sign Up</p>

                    <div class="flex flex-col ml-6 items-center">
                        <div class="flex flex-col w-1/2 mt-2 sm:grid-cols-2 mx-auto">
                            <input type="text" class=" my-2 w-full bg-gray-200 rounded-md py-2 px-3" placeholder="Enter your name" />
                            <input type="email" class="my-2 w-full bg-gray-200 rounded-md py-2 px-3" placeholder="Enter your email" />
                            <input type="password" class="my-2 w-full bg-gray-200 rounded-md py-2 px-3" placeholder="Enter your password" />

                            <Link to="/" class="bg-purple-500 flex justify-center items-center hover:bg-purple-700 text-white font-bold my-3 py-3 px-4 rounded-full">
                                Signup
                            </Link>

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
                                <p style={{fontSize:13, fontWeight:500}} className=' mx-1'>Already have an account ? </p>
                                <Link to='/login' style={{fontSize:16}} className=' text-xl text-blue-600'> Login</Link>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
