import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Landingbackground = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-200 overflow-hidden">
        <LazyLoadImage 
          src="LandingBackgroundImage1.webp" 
          alt="Landing Background" 
          effect="blur"
          className="w-full h-full object-cover object-center"
          width="100%"
          height="100vh"
        />
    </div>
  )
}

export default Landingbackground