import React from 'react'
import scrollWhite from '../assets/scroll-white.svg'

function ScrollUp() {
    return (
        <div className='fixed hidden bottom-4 z-40 right-4'>
            <img className='w-10 sm:w-14 opacity-80 cursor-pointer hover:opacity-100 duration-300' src={scrollWhite} alt="" />
        </div>
    )
}

export default ScrollUp