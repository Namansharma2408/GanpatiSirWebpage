import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const ElementalAnalyzer = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Elemental Analyzer (CHNS-O)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Precise determination of carbon, hydrogen, nitrogen, sulfur, and oxygen content in organic and inorganic samples.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-3xl mr-4">
                  ⚗️
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Combustion-based elemental analysis</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Method:</strong> Flash combustion at 1000°C</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Detection:</strong> Thermal conductivity detector</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Elements:</strong> C, H, N, S, O analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Precision:</strong> ±0.3% absolute</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Compound Characterization</h4>
                  <p className="text-gray-600 text-sm">Molecular formula determination, purity analysis</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Pharmaceutical Quality Control</h4>
                  <p className="text-gray-600 text-sm">API content verification, impurity detection</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Polymer Analysis</h4>
                  <p className="text-gray-600 text-sm">Composition analysis, additive content</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Environmental Samples</h4>
                  <p className="text-gray-600 text-sm">Soil carbon content, organic matter analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="font-semibold text-gray-800">Combustion Temperature</h4>
                <p className="text-gray-600">1000°C ±5°C</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Sample Size</h4>
                <p className="text-gray-600">0.1-30 mg range</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Analysis Time</h4>
                <p className="text-gray-600">6-8 minutes/sample</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Automated sample introduction",
                  "Dynamic flash combustion",
                  "Helium carrier gas system",
                  "Thermal conductivity detection",
                  "Data acquisition software",
                  "Calibration with certified standards"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Sample Requirements</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Amount</h4>
                  <p className="text-gray-600 text-sm">0.1-30 mg depending on element content</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Form</h4>
                  <p className="text-gray-600 text-sm">Solid powders, liquids, viscous materials</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Preparation</h4>
                  <p className="text-gray-600 text-sm">Dry samples, remove volatile solvents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule elemental analysis or discuss sample requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Analysis
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                Sample Consultation
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ElementalAnalyzer;
