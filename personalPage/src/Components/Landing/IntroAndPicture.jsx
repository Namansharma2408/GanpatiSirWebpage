import React, { useEffect, useState } from 'react'

const CircularImageSection = () => {
    return (
        <div className="relative z-20 flex justify-center items-center" style={{ width: '320px', height: '320px' }}>
            {/* Siri-like animated background layers */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-gray-200/30 via-slate-100/20 to-gray-300/25 backdrop-blur-sm border border-gray-200/30 shadow-lg animate-pulse" 
                 style={{
                     animationDuration: '3s', 
                     top: '50%', 
                     left: '50%', 
                     transform: 'translate(-50%, -50%)',
                     animation: 'siriPulse1 4s ease-in-out infinite'
                 }}>
            </div>
            
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-100/15 via-indigo-50/20 to-slate-100/25 backdrop-blur-md border border-blue-100/20 shadow-md" 
                 style={{
                     top: '50%', 
                     left: '50%', 
                     transform: 'translate(-50%, -50%)',
                     animation: 'siriPulse2 3.5s ease-in-out infinite 0.5s'
                 }}>
            </div>
            
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-bl from-purple-50/20 via-blue-50/15 to-gray-100/20 backdrop-blur-lg border border-purple-100/25 shadow-sm" 
                 style={{
                     top: '50%', 
                     left: '50%', 
                     transform: 'translate(-50%, -50%)',
                     animation: 'siriPulse3 3s ease-in-out infinite 1s'
                 }}>
            </div>
            
            {/* Main Image Container with enhanced glass effect */}
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-gray-200/40 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-purple-50/15">
                <img 
                    src="/ganpati.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Subtle glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-500/5 via-transparent to-blue-100/8"></div>
                
                {/* Glass reflection effect */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/20 to-blue-50/15 rounded-full blur-xl"></div>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute w-3 h-3 bg-gradient-to-br from-gray-300/40 to-blue-100/30 rounded-full backdrop-blur-sm border border-gray-200/40" 
                 style={{
                     top: '15px', 
                     right: '15px',
                     animation: 'float1 6s ease-in-out infinite'
                 }}>
            </div>
            <div className="absolute w-2 h-2 bg-gradient-to-tr from-blue-100/30 to-gray-200/25 rounded-full backdrop-blur-sm border border-blue-100/30" 
                 style={{
                     bottom: '10px', 
                     left: '10px',
                     animation: 'float2 5s ease-in-out infinite 1s'
                 }}>
            </div>
            <div className="absolute w-2 h-2 bg-gradient-to-bl from-purple-100/25 to-gray-100/30 rounded-full backdrop-blur-sm border border-purple-100/30" 
                 style={{
                     top: '50%', 
                     right: '5px',
                     animation: 'float3 4s ease-in-out infinite 2s'
                 }}>
            </div>
            
            <style jsx>{`
                @keyframes siriPulse1 {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
                    50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
                }
                @keyframes siriPulse2 {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.25; }
                    50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.4; }
                }
                @keyframes siriPulse3 {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
                    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.35; }
                }
                @keyframes float1 {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-10px) scale(1.1); opacity: 0.8; }
                }
                @keyframes float2 {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
                    50% { transform: translateY(-8px) scale(1.05); opacity: 0.7; }
                }
                @keyframes float3 {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
                    50% { transform: translateY(-6px) scale(1.08); opacity: 0.6; }
                }
            `}</style>
        </div>
    );
};

const IntroAndPicture = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center py-10 md:py-20" style={{ minHeight: '100vh' }}>
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between max-w-6xl gap-8 md:gap-0">
                
                {/* Left Side - Circular Image with Layers */}
                <div className="w-full md:flex-1 flex justify-center items-center relative z-20 order-1 md:order-1">
                    <div className="scale-75 sm:scale-90 md:scale-100 flex justify-center items-center">
                        <CircularImageSection />
                    </div>
                </div>
                
                {/* Right Side - Text in Glassy Card */}
                <div className="w-full md:flex-1 md:pl-16 pt-8 md:pt-16 relative z-20 order-2 md:order-2">
                    {/* Glassy Card Container */}
                    <div className="relative max-w-lg mx-auto md:mx-0">
                        {/* Card Background with Glass Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-purple-50/70 to-blue-50/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl"></div>
                        
                        {/* Card Content */}
                        <div className="relative p-6 md:p-8 z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-700/40 to-blue-700/40 bg-clip-text text-transparent text-center md:text-left">
                                DR GANAPATHY D
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4 font-medium text-center md:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                        
                        {/* Subtle glow effect around card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/20 via-blue-200/20 to-indigo-200/20 rounded-2xl blur-sm -z-10"></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default IntroAndPicture