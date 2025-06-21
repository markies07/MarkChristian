import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function TiltCard({ children }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 7,
        speed: 100,
        glare: false,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="w-fit">
      {children}
    </div>
  );
}

export default TiltCard;
