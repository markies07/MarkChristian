import React from 'react'
import pics from '../assets/pics.svg'

function About() {
    return (
        <div className='relative z-10 bg-white rounded-t-4xl py-8 px-3 mt-[100vh] text-gray'>

            {/* TITLE */}
            <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>ABOUT ME</h1>

            {/* INTRODUCTION */}
            <div className='py-5 relative font-impact flex flex-col justify-center'>
                <h1 className='text-center text-gray text-[20vw] lg:text-[15vw] xl:text-[12vw] 2xl:text-[10vw] text leading-[0.85] pt-3'>MARK</h1>
                <h1 className='text-center text-gray text-[20vw] lg:text-[15vw] xl:text-[12vw] 2xl:text-[10vw] text leading-[0.85] pb-[33vw] sm:pb-[35vw] lg:pb-[25vw] xl:pb-[21vw] 2xl:pb-[18vw]'>CHRISTIAN</h1>
                {/* PICTURES */}
                <div className='absolute bottom-[20vw] lg:bottom-[13vw] xl:bottom-[11vw] 2xl:bottom-[9vw] w-full flex justify-center'>
                    <img className='w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]' src={pics} alt="" />
                </div>

                <h1 className='text-center text-title text-[20vw] lg:text-[15vw] xl:text-[12vw] 2xl:text-[10vw] leading-[0.85]'>NAVAL</h1>

            </div>

            {/* DESCRIPTION */}
            <div className='w-[90%] md:w-[80%] lg:w-[70%] text-center mx-auto pt-5 pb-14 xl:pb-20'>
                <p className='text-sm leading-6 sm:text-base font-poppins'>I'm a full-stack web developer with experience in both front-end and back-end development. I build clean, responsive, and user-focused web applications with a strong emphasis on functionality and design. I'm passionate about creating efficient solutions and continuously growing as a developer.</p>
            </div>

        </div>
    )
}

export default About