import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import headerImage from '../../assets/headerImage.png'
import devCat from '../../assets/devCat.png'
import desCat from '../../assets/desCat.png'
import bussCat from '../../assets/bussCat.png'
import itCat from '../../assets/ItCat.png'
import marCat from '../../assets/markCat.png'
import phCat from '../../assets/phCat.png'
import courseCard from '../../assets/courseCard1.png'
import courseCard2 from '../../assets/courseCard2.png'
import career from '../../assets/career.png'
import skill from '../../assets/skill.png'
import experts from '../../assets/experts.png'
import messageicon from '../../assets/messageIcon.png'
import callLogo from '../../assets/call.png'
import messagelogo from '../../assets/message.png'
import instagramlogo from '../../assets/instagram.png'
import linkedinLogo from '../../assets/linkedIn.png'
import facebookLogo from '../../assets/facebook.png'
import Line from '../../assets/landingPageLine.png'
import rupee from '../../assets/rupee.png'
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const matches = useMediaQuery('(max-width: 600px)');
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    const imageSize = matches ? '70px' : '160px';
    // const isWide = useMediaQuery('(min-width: 768px)');


    return (
        <div >
            <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2">
                <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <div className="flex items-center flex-shrink-0 text-purple-800 mr-16">
                        <img src={Logo} alt='' />
                    </div>
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none "
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <div className="block lg:hidden">
                        <button
                            id="nav"
                            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
                            onClick={toggleMenu}
                        >
                            <span>
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${showMenu ? 'block' : 'hidden'}`}>
                    <div className="text-md font-bold text-blue-700 lg:flex-grow">
                        {window.innerWidth < 1024 ? (
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                        ) : null}
                        {window.innerWidth < 1024 ? (
                            <a
                                href="#responsive-header"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                onClick={toggleMenu}
                            >
                                About Us
                            </a>
                        ) : (
                            <>
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                >
                                    Home
                                </a>
                                <a
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-black px-4 py-2 rounded"
                                >
                                    About Us
                                </a>
                            </>
                        )}
                    </div>
                    <div className="relative mx-auto text-gray-600 lg:block hidden">
                        <Link
                            to="/login"
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold mr-8 py-2 px-4 rounded"
                        >
                            Login
                        </Link>


                        <Link to="/SelectType" className="bg-purple-500 hover:bg-purple-700 text-white font-bold mr-8 py-2 px-4 rounded">
                            Signup
                        </Link>


                    </div>
                </div>

            </nav>

            <div class="w-full">
                <img src={headerImage} alt='' class="w-screen" />
            </div>
            <div class='p-10  text-center'>
                <h3 class="font-bold text-lg text-3xl mt-10 leading-20">Choose your favourite Course from our top categories</h3>
            </div>


            <div className="flex flex-col items-center">
                <div className='flex items-end p-5'>
                    <p class="text-purple-600/100 underline ">View all</p>
                </div>
                <div className='flex'>
                    <img src={devCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={itCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={desCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={bussCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={marCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                    <img src={phCat} alt='' style={{ width: imageSize, margin: '0 5px' }} />
                </div>
            </div>

            <div class="flex flex-col justify-center h-full bg-purple-300 bg-opacity-50 my-20">
                <div class='p-10'>
                    <p class="text-center font-bold text-3xl text-lg">Get choice of your course</p>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-full lg:max-w-sm">
                        <select className=" w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600">
                            <option>Design</option>
                            <option>Development</option>
                            <option>It 7 Software</option>
                            <option>Bussiness</option>
                            <option>Marketing</option>
                            <option>Photography</option>
                        </select>
                    </div>
                </div>


                <div className={`flex flex-row justify-center ${isSmallScreen ? 'flex-wrap' : ''} mb-32`}>
                    <div class="flex flex-col w-72 justify-center mt-20 mx-5 rounded bg-white overflow-hidden shadow-lg">
                        <img class="h-36 w-72 p-4" src={courseCard} alt="Sunset in the mountains"></img>
                        <div class="">
                            <p class=" text-start ml-4 font-bold">User Experience (UX) :</p>
                            <p class=" text-start ml-4 font-bold">For beginners</p>
                            <p class=" text-start ml-4 font-light">course start Date</p>
                            <p class=" text-start ml-4 font-light">4.5 ⭐⭐⭐⭐</p>

                            <div class="flex  flex-row">

                                <div class=" mx-4">
                                    <img style={{ height: 20, width: 20, marginTop: 8 }} src={rupee} alt='' class="" />
                                </div>
                                <p class=" text-start mt-2 font-light"> 3999</p>
                                <button class="bg-purple-500 ml-36 mb-8 p-1 hover:bg-purple-700 text-white rounded">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col w-72 justify-center mt-20 mx-5 rounded bg-white overflow-hidden shadow-lg">
                        <img class="h-36 w-72 p-4" src={courseCard2} alt="Sunset in the mountains"></img>
                        <div class="">
                            <p class=" text-start ml-4 font-bold">User Experience (UX) :</p>
                            <p class=" text-start ml-4 font-bold">For beginners</p>
                            <p class=" text-start ml-4 font-light">course start Date</p>
                            <p class=" text-start ml-4 font-light">4.5 ⭐⭐⭐⭐</p>

                            <div class="flex  flex-row">

                                <div class=" mx-4">
                                    <img style={{ height: 20, width: 20, marginTop: 8 }} src={rupee} alt='' class="" />
                                </div>
                                <p class=" text-start mt-2 font-light"> 3999</p>
                                <button class="bg-purple-500 ml-36 mb-8 p-1 hover:bg-purple-700 text-white rounded">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col w-72 justify-center mt-20  mx-5 rounded bg-white overflow-hidden shadow-lg">
                        <img class="h-36 w-72 p-4" src={courseCard} alt="Sunset in the mountains"></img>
                        <div class="">
                            <p class=" text-start ml-4 font-bold">User Experience (UX) :</p>
                            <p class=" text-start ml-4 font-bold">For beginners</p>
                            <p class=" text-start ml-4 font-light">course start Date</p>
                            <p class=" text-start ml-4 font-light">4.5 ⭐⭐⭐⭐</p>

                            <div class="flex  flex-row">

                                <div class=" mx-4">
                                    <img style={{ height: 20, width: 20, marginTop: 8 }} src={rupee} alt='' class="" />
                                </div>
                                <p class=" text-start mt-2 font-light"> 3999</p>
                                <button class="bg-purple-500 ml-36 mb-8 p-1 hover:bg-purple-700 text-white rounded">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <p class=" text-center text-3xl p-5 font-bold text-lg">We will help you learn</p>

            <div class="flex flex-col">
                <p class="text-3xl ml-28 p-10 font-bold text-lg">01. Tune Your Skill Without Breakage </p>

                <div class="flex flex-row items-center">
                    <div class="flex ml-40">
                        <img src={Line} alt="Line" />
                    </div>

                    <div class="flex-1 ml-10">
                        <p class="text-2xl">Find what you are interested to learn</p>
                        <p class="text-2xl ">online and choose what exactly best for</p>
                        <p class="text-2xl ">you that you really passionate.</p>
                    </div>
                    <div class="flex mr-60">
                        <img src={career} alt='' />
                    </div>
                </div>
            </div>


            <div class="flex flex-col">
                <p class="text-3xl ml-28 p-10 font-bold text-lg">02. Career Advancement Opportunity</p>

                <div class="flex flex-row items-center">
                    <div class="flex ml-40">
                        <img src={Line} alt="Line" />
                    </div>
                    <div class="flex-1 ml-10">
                        <p class=" text-2xl ">  Guidance from experts provide insights into</p>
                        <p class=" text-2xl ">the nature of thinking and problem solving.</p>
                        <p class=" text-2xl ">They can provide unique perspective.</p>
                    </div>
                    <div class="flex mr-60">
                        <img src={skill} alt='' />
                    </div>
                </div>
            </div>


            <div class="flex flex-col">
                <p class="text-3xl ml-28 p-10 font-bold text-lg">03. Learn From Experts </p>

                <div class="flex flex-row items-center">
                    <div class="flex ml-40">
                        <img src={Line} alt="Line" />
                    </div>
                    <div class="flex-1 ml-10">
                        <p class=" text-2xl "> Master your skill on your own schedule,</p>
                        <p class=" text-2xl "> which can be clearly seen on your resume</p>
                        <p class=" text-2xl ">with valuable certificate.</p>

                    </div>
                    <div class="flex mr-60">
                        <img src={experts} alt='' />
                    </div>
                </div>
            </div>


            <div class="flex ml-44 p-5">

                <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold mr-8 py-2 px-4 rounded">
                    Login
                </button>

                <button class="bg-white border-solid hover:bg-purple-700  text-purple-500 font-bold mr-8 py-2 px-4 rounded">
                    Signup
                </button>

            </div>

            <div class="flex flex-col justify-center h-full mt-10 bg-purple-500 bg-opacity-50">

                <div class="flex flex-row items-center">

                    <div class="flex-1">


                        <p class=" text-left text-3xl mt-20 font-bold ml-48" > Write to us</p>


                        <div class="w-full max-w-sm mt-10 ml-40">
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                        Name
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="" />
                                </div>
                            </div>


                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                        Email
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="Email" type="Email" placeholder="" />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right md:mb-0 pr-4" htmlFor="inline-Message">
                                        Message
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 h-36 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-Message" type="text" defaultValue="" />
                                </div>
                            </div>

                            <div class="md:flex mb-20 md:items-center">
                                <div class="md:w-1/3"></div>
                                <div class="md:w-2/3">
                                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex mx-36">
                        <img src={messageicon} alt='' />
                    </div>

                </div>
            </div>


            {/* Main div of Black footer */}

            <div className="flex flex-col justify-center h-96 bg-black bg-opacity-80">
                <div className="flex flex-col md:flex-row">

                    {/* 1st Logo in footer */}

                    <div className=" mx-28  md:my-0">
                        <img src={Logo} alt='' />
                    </div>

                    {/* 2nd Column in footer */}

                    <div className={`flex flex-col md:flex-col mx-20 ${matches ? 'my-5' : 'my-3'}`}>
                        <p className="flex text-white md:my-0 md:mx-5">About Us</p>
                        <p className="flex text-white mt-5 md:mx-5">Career</p>
                    </div>

                    {/* 3rd column in footer */}

                    <div className={`flex flex-col md:flex-col mx-20 ${matches ? 'my-5' : 'my-3'}`}>
                        <p className=" text-white md:my-0 md:mx-5">Term &amp; conditions</p>
                        <p className=" text-white md:my-4 md:mx-5">Privacy policy</p>
                        <p className="text-white md:mx-5">Help and Support</p>
                    </div>



                    {/* Conact us column in footer */}

                    <div className={`flex flex-col md:flex-col mx-20 ${matches ? 'my-5' : 'my-3'}`}>
                        <p className=" text-white md:my-2 md:mx-5">Contact Us</p>
                        <div className="flex flex-row my-3 md:my-3 md:mx-5">
                            <div className="flex mx-1">
                                <img src={callLogo} alt='' />
                            </div>
                            <p className="" style={{ color: '#fff' }}>+91 987654321</p>
                        </div>
                        <div className="flex flex-row my-3 md:my-2 md:mx-5">
                            <div className="flex mx-1">
                                <img src={messagelogo} alt='' />
                            </div>
                            <p className="" style={{ color: '#fff' }}>lms.info@gmail.com</p>
                        </div>
                        <div className="flex flex-row my-3 md:my-5 md:mx-5">
                            <div className="flex mx-3">
                                <img src={facebookLogo} alt='' />
                            </div>
                            <div className="flex mx-3">
                                <img src={linkedinLogo} alt='' />
                            </div>
                            <div className="flex mx-1">
                                <img src={instagramlogo} alt='' />
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Navbar
