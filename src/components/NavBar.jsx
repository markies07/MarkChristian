import React, { useEffect, useState } from 'react';

function NavBar() {
  
  return (
    <div
      className='flex mix-blend-difference z-50 text-white w-full fixed top-0 font-poppins font-medium left-0 justify-center text-sm px-7 py-5 transition-colors duration-300'>
      <div className="flex lg:pt-3 max-w-[30rem] justify-between text-sm w-full">
        {['ABOUT', 'SKILLS', 'WORKS', 'CONTACT'].map((item) => (
          <p
            key={item}
            className="cursor-pointer relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-1/2 after:h-[2px] after:scale-x-0 hover:after:scale-x-100 after:font-medium after:bg-white after:origin-left after:transition-transform after:duration-300">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
