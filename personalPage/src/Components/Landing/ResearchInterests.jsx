import React from 'react'

const ResearchInterests = () => {
    const researchAreas = [
        {
            id: 1,
            title: "Photocatalysis",
            image: "/chemistry1.png",
            description: "Developing novel photocatalytic systems for sustainable organic synthesis using visible light-responsive catalysts and green chemistry principles."
        },
        {
            id: 2,
            title: "Electrocatalysis",
            image: "/chemistry2.png",
            description: "Advancing electrocatalytic methodologies for efficient chemical transformations and energy conversion applications."
        },
        {
            id: 3,
            title: "Materials Science",
            image: "/chemistry3.png",
            description: "Designing and synthesizing advanced materials with tailored properties for catalytic and energy storage applications."
        }
    ];

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative z-50'>
            {/* Header Section */}
            <div className="text-center mb-16 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                    Research Interests
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Our research focuses on cutting-edge areas of chemistry that combine sustainability, innovation, and practical applications for solving real-world challenges.
                </p>
            </div>

            {/* Cards Container */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {researchAreas.map((area) => (
                    <div
                        key={area.id}
                        className="group relative"
                    >
                        {/* Card with Glass Morphism Effect */}
                        <div className="relative backdrop-blur-xl border bg-white border-white/40 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={area.image}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>
                            <div className="relative top-4 left-4 right-4">
                                <h3 className="text-2xl font-bold text-black drop-shadow-lg">
                                    {area.title}
                                </h3>
                            </div>
                            {/* Content Section */}
                            <div className="p-6 h-fit">
                                {/* Description */}
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                    {area.description}
                                </p>
                            </div>

                            {/* Subtle glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/0 via-blue-200/0 to-indigo-200/0 group-hover:from-purple-200/20 group-hover:via-blue-200/20 group-hover:to-indigo-200/20 rounded-2xl blur-sm -z-10 transition-all duration-500"></div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default ResearchInterests