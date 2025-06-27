import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import close from '../../assets/close.svg'
import githubb from '../../assets/githubb.svg'
import visit from '../../assets/visit.svg'
import hp1 from '../../assets/screenshots/hp1.webp'
import hp2 from '../../assets/screenshots/hp2.webp'
import hp3 from '../../assets/screenshots/hp3.webp'
import hp4 from '../../assets/screenshots/hp4.webp'
import hp5 from '../../assets/screenshots/hp5.webp'
import hp6 from '../../assets/screenshots/hp6.webp'
import hp7 from '../../assets/screenshots/hp7.webp'
import Carousel from '../Carousel';

const screenshots = [
    hp1,
    hp2,
    hp3,
    hp4,
    hp5,
    hp6,
    hp7,
];

function HomePaws({onClose}) {

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
            <motion.div
            className="fixed z-50 top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            >
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#fafafa] p-4 sm:p-6 max-w-2xl w-full h-auto text-center relative shadow-xl"
                >
                    <img src={close} onClick={onClose} className="absolute top-3 right-3 w-8 cursor-pointer p-1 border-2 border-transparent duration-150 hover:border-gray" />

                    <h2 className="text-4xl sm:text-5xl font-anton text-gray-800">HomePaws</h2>

                    <div className="relative my-3 min-h-[150px] flex justify-center items-center sm:min-h-[300px]">
                        <div className='my-3'>
                            <Carousel>
                                {screenshots.map((s) => (
                                    <img key={s} src={s} alt="" />
                                ))}
                            </Carousel>
                        </div> 
                    </div>

                    <p className="mt-1 text-sm sm:text-base font-poppins text-gray-600">
                    It is a pet adoption web app with built-in social features. Users can browse or post adoptable pets, filter by type, receive notifications, and interact through a community feed — all in one responsive platform.
                    </p>

                    <div className="flex justify-center gap-3 mt-7">
                        <a href='https://github.com/markies07/HomePaws' target='_blank' rel='noopener noreferrer' className='group flex bg-[#fafafa] border-2 border-blackho hover:brightness-105 duration-200 cursor-pointer py-1 px-3 gap-2 font-poppins justify-center text-sm text-gray font-medium'>
                            code
                            <img className='w-4 filter' src={githubb} alt="" />
                        </a>
                        <a href='https://paws-ae1eb.web.app/' target='_blank' rel='noopener noreferrer' className='group flex bg-gray border-2 hover:brightness-125 duration-200 border-gray cursor-pointer py-1 px-3 gap-2 font-poppins justify-center text-sm text-[#fafafa] font-medium'>
                            visit
                            <img className='w-[15px] filter' src={visit} alt="" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default HomePaws