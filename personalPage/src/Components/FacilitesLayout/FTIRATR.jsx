import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const FTIRATR = () => {
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
              FTIR-ATR Spectrometer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fourier Transform Infrared Spectroscopy with Attenuated Total Reflection for rapid molecular identification and analysis.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  📊
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Technical Specifications</h2>
                  <p className="text-gray-600">ATR-FTIR analysis system</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Spectral Range:</span>
                  <span className="text-purple-600 font-medium">4000-400 cm⁻¹</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Resolution:</span>
                  <span className="text-purple-600 font-medium">0.5 cm⁻¹</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Crystal:</span>
                  <span className="text-purple-600 font-medium">Diamond</span>
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
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Functional Group Analysis</h4>
                    <p className="text-sm text-gray-600">Identify molecular functional groups</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Polymer Characterization</h4>
                    <p className="text-sm text-gray-600">Analysis of polymer structures and properties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Material Identification</h4>
                    <p className="text-sm text-gray-600">Rapid identification of unknown materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Quality Control</h4>
                    <p className="text-sm text-gray-600">Routine analysis and contamination detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages of ATR */}
          <div className="bg-purple-50/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/50 mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-2xl">✨</span>
              ATR Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Sample Benefits</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• No sample preparation required</p>
                  <p className="text-sm text-gray-600">• Direct analysis of solids and liquids</p>
                  <p className="text-sm text-gray-600">• Non-destructive measurement</p>
                  <p className="text-sm text-gray-600">• Small sample size needed</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Technical Benefits</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Rapid analysis (&lt; 5 minutes)</p>
                  <p className="text-sm text-gray-600">• High reproducibility</p>
                  <p className="text-sm text-gray-600">• Diamond crystal durability</p>
                  <p className="text-sm text-gray-600">• Easy cleaning between samples</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Schedule FTIR-ATR Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Quick and efficient molecular analysis with minimal sample preparation required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Analysis
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-300">
                View Spectral Database
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FTIRATR;
