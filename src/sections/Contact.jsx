import React from 'react'

function Contact() {
    return (
        <div id='skills'  className='bg-white z-20 pt-16'>
            <div style={{ boxShadow: '0 -4px 15px rgba(0,0,0,0.2)' }} className='relative bg-gray rounded-t-[3rem] pt-8 px-3  font-poppins text-white'>
                {/* TITLE */}
                <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>CONTACT ME</h1>

                <div className='flex flex-col sm:flex-row lg:gap-5 xl:gap-20 items-center py-10 justify-center'>

                    {/* MESSAGE ME */}
                    <button className='w-32 xl:w-36 xl:h-36 hover:bg-gray md:mb-24 sm:order-2 hover:text-white duration-300 cursor-pointer border-2 border-white h-32 flex items-center justify-center font-anton rounded-full bg-white text-black'>
                        <p>SEND A MESSAGE</p>
                    </button>

                    {/* LETS WORK */}
                    <div className='font-anton flex flex-col sm:order-1 py-10'>
                        <h1 className='text-center sm:text-start text-[5.5rem] sm:text-[8rem] xl:text-[10rem] xl:leading-[9rem] sm:leading-[7.3rem] leading-[5.2rem]'>LET'S</h1>
                        <div className='relative'>
                            <h1 className='text-center sm:text-start text-[5.5rem] sm:text-[8rem] xl:text-[10rem] xl:leading-[9rem] sm:leading-[7.3rem] leading-[5.2rem]'>WORK</h1>
                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center sm:justify-start'>
                                <p className='bg-title px-3 sm:px-10 md:px-12 xl:px-20 xl:text-lg font-poppins font-extrabold text-center text-black'>AVAILABLE FOR WORK</p>
                            </div>
                        </div>
                        <h1 className='text-center sm:text-start text-[5.5rem] sm:text-[8rem] xl:text-[10rem] xl:leading-[9rem] sm:leading-[7.3rem] leading-[5.2rem]'>TOGETHER</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact