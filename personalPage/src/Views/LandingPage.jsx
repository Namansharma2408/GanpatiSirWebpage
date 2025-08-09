import React from 'react'
import GlassEffectBg from '../Components/Landing/GlassEffectBg'
import MainContentArea from '../Components/Landing/MainContentArea'
import Landingbackground from '../Components/Landing/Landingbackground'

const LandingPage = () => {
  
  return (
    <div className='bg-gray-300 min-h-screen w-screen relative'>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Landingbackground />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GlassEffectBg />
      </div>

      {/* Main content area */}
      <MainContentArea />
    </div>
  )
}

export default LandingPage