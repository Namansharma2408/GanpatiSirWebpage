'use client'
import React, { useEffect, useState } from 'react'


const IntroAndPicture = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center py-10 md:py-20 relative z-10" style={{ minHeight: '100vh' }}>
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center max-w-6xl relative z-20">

                <div className="w-full relative z-30 flex justify-center items-center">
                    {/* Glassy Card Container */}
                    <div className="relative w-full max-w-4xl z-40">
                        <div className="relative z-50">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent relative z-60 leading-tight px-4">
                                Welcome to The Chemical Synthesis Group
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 mb-1 font-medium text-center relative z-60 mt-4 px-4">
                                Exploring organic synthesis through photocatalysis and electrocatalysis
                            </p>
                        </div>
                        
                        {/* Subtle glow effect around card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/20 via-blue-200/20 to-indigo-200/20 rounded-2xl blur-sm z-10"></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default IntroAndPicture