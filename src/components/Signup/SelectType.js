import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import student from '../../assets/student.png'
import instructor from '../../assets/Instructor.png'

export default function SelectType() {
    return (
        <div className='flex justify-center items-center bg-purple-300 h-screen w-screen'>
            <div style={{ height: '90%', width: '70%', backgroundColor: '#fff', borderRadius: 4, elevation: 4, shadowColor: '#fff', }}>
                <div class=" flex justify-end mt-7 mr-10">
                    <Link to='/' className='text-3xl text-black'>&#10006;</Link>
                </div>
                <div class="flex justify-end mt-4">
                    <img class="mx-auto" src={Logo} alt='' />
                </div>
                <p className=' text-center p-7 ml-8 text-2xl font-medium'>Sign Up as</p>
                <div className='flex justify-center items-center flex-row'>
                    <Link to='/Signup' class="flex mx-10 mt-4 hover:opacity-75">
                        <img style={{ height: 200, width: 200 }} class="mx-auto" src={student} alt='' />
                    </Link>

                    <Link to='/Signup' class="flex mx-10 mt-4 hover:opacity-75">
                        <img style={{ height: 200, width: 200 }} class="mx-auto" src={instructor} alt='' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
