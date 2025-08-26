import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const MicrowaveSynthesizer = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Microwave Synthesizer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced microwave-assisted synthesis platform for rapid heating and enhanced reaction efficiency.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white text-3xl mr-4">
                  📡
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Rapid microwave-assisted synthesis</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Power:</strong> Up to 300W microwave</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Temperature:</strong> Up to 300°C</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Pressure:</strong> Up to 20 bar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Capacity:</strong> 16 vial carousel</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Organic Synthesis</h4>
                  <p className="text-gray-600 text-sm">Rapid heating for condensation reactions</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Medicinal Chemistry</h4>
                  <p className="text-gray-600 text-sm">Drug library synthesis and optimization</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Material Synthesis</h4>
                  <p className="text-gray-600 text-sm">Nanoparticles and inorganic materials</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Catalyst Preparation</h4>
                  <p className="text-gray-600 text-sm">Rapid synthesis of catalytic materials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Microwave Power</h4>
                <p className="text-gray-600">0-300W variable</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Max Temperature</h4>
                <p className="text-gray-600">300°C capability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💨</span>
                </div>
                <h4 className="font-semibold text-gray-800">Max Pressure</h4>
                <p className="text-gray-600">20 bar sealed vials</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Automated sample handling",
                  "Real-time temperature monitoring",
                  "Pressure sensing and control",
                  "Programmable reaction sequences",
                  "Rapid heating and cooling",
                  "Magnetic stirring capability"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Advantages</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Reaction Speed</h4>
                  <p className="text-gray-600 text-sm">10-100x faster than conventional heating</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Energy Efficiency</h4>
                  <p className="text-gray-600 text-sm">Direct molecular heating, reduced energy consumption</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Selectivity</h4>
                  <p className="text-gray-600 text-sm">Enhanced reaction selectivity and yield</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule microwave synthesis or discuss reaction optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Synthesizer
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-red-500 hover:text-red-600 transition-all duration-300">
                Method Development
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MicrowaveSynthesizer;
