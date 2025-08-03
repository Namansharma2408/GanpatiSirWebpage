import React, { useEffect, useState } from 'react'
const BenzeneMolecule = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 6000, height: 6000 }}
    >
      {/* Scale and center the group */}
      <g transform="translate(60, 60) scale(0.4)">
        {/* Benzene hexagon */}
        <polygon
          points="100,40 140,60 140,100 100,120 60,100 60,60"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        {/* Double bonds */}
        <line x1="100" y1="40" x2="140" y2="60" stroke="black" strokeWidth="1" />
        <line x1="140" y1="100" x2="100" y2="120" stroke="black" strokeWidth="1" />
        <line x1="60" y1="60" x2="60" y2="100" stroke="black" strokeWidth="1" />

        {/* Alkyl groups */}
        {/* Position 1 - isopropyl */}
        <line x1="100" y1="40" x2="100" y2="20" stroke="black" strokeWidth="2" />
        <line x1="100" y1="20" x2="90" y2="10" stroke="black" strokeWidth="1" />
        <line x1="100" y1="20" x2="110" y2="10" stroke="black" strokeWidth="1" />

        {/* Position 3 - ethyl */}
        <line x1="140" y1="100" x2="160" y2="110" stroke="black" strokeWidth="2" />
        <line x1="160" y1="110" x2="175" y2="120" stroke="black" strokeWidth="1" />

        {/* Position 5 - butyl */}
        <line x1="60" y1="60" x2="40" y2="50" stroke="black" strokeWidth="2" />
        <line x1="40" y1="50" x2="30" y2="40" stroke="black" strokeWidth="1" />
        <line x1="30" y1="40" x2="20" y2="30" stroke="black" strokeWidth="1" />

        {/* Carbon dots */}
        <circle cx="100" cy="40" r="2" fill="black" />
        <circle cx="140" cy="60" r="2" fill="black" />
        <circle cx="140" cy="100" r="2" fill="black" />
        <circle cx="100" cy="120" r="2" fill="black" />
        <circle cx="60" cy="100" r="2" fill="black" />
        <circle cx="60" cy="60" r="2" fill="black" />
      </g>

      {/* Center circle (benzene ring) */}
      <circle cx="100" cy="92" r="12" stroke="black" strokeWidth="2" fill="none" />
    </svg>
  );
};
const IntroAndPicture = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="absolute w-full h-full flex items-center justify-center" style={{ minHeight: 800 }}>
            {/* Overlay div for writing above the molecule */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-auto">

            </div>
            {/* Benzene molecule below overlay */}
            <div className="absolute z-0 flex justify-items-start  w-[100vw] h-full pl-20">
                <BenzeneMolecule />
            </div>
        </div>
    )
}

export default IntroAndPicture