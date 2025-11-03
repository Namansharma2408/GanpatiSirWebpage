'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
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
              {facility.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facility Image - moved below features */}
          {facility.image && (
            <div className="relative h-48 overflow-hidden rounded-xl mb-4">
              <Image 
                src={facility.image || "/neeraj.webp"} 
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                fill
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
        
        </div>
      </div>
    </div>
  );
};
const page = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch facilities from API
  useEffect(() => {
    setLoading(true);
    fetch('/api/facilities')
      .then((res) => {
        if (!res.ok) {
          return res.json().then(errData => {
            console.warn('Facilities API returned error:', errData);
            return [];
          }).catch(() => []);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setFacilities(data);
        } else {
          setFacilities([]);
        }
      })
      .catch((err) => {
        console.warn('Using fallback facilities due to API error');
        setFacilities([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Fallback facilities (moved from static list)
  const fallbackFacilities = [
    // Analytical Instruments
    {
      id: 1,
      name: "NMR 60MHz",
      category: "Analytical Instrument",
      features: ["1H NMR spectroscopy", "13C NMR capability", "Variable temperature", "Automated sample changer"],
      capacity: "10 samples/day",
      location: "Building A, Floor 3",
      status: "Available",
      icon: "🧲",
      gradientFrom: "from-blue-400",
      gradientTo: "to-indigo-500",
      image: "/nmr.webp",
      route: "/facilities/nmr-60mhz"
    },
    {
      id: 15,
      name: "Single Crystal XRD",
      category: "General Equipment",
      features: ["Temperature up to 300°C", "Forced air circulation", "Digital controller", "Safety features"],
      capacity: "Large chamber",
      location: "All labs",
      status: "Available",
      icon: "🔥",
      gradientFrom: "from-red-400",
      gradientTo: "to-orange-500",
      image: "/singleCrystal.webp",
      route: "/facilities/hot-air-oven"
    },
    {
      id: 2,
      name: "FTIR-ATR",
      category: "Analytical Instrument",
      features: ["Attenuated Total Reflection", "Mid-IR range 4000-400 cm⁻¹", "Diamond crystal", "Minimal sample prep"],
      capacity: "15 samples/day",
      location: "Building A, Floor 3",
      status: "Available",
      icon: "📊",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-500",
      image: "/ftir.webp",
      route: "/facilities/ftir-atr"
    },
    {
      id: 3,
      name: "UV-Vis Spectrometer",
      category: "Analytical Instrument",
      features: ["190-1100 nm range", "Single & double beam", "Kinetics measurements", "Temperature control"],
      capacity: "20 samples/day",
      location: "Building A, Floor 3",
      status: "Available",
      icon: "🌈",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-blue-500",
      image: "/uvs.webp",
      route: "/facilities/uv-vis-spectrometer"
    },
    {
      id: 4,
      name: "GC-MS",
      category: "Analytical Instrument",
      features: ["Gas chromatography-mass spectrometry", "EI & CI ionization", "Library search", "Quantitative analysis"],
      capacity: "12 samples/day",
      location: "Building B, Floor 2",
      status: "Available",
      icon: "📈",
      gradientFrom: "from-green-400",
      gradientTo: "to-teal-500",
      image: "/gcms.webp",
      route: "/facilities/gc-ms"
    },
    {
      id: 5,
      name: "HPLC",
      category: "Analytical Instrument",
      features: ["High performance liquid chromatography", "UV-Vis detector", "Multiple column types", "Gradient capability"],
      capacity: "15 samples/day",
      location: "Building B, Floor 2",
      status: "Available",
      icon: "💧",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-500",
      image: "/hplc.webp",
      route: "/facilities/hplc"
    },


    // Synthesis & General Equipment
    {
      id: 12,
      name: "Rotary Evaporator",
      category: "Synthesis Equipment",
      features: ["Solvent removal", "Temperature control", "Vacuum regulation", "Glass condensers"],
      capacity: "8 setups",
      location: "Building C, Floor 2",
      status: "Available",
      icon: "🌪️",
      gradientFrom: "from-orange-400",
      gradientTo: "to-yellow-500",
      image: "/rotavapour.webp",
      route: "/facilities/rotary-evaporator"
    },
    {
      id: 13,
      name: "Photo Reactor",
      category: "Synthesis Equipment",
      features: ["UV-LED light source", "Temperature control", "Gas purging", "Multiple wavelengths"],
      capacity: "4 reactions",
      location: "Building C, Floor 2",
      status: "Available",
      icon: "💡",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-orange-500",
      image: "/photoreactor.webp",
      route: "/facilities/photo-reactor"
    },

    {
      id: 16,
      name: "Analytical Balance",
      category: "General Equipment",
      features: ["0.1 mg precision", "Internal calibration", "Anti-vibration table", "Data logging"],
      capacity: "Continuous use",
      location: "All labs",
      status: "Available",
      icon: "⚖️",
      gradientFrom: "from-gray-400",
      gradientTo: "to-gray-600",
      image: "/analyticalBalance.webp",
      route: "/facilities/analytical-balance"
    },
    {
      id: 22,
      name: "Ultrasonic Cleaner",
      category: "General Equipment",
      features: ["Multiple frequencies", "Digital timer", "Temperature control", "Degassing function"],
      capacity: "Various sizes",
      location: "All labs",
      status: "Available",
      icon: "🔊",
      gradientFrom: "from-blue-400",
      gradientTo: "to-teal-500",
      image: "/sonikator.webp",
      route: "/facilities/ultrasonic-cleaner"
    },
    {
      id: 25,
      name: "Automated Flash Chromatography",
      category: "Utility Equipment",
      features: ["Type I ultrapure water", "Online monitoring", "UV sterilization", "Storage tank"],
      capacity: "30 L/hour",
      location: "Utility room",
      status: "Available",
      icon: "💧",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-500",
      image: "/afc.webp",
      route: "/facilities/elga-water-purification"
    },

  ];
  return (
    <div >
      <div className='h-32'/>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 z-20 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent ">
            Research Facilities
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our world-class research facilities equipped with cutting-edge technology and instruments to support advanced scientific research and innovation.
          </p>
        </div>
        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {((facilities && facilities.length > 0) ? facilities : fallbackFacilities).map((facility, index) => (
            <FacilityCard
              key={facility.$id || facility.id || index}
              facility={facility}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className='h-32'/>
    </div>
  )
}

export default page