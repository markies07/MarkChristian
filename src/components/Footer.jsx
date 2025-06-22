import React from 'react'
import sign from '../assets/sign.svg'

function Footer() {
    return (
        <div className='bg-title py-2 flex flex-col items-center'>

            {/* NAME */}
            <div className='relative py-10'>
                <h1 className='font-anton text-white text-5xl md:text-7xl'>MARK CHRISTIAN</h1>
                <div className='absolute top-0 left-0 w-full flex justify-center items-center'>
                    <img className='w-36 md:w-44' src={sign} alt="" />
                </div>
            </div>

            {/* SOCIALS */}
            <div className='flex font-poppins text-xs font-medium justify-between w-full px-10 pt-3 max-w-[50rem]'>
                <p className='cursor-pointer px-2 py-1 hover:underline'>GITHUB</p>
                <p className='cursor-pointer px-2 py-1 hover:underline'>FACEBOOK</p>
                <p className='cursor-pointer px-2 py-1 hover:underline'>TIKTOK</p>
                <p className='cursor-pointer px-2 py-1 hover:underline'>LINKEDIN</p>
            </div>

        </div>
    )
}

export default Footer