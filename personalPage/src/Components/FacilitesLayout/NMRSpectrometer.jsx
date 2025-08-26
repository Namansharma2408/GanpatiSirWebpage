import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const NMRSpectrometer = () => {
  return (
    <>
      <Layout className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              NMR Spectrometer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced Nuclear Magnetic Resonance Spectroscopy for molecular structure determination and analysis.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  🧲
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Equipment Specifications</h2>
                  <p className="text-gray-600">High-field NMR system</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Field Strength:</span>
                  <span className="text-purple-600 font-medium">400-600 MHz</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Sample Types:</span>
                  <span className="text-purple-600 font-medium">Liquid & Solid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Temperature Range:</span>
                  <span className="text-purple-600 font-medium">-150°C to +150°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Available</span>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Applications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Structure Elucidation</h4>
                    <p className="text-sm text-gray-600">Determine molecular structures and connectivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Purity Analysis</h4>
                    <p className="text-sm text-gray-600">Quantitative analysis of compound purity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Reaction Monitoring</h4>
                    <p className="text-sm text-gray-600">Track reaction progress and kinetics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Polymer Analysis</h4>
                    <p className="text-sm text-gray-600">Characterize polymer structure and dynamics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Request NMR Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our NMR facility manager to schedule measurements or discuss your analytical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book NMR Time
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-green-500 hover:text-green-600 transition-all duration-300">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NMRSpectrometer;
