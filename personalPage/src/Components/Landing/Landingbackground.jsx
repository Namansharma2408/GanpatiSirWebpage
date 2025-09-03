import React from 'react'

const Landingbackground = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-200 overflow-hidden">
        <img 
          src="LandingBackgroundImage1.webp" 
          alt="Landing Background" 
          className="w-full h-full object-cover object-center"
          loop
          autoPlay
          muted
          playsInline
        />
    </div>
  )
}

export default Landingbackground