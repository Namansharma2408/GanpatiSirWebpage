import React, { useState } from 'react';
import Layout from '../Components/Layout';
import GlassEffectBg from '../Components/Landing/GlassEffectBg';
import { Outlet, Link } from 'react-router-dom';

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
              {facility.features.slice(0, 3).map((feature, idx) => (
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
            <Link 
              to={facility.route} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r ${facility.gradientFrom} ${facility.gradientTo} text-white hover:shadow-lg hover:scale-105 ml-0 sm:ml-4 mt-4 sm:mt-0 no-underline`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Facilities = () => {
  // Comprehensive facilities data for your institute
  const facilities = [
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
      route: "/facilities/nmr-60mhz"
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
      route: "/facilities/hplc"
    },
    {
      id: 6,
      name: "Elemental Analyzer (CHNS-O)",
      category: "Analytical Instrument",
      features: ["Carbon, Hydrogen, Nitrogen, Sulfur analysis", "Oxygen determination", "Automated operation", "High precision"],
      capacity: "25 samples/day",
      location: "Building B, Floor 1",
      status: "Available",
      icon: "⚗️",
      gradientFrom: "from-orange-400",
      gradientTo: "to-red-500",
      route: "/facilities/elemental-analyzer"
    },
    {
      id: 7,
      name: "BET Analyzer",
      category: "Analytical Instrument",
      features: ["Surface area analysis", "Pore size distribution", "Nitrogen physisorption", "Material characterization"],
      capacity: "3 samples/run",
      location: "Building B, Floor 1",
      status: "Available",
      icon: "🔬",
      gradientFrom: "from-teal-400",
      gradientTo: "to-blue-500",
      route: "/facilities/bet-analyzer"
    },
    {
      id: 8,
      name: "CD Spectrophotometer",
      category: "Analytical Instrument",
      features: ["Circular dichroism", "Protein secondary structure", "Chiral analysis", "Temperature control"],
      capacity: "8 samples/day",
      location: "Building A, Floor 3",
      status: "Available",
      icon: "🌀",
      gradientFrom: "from-violet-400",
      gradientTo: "to-purple-500",
      route: "/facilities/cd-spectrophotometer"
    },
    {
      id: 9,
      name: "Thermogravimetric Analysis",
      category: "Thermal Analysis",
      features: ["Weight loss vs temperature", "Decomposition analysis", "Kinetics studies", "Controlled atmosphere"],
      capacity: "5 samples/day",
      location: "Building B, Floor 2",
      status: "Available",
      icon: "🔥",
      gradientFrom: "from-red-400",
      gradientTo: "to-orange-500",
      route: "/facilities/thermogravimetric-analysis"
    },
    {
      id: 10,
      name: "Differential Scanning Calorimetry",
      category: "Thermal Analysis", 
      features: ["Heat flow measurement", "Glass transition", "Melting point", "Crystallization studies"],
      capacity: "6 samples/day",
      location: "Building B, Floor 2",
      status: "Available",
      icon: "🌡️",
      gradientFrom: "from-orange-400",
      gradientTo: "to-yellow-500",
      route: "/facilities/differential-scanning-calorimetry"
    },
    {
      id: 11,
      name: "Size Exclusion Chromatography (GPC)",
      category: "Analytical Instrument",
      features: ["Molecular weight distribution", "Polymer analysis", "Multiple detectors", "Automated system"],
      capacity: "12 samples/day",
      location: "Building B, Floor 2",
      status: "Available",
      icon: "📏",
      gradientFrom: "from-green-400",
      gradientTo: "to-emerald-500",
      route: "/facilities/size-exclusion-chromatography"
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
      route: "/facilities/photo-reactor"
    },
    {
      id: 14,
      name: "Microwave Synthesizer",
      category: "Synthesis Equipment",
      features: ["Rapid heating", "Temperature & pressure control", "Multiple vial capacity", "Automated operation"],
      capacity: "16 vials",
      location: "Building C, Floor 2",
      status: "Available",
      icon: "📡",
      gradientFrom: "from-red-400",
      gradientTo: "to-pink-500",
      route: "/facilities/microwave-synthesizer"
    },
    {
      id: 15,
      name: "Hot Air Oven",
      category: "General Equipment",
      features: ["Temperature up to 300°C", "Forced air circulation", "Digital controller", "Safety features"],
      capacity: "Large chamber",
      location: "All labs",
      status: "Available",
      icon: "🔥",
      gradientFrom: "from-red-400",
      gradientTo: "to-orange-500",
      route: "/facilities/hot-air-oven"
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
      route: "/facilities/analytical-balance"
    },
    {
      id: 17,
      name: "Digital pH Meter",
      category: "General Equipment",
      features: ["±0.01 pH accuracy", "Temperature compensation", "Multiple electrode support", "Data logging"],
      capacity: "Multiple units",
      location: "All labs",
      status: "Available",
      icon: "🧪",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-500",
      route: "/facilities/digital-ph-meter"
    },
    {
      id: 18,
      name: "Vortex Mixture",
      category: "General Equipment",
      features: ["Variable speed control", "Touch/continuous mode", "Multiple tube adapters", "Compact design"],
      capacity: "Multiple units",
      location: "All labs",
      status: "Available",
      icon: "🌀",
      gradientFrom: "from-purple-400",
      gradientTo: "to-indigo-500",
      route: "/facilities/vortex-mixture"
    },
    {
      id: 19,
      name: "Centrifuge",
      category: "General Equipment",
      features: ["Variable speed control", "Temperature control", "Multiple rotor types", "Safety features"],
      capacity: "24 tubes",
      location: "Building A, Floor 2",
      status: "Available",
      icon: "🔄",
      gradientFrom: "from-indigo-400",
      gradientTo: "to-purple-500",
      route: "/facilities/centrifuge"
    },
    {
      id: 20,
      name: "Fume Hood",
      category: "Safety Equipment",
      features: ["Airflow monitoring", "Emergency shutdown", "Chemical resistant", "LED lighting"],
      capacity: "6 work spaces",
      location: "All synthesis labs",
      status: "Available",
      icon: "💨",
      gradientFrom: "from-red-400",
      gradientTo: "to-orange-500",
      route: "/facilities/fume-hood"
    },
    {
      id: 21,
      name: "Vacuum Pump",
      category: "General Equipment",
      features: ["High vacuum capability", "Oil-free operation", "Multiple connections", "Pressure monitoring"],
      capacity: "Multiple outlets",
      location: "All labs",
      status: "Available",
      icon: "🔧",
      gradientFrom: "from-gray-400",
      gradientTo: "to-slate-500",
      route: "/facilities/vacuum-pump"
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
      route: "/facilities/ultrasonic-cleaner"
    },
    {
      id: 23,
      name: "Melting Point Apparatus",
      category: "General Equipment",
      features: ["Digital temperature display", "Ramp rate control", "Video capture", "Multiple samples"],
      capacity: "3 samples",
      location: "Building C, Floor 2",
      status: "Available",
      icon: "🌡️",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-red-500",
      route: "/facilities/melting-point-apparatus"
    },
    
    // Utility & Support Equipment
    {
      id: 24,
      name: "Ice Flaking Machine",
      category: "Utility Equipment",
      features: ["Continuous ice production", "Flaked ice output", "Storage bin", "Water filtration"],
      capacity: "50 kg/day",
      location: "Utility room",
      status: "Available",
      icon: "🧊",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-blue-500",
      route: "/facilities/ice-flaking-machine"
    },
    {
      id: 25,
      name: "Elga Water Purification Systems",
      category: "Utility Equipment",
      features: ["Type I ultrapure water", "Online monitoring", "UV sterilization", "Storage tank"],
      capacity: "30 L/hour",
      location: "Utility room",
      status: "Available",
      icon: "💧",
      gradientFrom: "from-blue-400",
      gradientTo: "to-cyan-500",
      route: "/facilities/elga-water-purification"
    },
    {
      id: 26,
      name: "Workstation",
      category: "Computing Equipment",
      features: ["High-performance CPU", "Large RAM", "Graphics card", "Multiple monitors"],
      capacity: "10 workstations",
      location: "Computational facility",
      status: "Available",
      icon: "🖥️",
      gradientFrom: "from-slate-400",
      gradientTo: "to-gray-600",
      route: "/facilities/workstation"
    },
    {
      id: 27,
      name: "Source Meter",
      category: "Measurement Equipment",
      features: ["Voltage/current sourcing", "High precision measurement", "4-wire sensing", "Data acquisition"],
      capacity: "2 units",
      location: "Building B, Floor 2",
      status: "Available",
      icon: "⚡",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-orange-500",
      route: "/facilities/source-meter"
    },
    {
      id: 28,
      name: "Micro Plate Reader",
      category: "Analytical Instrument",
      features: ["Multi-mode detection", "Fluorescence/absorbance", "96/384 well plates", "Software included"],
      capacity: "Multiple plates",
      location: "Building A, Floor 3",
      status: "Available",
      icon: "📱",
      gradientFrom: "from-green-400",
      gradientTo: "to-emerald-500",
      route: "/facilities/micro-plate-reader"
    },
    {
      id: 29,
      name: "Low Temp. Cooler & Circulator",
      category: "Temperature Control",
      features: ["Temperature range -20 to 200°C", "Circulation pump", "Digital control", "Safety features"],
      capacity: "20L capacity",
      location: "Building C, Floor 2",
      status: "Available",
      icon: "❄️",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-blue-500",
      route: "/facilities/low-temp-cooler"
    },
    
    // Software
    {
      id: 30,
      name: "TURBOMOLE Software",
      category: "Computational Software",
      features: ["Quantum chemistry calculations", "DFT methods", "ab initio calculations", "Parallel processing"],
      capacity: "20 licenses",
      location: "Computational facility",
      status: "Available",
      icon: "💻",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-blue-500",
      route: "/facilities/turbomole-software"
    },
    {
      id: 31,
      name: "Gromacs Software", 
      category: "Computational Software",
      features: ["Molecular dynamics simulations", "Protein folding studies", "Drug-target interactions", "High performance"],
      capacity: "Unlimited",
      location: "Computational facility",
      status: "Available",
      icon: "🧬",
      gradientFrom: "from-green-400",
      gradientTo: "to-teal-500",
      route: "/facilities/gromacs-software"
    },
    {
      id: 32,
      name: "PyMol Software",
      category: "Visualization Software",
      features: ["Molecular visualization", "3D structure rendering", "Animation creation", "Publication quality images"],
      capacity: "10 licenses",
      location: "Computational facility",
      status: "Available",
      icon: "🎨",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-500",
      route: "/facilities/pymol-software"
    },
    {
      id: 33,
      name: "VMD Software",
      category: "Visualization Software",
      features: ["Molecular dynamics visualization", "Trajectory analysis", "Plugin support", "Scripting capability"],
      capacity: "Unlimited",
      location: "Computational facility",
      status: "Available",
      icon: "📊",
      gradientFrom: "from-indigo-400",
      gradientTo: "to-purple-500",
      route: "/facilities/vmd-software"
    },
    {
      id: 34,
      name: "AutoDock Software",
      category: "Computational Software",
      features: ["Molecular docking", "Drug design", "Binding affinity prediction", "Virtual screening"],
      capacity: "Unlimited",
      location: "Computational facility",
      status: "Available",
      icon: "🎯",
      gradientFrom: "from-emerald-400",
      gradientTo: "to-teal-500",
      route: "/facilities/autodock-software"
    },
    {
      id: 35,
      name: "Modeller Software",
      category: "Computational Software",
      features: ["Protein structure modeling", "Homology modeling", "Loop refinement", "Model validation"],
      capacity: "Educational license",
      location: "Computational facility", 
      status: "Available",
      icon: "🧬",
      gradientFrom: "from-violet-400",
      gradientTo: "to-purple-500",
      route: "/facilities/modeller-software"
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
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
          Research Facilities
          </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our world-class research facilities equipped with cutting-edge technology and instruments to support advanced scientific research and innovation.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
        <Outlet />
      </Layout>
    </>
  );
};

export default Facilities;
