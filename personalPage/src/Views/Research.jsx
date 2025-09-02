import React from 'react';
import Layout from '../Components/Layout';

const Research = () => {
  const researchAreas = [
    {
      id: 1,
      title: "Photocatalysis",
      description: "Developing novel photocatalytic systems for sustainable organic synthesis using visible light-responsive catalysts and green chemistry principles.",
      features: ["Synthetic Methodology", "Drug Discovery", "Reaction Mechanisms", "Molecular Design"],
      image: "photoOrganicSynthesis.png",
      gradient: "from-gray-300 to-gray-400",
      shadow: "shadow-lg shadow-gray-300/50"
    },
    {
      id: 2,
      title: "Electrocatalysis",
      description: "Advancing electrocatalytic methodologies for efficient chemical transformations and energy conversion applications.",
      features: ["Green Chemistry", "Sustainable Processes", "Catalyst Design", "Industrial Applications"],
      image: "elctroOrganicSynthesis.jpg",
      gradient: "from-gray-400 to-gray-500",
      shadow: "shadow-lg shadow-gray-400/50"
    },
    {
      id: 3,
      title: "Total Synthesis and Natural Products",
      description: "Exploring innovative strategies for the total synthesis of complex natural products and the development of new synthetic methodologies.",
      features: ["Natural Products", "Complex Molecules", "Synthetic Routes", "Method Development"],
      image: "totalSynthesis.jpg",
      gradient: "from-gray-200 to-gray-300",
      shadow: "shadow-lg shadow-gray-200/50"
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-200">
        {/* Hero Section */}
        
        <div className="text-center mb-12 z-20 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              Research Areas
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Exploring the frontiers of chemistry through innovative research and cutting-edge technology
            </p>
          </div>
        {/* Research Areas Zigzag */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          {researchAreas.map((area, index) => (
            <div
              key={area.id}
              className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } h-[50vh] min-h-[400px]`}
            >
              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {area.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {area.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {area.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition-colors duration-300 w-fit shadow-lg shadow-gray-400/50">
                  Learn More
                </button>
              </div>
              
              {/* Image Section */}
              <div className="flex-1 relative h-full">
                <div className="relative h-full group">
                  {/* Background glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {/* Main image container */}
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30 overflow-hidden h-full">
                    <div className="h-full rounded-xl overflow-hidden">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/placeholder-tech.jpg';
                        }}
                      />
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">⚗️</span>
                    </div>
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl">🧪</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </Layout>
  );
};

export default Research;
