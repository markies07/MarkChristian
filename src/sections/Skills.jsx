import React from 'react'
import frontend from '../assets/frontend.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import reactt from '../assets/reactt.svg'
import tailwind from '../assets/tailwind.svg'
import backend from '../assets/backend.svg'
import node from '../assets/node.svg'
import php from '../assets/php.svg'
import database from '../assets/database.svg'
import firebase from '../assets/firebase.svg'
import sql from '../assets/sql.svg'
import version from '../assets/version.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import responsive from '../assets/responsive.svg'
import figma from '../assets/figma.svg'
import uiux from '../assets/uiux.svg'
import framer from '../assets/framer.svg'
import dribbble from '../assets/dribbble.svg'

function Skills() {
    return (
        <div id='skills'  className='bg-white z-20 pt-16'>
            <div style={{ boxShadow: '0 -4px 15px rgba(0,0,0,0.2)' }} className='relative bg-gray rounded-t-[3rem] py-8 px-3  font-poppins text-white'>
                {/* TITLE */}
                <h1 className='text-title text-2xl lg:text-3xl font-bold text-center'>MY SKILLS</h1>

                {/* SKILLS */}
                <div className='px-5 py-10 flex flex-col items-center justify-center'>

                    {/* DESCRIPTION */}
                    <div className='w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] text-center mx-auto text-white pb-7'>
                        <p className='text-sm leading-6 sm:text-base font-poppins'>I specialize in full-stack web development with strong proficiency in both front-end and back-end technologies.</p>
                        <p className='text-sm leading-6 sm:text-base font-poppins pt-5'>From crafting responsive user interfaces to building robust server-side logic and managing databases, I utilize modern tools to deliver complete, user-friendly web solutions.</p>
                    </div>

                    <div className='grid grid-cols-1 w-full max sm:grid-cols-2 lg:grid-cols-3 max-w-[60rem] xl:max-w-[70rem] gap-5 sm:gap-4'>
                        {/* FRONTEND */}
                        <div className='border-[3px] w-full gap-3 rounded-sm border-white flex flex-col justify-center items-center py-6'>
                            <img className='w-20' src={frontend} alt="" />
                            
                            <p className='font-medium'>Front-end Development</p>

                            <div className='flex gap-3 items-center'>
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-6' src={html} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 -bottom-4 text-xs left-0 w-full flex justify-center'>HTML</p>
                                </div> 
                                
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={css} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>CSS</p>
                                </div> 

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-7' src={javascript} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-17px] text-xs left-0 w-full flex justify-center'>JavaScript</p>
                                </div> 

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={reactt} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>React.js</p>
                                </div> 
                                
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={tailwind} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-14px] text-xs left-0 w-full flex justify-center'>TailwindCSS</p>
                                </div> 
                            </div>
                        </div>

                        {/* BACKEND */}
                        <div className='border-[3px] w-full gap-3 rounded-sm border-white flex flex-col justify-center items-center py-6'>
                            <img className='w-20' src={backend} alt="" />
                            
                            <p className='font-medium'>Back-end Development</p>

                            <div className='flex gap-3 items-center'>
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-7' src={node} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-17px] text-xs left-0 w-full flex justify-center'>Node.js</p>
                                </div>

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-10' src={php} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-20px] text-xs left-0 w-full flex justify-center'>PHP</p>
                                </div>
                                
                            </div>
                        </div>

                        {/* DATABASE */}
                        <div className='border-[3px] w-full gap-3 rounded-sm border-white flex flex-col justify-center items-center py-6'>
                            <img className='w-20' src={database} alt="" />
                            
                            <p className='font-medium'>Database Management</p>

                            <div className='flex gap-3 items-center'>
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-7' src={firebase} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-17px] text-xs left-0 w-full flex justify-center'>Firebase</p>
                                </div>
                                
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-9' src={sql} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>MySQL</p>
                                </div>
                                
                            </div>
                        </div>

                        {/* VERSION */}
                        <div className='border-[3px] w-full gap-3 rounded-sm border-white flex flex-col justify-center items-center py-6'>
                            <img className='w-20' src={version} alt="" />
                            
                            <p className='font-medium'>Version Control</p>

                            <div className='flex gap-3 items-center'>
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-7' src={git} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-17px] text-xs left-0 w-full flex justify-center'>Git</p>
                                </div>

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-7' src={github} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-17px] text-xs left-0 w-full flex justify-center'>GitHub</p>
                                </div>
                            </div>
                        </div>

                        {/* RESPONSIVE */}
                        <div className='border-[3px] w-full gap-3 rounded-sm border-white flex flex-col justify-center items-center py-6'>
                            <img className='w-20' src={responsive} alt="" />
                            
                            <p className='font-medium'>Responsive Design</p>

                            <div className='flex gap-3 items-center'>
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={figma} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>Figma</p>
                                </div>
                                
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={css} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>CSS</p>
                                </div> 

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={tailwind} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-14px] text-xs left-0 w-full flex justify-center'>TailwindCSS</p>
                                </div> 
                            </div>
                        </div>

                        {/* UI/UX */}
                        <div className='border-[3px] w-full gap-3 rounded-sm border-white flex flex-col justify-center items-center py-6'>
                            <img className='w-[5.5rem]' src={uiux} alt="" />
                            
                            <p className='font-medium'>UI/UX Design</p>

                            <div className='flex gap-3 items-center'>
                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={figma} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>Figma</p>
                                </div>

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-8' src={framer} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-15px] text-xs left-0 w-full flex justify-center'>Framer</p>
                                </div>

                                <div className='relative group hover:scale-120 duration-300 cursor-grab'>
                                    <img className='w-7' src={dribbble} alt="" />
                                    <p className='absolute group-hover:opacity-100 font-medium pointer-events-none opacity-0 duration-300 bottom-[-17px] text-xs left-0 w-full flex justify-center'>Dribbble</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        

        </div>
    )
}

export default Skills