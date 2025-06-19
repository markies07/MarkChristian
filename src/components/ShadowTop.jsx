import React from 'react'
import shadow from '../assets/shadow-top.svg'

function ShadowTop() {
    return (
        <div className='z-10 fixed top-0 left-0 w-full object-contain'>
            <img className='w-full' src={shadow} alt="" />
        </div>
    )
}

export default ShadowTop