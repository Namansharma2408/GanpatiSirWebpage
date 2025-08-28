import GlassEffectBg from '../Components/Landing/GlassEffectBg'
import MainContentArea from '../Components/Landing/MainContentArea'
import Landingbackground from '../Components/Landing/Landingbackground'

const LandingPage = () => {
  
  return (

    <div className='bg-gray-300 min-h-[100dvh] w-screen relative flex flex-col'>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Landingbackground />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GlassEffectBg />
      </div>

      {/* Main content area */}
      <main className="flex-grow relative z-20">
        <MainContentArea />
      </main>
    </div>
  )
}

export default LandingPage