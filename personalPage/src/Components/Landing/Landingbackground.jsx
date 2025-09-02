import React from 'react'

const Landingbackground = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
        <video 
          // yaha naam dalna hai
          src="landingBackgroundVideo.mp4" 
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