import React from 'react'
import IntroAndPicture from './IntroAndPicture'
const MainContentArea = () => {
  return (
    <div style={{ position: 'relative', zIndex: 50 }}>
      {/* <Navbar />*/}
      <IntroAndPicture />
      {/* <KeyInsightsAndResearch />
      <Team />  */}
    </div>
  )
}

export default MainContentArea