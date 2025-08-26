import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const Centrifuge = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              High-Speed Centrifuge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced centrifugation system for separation, purification, and concentration of biological and chemical samples.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-3xl mr-4">
                  🔄
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Variable speed centrifugation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Speed Range:</strong> 500-15,000 rpm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>RCF:</strong> Up to 21,000 × g</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Temperature:</strong> -10°C to 40°C</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Capacity:</strong> Multiple rotor options</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Cell Separation</h4>
                  <p className="text-gray-600 text-sm">Blood cells, bacteria, organelles separation</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Protein Purification</h4>
                  <p className="text-gray-600 text-sm">Precipitation, concentration, and purification</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">DNA/RNA Isolation</h4>
                  <p className="text-gray-600 text-sm">Nucleic acid precipitation and purification</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Nanoparticle Analysis</h4>
                  <p className="text-gray-600 text-sm">Particle size separation and characterization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Max Speed</h4>
                <p className="text-gray-600">15,000 rpm</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧪</span>
                </div>
                <h4 className="font-semibold text-gray-800">Tube Capacity</h4>
                <p className="text-gray-600">24 × 15 mL tubes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❄️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Refrigeration</h4>
                <p className="text-gray-600">CFC-free cooling</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Brushless maintenance-free motor",
                  "Automatic rotor recognition",
                  "Imbalance detection system",
                  "Pre-cooling function",
                  "Multiple safety interlocks",
                  "Digital display and control"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Rotors</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Fixed Angle Rotor</h4>
                  <p className="text-gray-600 text-sm">24 × 1.5/2.0 mL microtubes</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Swing-Out Rotor</h4>
                  <p className="text-gray-600 text-sm">4 × 50 mL conical tubes</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">PCR Strip Rotor</h4>
                  <p className="text-gray-600 text-sm">Specialized for PCR tubes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule centrifuge time or discuss sample processing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Centrifuge
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
                Rotor Selection
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Centrifuge;
