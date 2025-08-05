import React, { useState } from 'react';
import Layout from '../Components/Layout';
import GlassEffectBg from '../Components/Landing/GlassEffectBg';

// Facility Card Component with glass morphism design
const FacilityCard = ({ facility, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group transition-all duration-200 transform ${
        isHovered ? 'scale-105 -translate-y-2' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className={`absolute left-0 right-0 top-0 bottom-0 max-w-md mx-auto bg-gradient-to-r ${facility.gradientFrom} ${facility.gradientTo} rounded-2xl blur-sm transition-opacity duration-500 ${
        isHovered ? 'opacity-70' : 'opacity-0'
      }`}></div>
      
      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 w-full max-w-md mx-auto" style={{ minHeight: '420px', height: 'auto' }}>
        {/* Facility Image */}
        {facility.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={facility.image} 
              alt={facility.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Image overlay with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent`}></div>
            {/* Status badge on image */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              facility.status === 'Available' 
                ? 'bg-green-100/90 text-green-700 border border-green-200/50' 
                : facility.status === 'Maintenance'
                ? 'bg-yellow-100/90 text-yellow-700 border border-yellow-200/50'
                : 'bg-red-100/90 text-red-700 border border-red-200/50'
            }`}>
              {facility.status}
            </div>
          </div>
        )}
        
        <div className="p-5">
          {/* Header with icon and title */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${facility.gradientFrom} ${facility.gradientTo} flex items-center justify-center text-white text-2xl shadow-lg`}>
                {facility.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{facility.name}</h3>
                <p className="text-sm text-gray-600">{facility.category}</p>
              </div>
            </div>
            {!facility.image && (
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                facility.status === 'Available' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : facility.status === 'Maintenance'
                  ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {facility.status}
              </div>
            )}
          </div>

          {/* Features list */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features:</h4>
            <div className="grid grid-cols-1 gap-2">
              {facility.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with capacity and location */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>👥</span>
                <span>Capacity: {facility.capacity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>{facility.location}</span>
              </div>
            </div>
            <button className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r ${facility.gradientFrom} ${facility.gradientTo} text-white hover:shadow-lg hover:scale-105 ml-0 sm:ml-4 mt-4 sm:mt-0`}>
              Request access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Facilities = () => {
  // Sample facilities data - you can easily modify this
  const facilities = [
    {
      id: 1,
      name: "Advanced Chemistry Lab",
      category: "Research Laboratory",
      description: "State-of-the-art chemistry laboratory equipped with modern analytical instruments, fume hoods, and safety equipment for advanced research and experimentation.",
      features: [
        "High-performance liquid chromatography (HPLC)",
        "Gas chromatography-mass spectrometry (GC-MS)",
        "Nuclear magnetic resonance (NMR) spectroscopy",
        "UV-Vis spectrophotometers",
        "Automated synthesis workstations"
      ],
      capacity: "25 researchers",
      location: "Building A, Floor 3",
      status: "Available",
      icon: "🧪",
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-600",
      image: "/chemistry1.png"
    },
    {
      id: 2,
      name: "Computational Center",
      category: "Computing Facility",
      description: "High-performance computing cluster for molecular modeling, quantum chemistry calculations, and data analysis with 24/7 technical support.",
      features: [
        "256-core computing cluster",
        "GPU acceleration for ML workloads",
        "Quantum chemistry software suite",
        "Molecular dynamics simulation tools",
        "Cloud storage and backup systems"
      ],
      capacity: "50 users",
      location: "Building B, Floor 1",
      status: "Available",
      icon: "💻",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600",
      image: "/chemistry2.png"
    },
    {
      id: 3,
      name: "Spectroscopy Suite",
      category: "Analytical Facility",
      description: "Comprehensive spectroscopic analysis facility featuring multiple techniques for material characterization and molecular analysis.",
      features: [
        "Fourier-transform infrared (FTIR) spectroscopy",
        "Raman spectroscopy with laser excitation",
        "X-ray photoelectron spectroscopy (XPS)",
        "Atomic force microscopy (AFM)",
        "Scanning electron microscopy (SEM)"
      ],
      capacity: "15 researchers",
      location: "Building C, Floor 2",
      status: "Maintenance",
      icon: "🔬",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-600",
      image: "/chemistry3.png"
    },
    {
      id: 4,
      name: "Clean Room Facility",
      category: "Specialized Environment",
      description: "ISO Class 7 clean room for sensitive material preparation and device fabrication with controlled temperature, humidity, and particle levels.",
      features: [
        "ISO Class 7 certification",
        "Temperature control (±1°C)",
        "Humidity control (±2% RH)",
        "HEPA filtration system",
        "Antistatic flooring and workstations"
      ],
      capacity: "8 researchers",
      location: "Building D, Floor 1",
      status: "Available",
      icon: "🏭",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-blue-600",
      image: "/chemistry4.png"
    },
    {
      id: 5,
      name: "Conference Center",
      category: "Meeting Facility",
      description: "Modern conference center with audio-visual equipment for seminars, workshops, and collaborative meetings with international connectivity.",
      features: [
        "4K projection systems",
        "Wireless presentation technology",
        "Video conferencing setup",
        "Simultaneous translation capability",
        "Modular seating arrangements"
      ],
      capacity: "100 attendees",
      location: "Building E, Floor 2",
      status: "Available",
      icon: "🎯",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600",
      image: "/chemistry5.png"
    },
    {
      id: 6,
      name: "Materials Synthesis Lab",
      category: "Synthesis Facility",
      description: "Specialized laboratory for nanomaterial synthesis and characterization with controlled atmosphere capabilities and advanced purification systems.",
      features: [
        "Inert atmosphere glove boxes",
        "High-temperature furnaces (up to 1800°C)",
        "Chemical vapor deposition (CVD) systems",
        "Sonochemical synthesis equipment",
        "Centrifugal purification systems"
      ],
      capacity: "12 researchers",
      location: "Building A, Floor 1",
      status: "Available",
      icon: "⚗️",
      gradientFrom: "from-teal-500",
      gradientTo: "to-green-600",
      image: "/chemistry6.png"
    }
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Research Facilities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our world-class research facilities equipped with cutting-edge technology and instruments to support advanced scientific research and innovation.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <FacilityCard 
                key={facility.id} 
                facility={facility} 
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Need Access to Our Facilities?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule visits, book equipment, or discuss collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Facility
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Facilities;
