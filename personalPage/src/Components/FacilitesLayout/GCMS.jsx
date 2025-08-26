import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const GCMS = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Gas Chromatography-Mass Spectrometry (GC-MS)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced analytical technique combining gas chromatography separation with mass spectrometric detection for compound identification and quantification.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-3xl mr-4">
                  📈
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Compound identification & quantification</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Separation:</strong> Gas chromatography column</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Detection:</strong> Quadrupole mass spectrometer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Ionization:</strong> Electron impact & chemical ionization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Mass range:</strong> 10-1000 m/z</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Environmental Analysis</h4>
                  <p className="text-gray-600 text-sm">Pesticides, pollutants, and contaminant identification</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Pharmaceutical Testing</h4>
                  <p className="text-gray-600 text-sm">Drug purity, impurity profiling, and metabolite analysis</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Food & Flavor Analysis</h4>
                  <p className="text-gray-600 text-sm">Volatile compounds and food safety testing</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Forensic Science</h4>
                  <p className="text-gray-600 text-sm">Drug testing and trace evidence analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Temperature Range</h4>
                <p className="text-gray-600">40-450°C programmable</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-800">Detection Limit</h4>
                <p className="text-gray-600">pg to ng range</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💾</span>
                </div>
                <h4 className="font-semibold text-gray-800">Library Database</h4>
                <p className="text-gray-600">NIST MS Library included</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Split/splitless injection system",
                  "Automated sample preparation",
                  "Multi-column capability",
                  "Real-time data acquisition",
                  "Quantitative analysis software",
                  "Library search functionality"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Sample Requirements</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Volatile Compounds</h4>
                  <p className="text-gray-600 text-sm">Boiling point &lt; 400°C</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Volume</h4>
                  <p className="text-gray-600 text-sm">0.1 - 2.0 μL injection</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Solvent Compatibility</h4>
                  <p className="text-gray-600 text-sm">Most organic solvents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule GC-MS analysis or discuss your analytical requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Analysis
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-green-500 hover:text-green-600 transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GCMS;
