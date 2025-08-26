import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const PhotoReactor = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Photo Reactor System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced photochemical reactor for light-driven synthetic reactions and photocatalysis research.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-3xl mr-4">
                  💡
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Multi-wavelength photochemical reactor</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Light Source:</strong> LED array (365, 405, 455 nm)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Temperature:</strong> -10°C to 80°C control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Atmosphere:</strong> Inert gas purging capability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Capacity:</strong> Multiple vial positions</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Photocatalysis</h4>
                  <p className="text-gray-600 text-sm">TiO₂ and other photocatalytic reactions</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Photoredox Chemistry</h4>
                  <p className="text-gray-600 text-sm">Visible light-mediated organic transformations</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Photopolymerization</h4>
                  <p className="text-gray-600 text-sm">UV-initiated polymerization reactions</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Solar Simulation</h4>
                  <p className="text-gray-600 text-sm">Artificial sunlight for material testing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌈</span>
                </div>
                <h4 className="font-semibold text-gray-800">Wavelength Range</h4>
                <p className="text-gray-600">300-700 nm LEDs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Light Intensity</h4>
                <p className="text-gray-600">0-100 mW/cm² adjustable</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Temperature Control</h4>
                <p className="text-gray-600">±0.5°C precision</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Multiple LED wavelengths",
                  "Programmable irradiation sequences",
                  "Temperature monitoring and control",
                  "Gas inlet/outlet ports",
                  "Magnetic stirring capability",
                  "Real-time reaction monitoring"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Safety Features</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">UV Protection</h4>
                  <p className="text-gray-600 text-sm">Enclosed chamber with safety interlocks</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Gas Safety</h4>
                  <p className="text-gray-600 text-sm">Pressure relief and gas monitoring</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Emergency Stop</h4>
                  <p className="text-gray-600 text-sm">Immediate shutdown capability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule photochemical reactions or discuss your research requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Photo Reactor
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300">
                Safety Training
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PhotoReactor;
