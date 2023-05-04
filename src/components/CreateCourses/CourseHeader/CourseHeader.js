import React, { } from 'react';
import backArrow from '../../../assets/arrow-narrow-left.png'
import { Link, } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import CourseLanding from '../CourseLanding/CourseLanding';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CourseHeader = ({ handleMenuClick }, props) => {

    const buttonClick = () => {
        handleMenuClick("CourseLanding");
    };
    console.log('props---->', props)

    return (

        <div className=' justify-center justify-items-center'>

            <div className='flex flex-row justify-between items-center mt-10' style={{ width: '130%' }}>
                <Link to='/HomePage' className='flex items-center'>
                    <img className='' src={backArrow} alt='' />
                    <p className='ml-3 text-lg font-medium text-black'>New Course</p>
                </Link>
                <div className='flex items-center'>
                    <button className='h-10 w-32 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-black text-base font-normal'>Save As Draft</p>
                    </button>
                    <button className='h-10 w-32 shadow-md ml-1 bg-purple-500 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-white text-base font-normal'>Publish</p>
                    </button>
                </div>
            </div>

            <div className='mt-10'>
                <p className='text-black text-2xl font-bold'>Course Header</p>
            </div>

            <div className='mt-10'>
                <p className='text-black text-lg font-medium'>
                    Choose a category<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className='mt-5'>
                <Menu as="div" className="relative inline-block text-left " style={{ width: '130%' }}>
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Select a category
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Design
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            IT & Software
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Development
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Marketing
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Bussiness
                                        </p>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Photography
                                        </p>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>


            <div className='mt-5'>
                <p className='text-black text-lg font-medium'>
                    Enter a Title<span className='text-red-500 ml-1 text-xl'>*</span>
                </p>
            </div>

            <div className='mt-5'>
                <input
                    className="p-2.5 outline-none appearance-none text-gray-500 bg-white border rounded-md shadow-sm focus:border-gray-600"
                    style={{ width: '130%' }}
                    placeholder="Type your text here (maximum 60 words)"
                // maxLength={100}
                // rows={5}
                ></input>
            </div>

            <div className='mt-10 mb-28 justify-end items-end'>
                <button
                    onClick={buttonClick}
                    className='h-10 w-32 shadow-md bg-slate-900 hover:opacity-50 border-x-2 rounded-md'>
                    <p className='text-white text-base font-normal'>Save & Next</p>
                </button>
            </div>
        </div>
    )
}

export default CourseHeader
