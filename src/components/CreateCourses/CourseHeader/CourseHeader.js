import React, { } from 'react';
import backArrow from '../../../assets/arrow-narrow-left.png'

const CourseHeader = () => {



    return (
        <div className=' justify-center justify-items-center'>

            <div className='flex flex-row mt-10'>
                <div>
                    <img className='' src={backArrow} alt='' />
                    <p className=' text-lg text-black ml-3 font-medium'> New Course</p>
                </div>
                <div>
                    <button className='h-10 w-20 shadow-md border-y-2 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-black text-base font-normal'>Save As Draft</p>
                    </button>
                    <button className='h-10 w-20 ml-1 bg-purple-500 hover:opacity-50 border-x-2 rounded-sm'>
                        <p className='text-white text-base font-normal'>Publish</p>

                    </button>
                </div>
            </div>

        </div>
    )
}

export default CourseHeader
