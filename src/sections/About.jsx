import React from 'react'
import pics from '../assets/pics.svg'

function About() {
    return (
        <div className='relative z-10 bg-white rounded-t-4xl py-8 px-3 mt-[100vh] text-gray'>

            {/* TITLE */}
            <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>ABOUT ME</h1>

            {/* INTRODUCTION */}
            <div className='py-5 relative font-anton flex flex-col justify-center'>
                <h1 className='text-center text-gray text-[24vw] lg:text-[17vw] xl:text-[14vw] 2xl:text-[12vw] text leading-[0.90] pt-3'>MARK</h1>
                <h1 className='text-center text-gray text-[24vw] lg:text-[17vw] xl:text-[14vw] 2xl:text-[12vw] text leading-[0.90] pb-[33vw] sm:pb-[35vw] lg:pb-[25vw] xl:pb-[22vw] 2xl:pb-[19vw]'>CHRISTIAN</h1>
                {/* PICTURES */}
                <div className='absolute bottom-[24vw] lg:bottom-[15vw] xl:bottom-[13vw] 2xl:bottom-[11vw] w-full flex justify-center'>
                    <img className='w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]' src={pics} alt="" />
                </div>

                <h1 className='text-center text-title text-[24vw] lg:text-[17vw] xl:text-[14vw] 2xl:text-[12vw] leading-[0.85]'>NAVAL</h1>

            </div>

            {/* DESCRIPTION */}
            <div className='w-[95%] md:w-[80%] lg:w-[60%] text-center mx-auto pt-5 pb-14 xl:pb-20'>
                <p className='text-sm leading-6 sm:text-base font-poppins'>I'm a full-stack web developer with experience in both front-end and back-end development. I build clean, responsive, and user-focused web applications with a strong emphasis on functionality and design. </p>
                <p className='text-sm leading-6 sm:text-base font-poppins pt-5'>I'm passionate about creating efficient solutions, exploring innovative technologies, and continuously growing as a developer through real-world challenges.</p>
            </div>

        </div>
    )
}

export default About