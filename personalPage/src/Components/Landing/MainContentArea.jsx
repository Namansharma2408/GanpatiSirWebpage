import React from 'react'
import IntroAndPicture from './IntroAndPicture.jsx'
import Navbar from './Navbar'
import ResearchInterests from './ResearchInterests.jsx'
import RecentPublication from './RecentPublication.jsx'
import LandingTeam from './LandingTeam.jsx'
import Footer from './Footer.jsx'
const MainContentArea = () => {
  return (
    <div className="min-h-screen relative z-20">
      {/* Fixed Navbar at top */}
      <div className="relative z-[9999] pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* Main content sections with proper spacing */}
      <div className="relative z-30"> {/* Add top padding to account for fixed navbar */}
        {/* Intro Section */}
        <section className="min-h-screen relative z-40">
          <IntroAndPicture />
        </section>

        <section className="min-h-screen relative z-40">
          <ResearchInterests />
        </section>
        <section className="min-h-screen relative z-40">
          <RecentPublication />
        </section>

        <section className="min-h-screen relative z-40">
          <LandingTeam />
        </section>
        <section className="max-h-1/3">
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default MainContentArea