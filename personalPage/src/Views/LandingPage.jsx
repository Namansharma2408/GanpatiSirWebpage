import React from 'react'
import FloatingImages from '../Components/Landing/Landingbackground'
import GlassEffectBg from '../Components/Landing/GlassEffectBg'
import MainContentArea from '../Components/Landing/MainContentArea'
const LandingPage = () => {
  return (
    <div className='bg-gray-300 min-h-screen w-screen relative'>
      {/* Floating images below glass effect */}
      <div className="absolute inset-0 z-0">
        <FloatingImages
          images={[
            { src: "chemistry.png", duration: 10, interval: 3000, ease: [0.42, 0, 0.58, 1] },
            { src: "chemistry1.png", duration: 8, interval: 4000, ease: "linear" },
            { src: "chemistry2.png", duration: 12, interval: 3500, ease: "easeInOut" },
            { src: "chemistry3.png", duration: 9, interval: 5000, ease: [0.25, 1, 0.5, 1] },
            { src: "chemistry4.png", duration: 11, interval: 3200, ease: "easeOut" },
            { src: "chemistry5.png", duration: 7, interval: 4500, ease: "easeIn" },
            { src: "chemistry6.png", duration: 13, interval: 3800, ease: [0.77, 0, 0.175, 1] },
            { src: "chemistry7.png", duration: 10, interval: 4100, ease: "easeInOut" }
          ]}
        />
      </div>
      {/* Glass effect above floating images */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GlassEffectBg />
      </div>

      {/* Main content area */}
      <MainContentArea />
    </div>
  )
}

export default LandingPage