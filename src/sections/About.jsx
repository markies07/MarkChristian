import React from 'react'
import pics from '../assets/pics.svg'
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'
import TiltCard from '../components/TiltCard'

function About() {
    return (
        <div id='about' className='relative z-10  mt-[100vh] text-gray bg-transparent pt-16'>
            <div className='bg-white rounded-t-[3rem] py-8 px-3'>
                {/* TITLE */}
                <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>ABOUT ME</h1>

                {/* INTRODUCTION */}
                <div className='py-5 relative font-anton flex flex-col justify-center'>
                    <h1 className='text-center text-gray text-[24vw] md:text-[20vw] lg:text-[17vw] xl:text-[14vw] 2xl:text-[12vw] text leading-[0.90] pt-3'>MARK</h1>
                    <h1 className='text-center text-gray text-[24vw] md:text-[20vw] lg:text-[17vw] xl:text-[14vw] 2xl:text-[12vw] text leading-[0.90] pb-[33vw] sm:pb-[32vw] lg:pb-[25vw] xl:pb-[22vw] 2xl:pb-[19vw]'>CHRISTIAN</h1>
                    
                    {/* PICTURES */}
                    <div className='absolute bottom-[22vw] md:bottom-[19vw] lg:bottom-[15vw] xl:bottom-[13vw] 2xl:bottom-[11vw] w-full flex justify-center'>
                        <div className='relative flex justify-center'>
                           <TiltCard>
                                <div className="relative w-[30vw] z-10 md:w-[28vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[18vw] -rotate-12 -top-10 left-5">
                                    <img src={img1} alt="" className='w-full h-auto rounded-md' />
                                </div>
                            </TiltCard>
                            <TiltCard>
                                <div className="relative w-[30vw] z-30 md:w-[28vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[18vw]">
                                    <img className='w-[30vw] lg:w-[25vw] z-20 xl:w-[20vw] 2xl:w-[18vw]' src={img2} alt="" />
                                </div>
                            </TiltCard>
                            <TiltCard>
                                <div className="relative w-[30vw] z-10 md:w-[28vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[18vw] -top-10 rotate-12 right-5">
                                    <img className='w-full h-auto rounded-md' src={img3} alt="" />
                                </div>
                            </TiltCard>
                        </div>
                    </div>

                    <h1 className='text-center text-title text-[24vw] md:text-[20vw] lg:text-[17vw] xl:text-[14vw] 2xl:text-[12vw] leading-[0.85]'>NAVAL</h1>

                </div>

                {/* DESCRIPTION */}
                <div className='w-[95%] md:w-[80%] lg:w-[60%] text-center mx-auto pt-5'>
                    <p className='text-sm leading-6 sm:text-base font-poppins'>I'm a full-stack web developer with experience in both front-end and back-end development. I build clean, responsive, and user-focused web applications with a strong emphasis on functionality and design. </p>
                    <p className='text-sm leading-6 sm:text-base font-poppins pt-5'>I'm passionate about creating efficient solutions, exploring innovative technologies, and continuously growing as a developer through real-world challenges.</p>
                </div>
            </div>
        </div>
    )
}

export default About