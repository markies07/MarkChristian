import React, { useState, useEffect } from 'react'
import light from '../assets/light.svg'
import hello from '../assets/hello.svg'
import arrow from '../assets/arrow.svg'

function FrontPage() {
    const [isHovered, setIsHovered] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [scrollScale, setScrollScale] = useState(1);
    const [scrollBlur, setScrollBlur] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Page load animation
        const loadTimer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // Small delay to ensure DOM is ready

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Smooth fade timing - starts early, ends gracefully
            const fadeStart = windowHeight * 0.05; // Start fading at 5% scroll
            const fadeEnd = windowHeight * 0.7;    // Complete fade at 70% scroll
            
            if (scrollY <= fadeStart) {
                setScrollOpacity(1);
                setScrollScale(1);
                setScrollBlur(0);
            } else if (scrollY >= fadeEnd) {
                setScrollOpacity(0);
                setScrollScale(0.8);
                setScrollBlur(10);
            } else {
                const fadeRange = fadeEnd - fadeStart;
                const fadeProgress = (scrollY - fadeStart) / fadeRange;
                
                // Easing function for smoother transition (ease-out cubic)
                const easeOut = 1 - Math.pow(1 - fadeProgress, 3);
                
                // Smooth opacity fade
                const newOpacity = 1 - easeOut;
                
                // Subtle scale effect (shrinks slightly as it fades)
                const newScale = 1 - (easeOut * 0.2);
                
                // Gentle blur effect
                const newBlur = easeOut * 8;
                
                setScrollOpacity(newOpacity);
                setScrollScale(newScale);
                setScrollBlur(newBlur);
            }
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll(); // Initial call
        window.addEventListener('scroll', throttledScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            clearTimeout(loadTimer);
        };
    }, []);

    return (
        <div 
            className="h-screen group w-full fixed top-0 left-0 text-white font-poppins z-10"
            style={{ 
                opacity: scrollOpacity,
                transform: `scale(${scrollScale})`,
                filter: `blur(${scrollBlur}px)`,
                transition: 'none', // Remove transition to avoid conflicts with scroll
                pointerEvents: scrollOpacity < 0.1 ? 'none' : 'auto'
            }}
        >
            {/* LIGHT with enhanced transition */}
            <div className='absolute top-0 left-0 w-full overflow-hidden h-full flex justify-center items-center'>
                <img 
                    className={`opacity-85 transition-all duration-700 ease-out ${
                        isHovered ? 'scale-150 md:scale-125' : 'scale-125 md:scale-90'
                    } ${isLoaded ? 'animate-in' : 'opacity-0 scale-75'}`} 
                    src={light} 
                    alt="" 
                    style={{
                        transform: `scale(${isHovered ? 1.5 : 1.25}) translateY(${scrollBlur * 2}px)`,
                        opacity: 0.85 - (scrollBlur * 0.05),
                        animation: isLoaded ? 'lightFadeIn 1s ease-out' : 'none'
                    }}
                />
            </div>

            <div className='flex h-full relative justify-center items-center'>
                <div 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                    className='cursor-grab flex flex-col items-center justify-center'
                    style={{
                        transform: `translateY(${scrollBlur * -3}px)`
                    }}
                >
                    {/* INTRO with staggered load animation */}
                    <div className='flex pb-3 sm:pb-5'>
                        <p 
                            className={`text-4xl sm:text-6xl lg:text-7xl pr-3 sm:pr-4 transition-all duration-300 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                transform: `translateX(${scrollBlur * -2}px) translateY(${isLoaded ? 0 : '32px'})`,
                                opacity: scrollOpacity * (isLoaded ? 1 : 0),
                                transition: 'all 0.8s ease-out 0.3s'
                            }}
                        >
                            Hello
                        </p>
                        <img 
                            className={`w-8 sm:w-12 lg:w-14 transition-all duration-500 ${
                                isLoaded ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 -rotate-12'
                            }`}
                            src={hello} 
                            alt="" 
                            style={{
                                transform: `translateY(${scrollBlur * -1}px) rotate(${scrollBlur * 5 + (isLoaded ? 0 : -12)}deg) translateY(${isLoaded ? 0 : '32px'})`,
                                opacity: scrollOpacity * (isLoaded ? 1 : 0),
                                transition: 'all .7s ease-out 0.6s'
                            }}
                        />
                    </div>
                    <div>
                        <p 
                            className={`text-4xl sm:text-6xl lg:text-7xl transition-all duration-400 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                transform: `translateX(${scrollBlur * 2}px) translateY(${isLoaded ? 0 : '32px'})`,
                                opacity: scrollOpacity * (isLoaded ? 1 : 0),
                                transition: 'all 0.5s ease-out 0.4s'
                            }}
                        >
                            I'm <span className='font-bold text-title'>Mark Christian</span>
                        </p>
                        <p 
                            className={`text-center font-light sm:text-xl transition-all duration-600 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                transform: `translateY(${scrollBlur * 2}px) translateY(${isLoaded ? 0 : '32px'})`,
                                opacity: scrollOpacity * 0.9 * (isLoaded ? 1 : 0),
                                transition: 'all 1s ease-out 0.7s'
                            }}
                        >
                            Full-stack Web Developer
                        </p>
                    </div>
                </div>

                {/* ARROW with enhanced animation */}
                <div 
                    className={`absolute bottom-7 w-full flex justify-center left-0 transition-all duration-500 ${
                        isLoaded ? 'translate-y-0 opacity-80' : 'translate-y-8 opacity-0'
                    }`}
                    style={{
                        transform: `translateY(${scrollBlur * 4}px) translateY(${isLoaded ? 0 : '32px'})`,
                        opacity: scrollOpacity * 0.8 * (isLoaded ? 1 : 0),
                        transition: 'all 1s ease-out 1s'
                    }}
                >
                    <img 
                        className='w-8 animate-[bounce_1s_ease-in-out_infinite] transition-all duration-300' 
                        src={arrow} 
                        alt="" 
                        style={{
                            transform: `scale(${1 - scrollBlur * 0.1})`,
                            filter: `blur(${scrollBlur * 0.5}px)`,
                            animationDelay: isLoaded ? '1s' : '0s'
                        }}
                    />
                </div>
            </div>

            {/* Custom CSS for load animations */}
            <style>{`
                @keyframes lightFadeIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    50% {
                        opacity: 0.4;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 0.85;
                        transform: scale(1.25);
                    }
                }
            `}</style>
        </div>
    )
}

export default FrontPage