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
                <a href='https://github.com/markies07' target='_blank' rel='noopener noreferrer' className='cursor-pointer px-2 py-1 hover:underline'>GITHUB</a>
                <a href='https://www.facebook.com/mark.naval07/' target='_blank' rel='noopener noreferrer' className='cursor-pointer px-2 py-1 hover:underline'>FACEBOOK</a>
                <a href='https://www.tiktok.com/@.markdev?_t=ZS-8xYdf8HBtiK&_r=1' target='_blank' rel='noopener noreferrer' className='cursor-pointer px-2 py-1 hover:underline'>TIKTOK</a>
                <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' rel='noopener noreferrer' className='cursor-pointer px-2 py-1 hover:underline'>LINKEDIN</a>
            </div>

        </div>
    )
}

export default Footer