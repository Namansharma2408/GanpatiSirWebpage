import React from 'react'
import IntroAndPicture from './IntroAndPicture'
import Navbar from './Navbar'
const MainContentArea = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Navbar at top */}
      <div className="relative z-[9999] pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>
      
      {/* Main content sections with proper spacing */}
      <div className="relative"> {/* Add top padding to account for fixed navbar */}
        {/* Intro Section */}
        <section className="min-h-screen relative">
          <IntroAndPicture />
        </section>
        
        {/* Future sections will stack below */}
        {/* <section className="min-h-screen relative">
          <KeyInsightsAndResearch />
        </section>
        
        <section className="min-h-screen relative">
          <Team />
        </section> */}
      </div>
    </div>
  )
}

export default MainContentArea