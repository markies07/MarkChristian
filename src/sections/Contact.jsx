import React, { useState } from 'react'
import Message from '../components/Message';
import { AnimatePresence } from 'framer-motion';


function Contact() {
    const [messageOpen, setMessageOpen] = useState(false);

    return (
        <div id='contact'  className='bg-white z-20 pt-16'>
            <div style={{ boxShadow: '0 -4px 15px rgba(0,0,0,0.2)' }} className='relative bg-gray rounded-t-[3rem] pt-8 px-3 sm:pb-10 font-poppins text-white'>
                {/* TITLE */}
                <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>CONTACT ME</h1>

                <div className='flex flex-col sm:flex-row lg:gap-5 xl:gap-20 items-center py-10 justify-center'>

                    {/* MESSAGE ME */}
                    <button onClick={() => setMessageOpen(true)} className='w-32 xl:w-36 xl:h-36 hover:bg-gray md:mb-24 sm:order-2 hover:text-white duration-300 cursor-pointer border-2 border-white h-32 flex items-center justify-center font-anton rounded-full bg-white text-black'>
                        <p>SEND A MESSAGE</p>
                    </button>

                    {/* LETS WORK */}
                    <div className='font-anton flex flex-col sm:order-1 pt-10'>
                        <h1 className='text-center sm:text-start text-[5.5rem] sm:text-[8rem] xl:text-[10rem] xl:leading-[9rem] sm:leading-[7.3rem] leading-[5.2rem]'>LET'S</h1>

                        <div className='relative'>
                            <h1 className='text-center sm:text-start text-[5.5rem] sm:text-[8rem] xl:text-[10rem] xl:leading-[9rem] sm:leading-[7.3rem] leading-[5.2rem]'>WORK</h1>

                            {/* Scrolling Bar */}
                            <div className='absolute top-0 flex left-0 w-full h-full items-center justify-center sm:justify-start'>
                                <div className='bg-title w-52 sm:w-[17rem] lg:w-[21.5rem] flex overflow-hidden'>
                                    <div className='flex animate-infinite-scroll whitespace-nowrap'>
                                    {/* Repeat the string twice to simulate infinite scroll */}
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    <p className='pr-2 xl:text-lg font-poppins font-extrabold text-black'>
                                        {Array(10).fill('AVAILABLE FOR WORK •  ').join('')}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className='text-center sm:text-start text-[5.5rem] sm:text-[8rem] xl:text-[10rem] xl:leading-[9rem] sm:leading-[7.3rem] leading-[5.2rem]'>TOGETHER</h1>
                    </div>

                </div>
            </div>
            <AnimatePresence>
                {messageOpen && <Message onClose={() => setMessageOpen(false)} />}
            </AnimatePresence>
        </div>
    )
}

export default Contact