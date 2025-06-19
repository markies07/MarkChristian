import React, { useEffect, useState } from 'react';
import scrollWhite from '../assets/scroll-white.svg';

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    const handleScroll = () => {
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      // Show button when top of ABOUT section reaches top of viewport or above
      if (rect.top <= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-4 mix-blend-difference right-4 z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <img
        onClick={scrollToTop}
        className='w-10 sm:w-14 opacity-80 cursor-pointer hover:opacity-100 duration-300'
        src={scrollWhite}
        alt="Scroll to top"
      />
    </div>
  );
}

export default ScrollUp;
