import React, { useState } from 'react'
import homepaws from '../assets/homepaws.svg'
import homehub from '../assets/homehub.svg'
import tomodachi from '../assets/tomodachi.svg'
import shadow from '../assets/shadow.svg'
import view from '../assets/view.svg'
import HomePaws from '../components/projects/HomePaws'
import { AnimatePresence } from 'framer-motion'
import HomeHub from '../components/projects/HomeHub'
import Tomodachi from '../components/projects/Tomodachi'


function Works() {

    const [homepawsOpen, setHomepawsOpen] = useState(false);
    const [homehubOpen, setHomehubOpen] = useState(false);
    const [tomodachiOpen, setTomodachiOpen] = useState(false);

    return (
        <div id='works' className='relative text-gray bg-gray pt-16'>
            <div className='bg-white rounded-t-[3rem] py-8 px-3'>
                {/* TITLE */}
                <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>SELECTED WORKS</h1>

                {/* WORKS */}
                <div className='flex flex-col pt-10 items-center'>

                    {/* HOMEPAWS */}
                    <div className='w-[90%] lg:mr-40 xl:mr-52 relative sm:max-w-[30rem] md:max-w-[37rem] lg:max-w-[40rem] xl:max-w-[47rem] flex flex-col md:flex-row items-center'>
                        {/* MOCKUP */}
                        <div className='w-full md:pr-36'>
                            <img className='-mb-4 animate-[float_4s_ease-in-out_infinite] delay-0' src={homepaws} alt="" />
                            <img className='w-full' src={shadow} alt="" />
                        </div>
                        {/* TITLE */}
                        <div className='py-5 sm:pt-7 md:w-60 lg:w-72 -top-2 -right-2 lg:-right-11 lg:top-1 xl:top-5 xl:-right-6 md:absolute flex flex-col items-center text-center gap-4 md:text-start md:items-start'>
                            <h1 className='font-anton text-3xl xl:text-5xl'>HomePaws</h1>
                            <p className='font-light font-poppins text-sm lg:text-base'>It is a pet adoption platform with social features that connect pet owners and adopters in one community.</p>
                            <button onClick={() => setHomepawsOpen(true)} className='group flex bg-gray border-2 border-gray hover:bg-white hover:text-black duration-200 cursor-pointer py-1 px-3 gap-2 font-poppins justify-center text-sm text-[#fafafa] font-medium'>
                                view
                                <img className='w-4 group-hover:invert-100 filter' src={view} alt="" />
                            </button>
                        </div>
                    </div>

                    {/* HOMEHUB */}
                    <div className='w-[90%] lg:ml-40 xl:ml-52 relative sm:max-w-[30rem] md:max-w-[37rem] lg:max-w-[40rem] xl:max-w-[47rem] flex flex-col md:flex-row items-center mt-20'>
                        {/* MOCKUP */}
                        <div className='w-full md:pl-36'>
                            <img className='-mb-4 animate-[float_4.5s_ease-in-out_infinite] delay-300' src={homehub} alt="" />
                            <img className='w-full' src={shadow} alt="" />
                        </div>
                        {/* TITLE */}
                        <div className='py-5 sm:pt-7 md:w-60 lg:w-72 -top-2 -left-1 lg:-left-9 lg:top-1 xl:top-5 xl:-left-3 md:absolute flex flex-col items-center text-center gap-4 md:text-end md:items-end'>
                            <h1 className='font-anton text-3xl xl:text-5xl'>HomeHub</h1>
                            <p className='font-light font-poppins text-sm lg:text-base'>It is a platform that simplifies apartment management for landlords and tenants, from rent tracking to communication.</p>
                            <button onClick={() => setHomehubOpen(true)} className='group flex bg-gray border-2 border-gray hover:bg-white hover:text-black duration-200 cursor-pointer py-1 px-3 gap-2 font-poppins justify-center text-sm text-[#fafafa] font-medium'>
                                view
                                <img className='w-4 group-hover:invert-100 filter' src={view} alt="" />
                            </button>
                        </div>
                    </div>

                    {/* TOMODACHI */}
                    <div className='w-[90%] lg:mr-40 xl:mr-52 relative sm:max-w-[30rem] md:max-w-[37rem] lg:max-w-[40rem] xl:max-w-[47rem] flex flex-col md:flex-row items-center mt-20'>
                        {/* MOCKUP */}
                        <div className='w-full md:pr-36'>
                            <img className='-mb-4 animate-[float_5s_ease-in-out_infinite] delay-700' src={tomodachi} alt="" />
                            <img className='w-full' src={shadow} alt="" />
                        </div>
                        {/* TITLE */}
                        <div className='py-5 sm:pt-7 md:w-60 lg:w-72 -top-4 right-1 lg:-right-6 lg:-top-3 xl:top-3 xl:-right-0 md:absolute flex flex-col items-center text-center gap-4 md:text-start md:items-start'>
                            <h1 className='font-anton text-3xl xl:text-5xl'>Tomodachi</h1>
                            <p className='font-light font-poppins text-sm lg:text-base'>It is a job application platform designed for applicants seeking employment, offering easy access to job listings and a simple online application process.</p>
                            <button onClick={() => setTomodachiOpen(true)} className='group flex bg-gray border-2 border-gray hover:bg-white hover:text-black duration-200 cursor-pointer py-1 px-3 gap-2 font-poppins justify-center text-sm text-[#fafafa] font-medium'>
                                view
                                <img className='w-4 group-hover:invert-100 filter' src={view} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {homepawsOpen && (<HomePaws onClose={() => setHomepawsOpen(false)} />)}
                {homehubOpen && (<HomeHub onClose={() => setHomehubOpen(false)} />)}
                {tomodachiOpen && (<Tomodachi onClose={() => setTomodachiOpen(false)} />)}
            </AnimatePresence>
        </div>
    )
}

export default Works