import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const NMR60MHz = () => {
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
              NMR 60MHz Spectrometer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuclear Magnetic Resonance spectroscopy for structure determination and molecular analysis at 60 MHz frequency.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  🧲
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Technical Specifications</h2>
                  <p className="text-gray-600">Compact NMR system</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Frequency:</span>
                  <span className="text-purple-600 font-medium">60 MHz (1H)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Magnetic Field:</span>
                  <span className="text-purple-600 font-medium">1.41 Tesla</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Sample Size:</span>
                  <span className="text-purple-600 font-medium">5mm tubes</span>
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
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Structure Identification</h4>
                    <p className="text-sm text-gray-600">Determine molecular structure and functional groups</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Purity Assessment</h4>
                    <p className="text-sm text-gray-600">Quantitative analysis of sample purity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Reaction Monitoring</h4>
                    <p className="text-sm text-gray-600">Track reaction progress and products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Quality Control</h4>
                    <p className="text-sm text-gray-600">Routine analysis and characterization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Preparation */}
          <div className="bg-blue-50/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200/50 mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-2xl">🧪</span>
              Sample Preparation Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Sample Requirements</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Sample volume: 0.5-1.0 mL</p>
                  <p className="text-sm text-gray-600">• Concentration: 10-50 mg/mL</p>
                  <p className="text-sm text-gray-600">• Solvent: CDCl₃, DMSO-d₆, D₂O</p>
                  <p className="text-sm text-gray-600">• Clean 5mm NMR tubes required</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Best Practices</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Filter samples to remove particles</p>
                  <p className="text-sm text-gray-600">• Dry samples thoroughly before dissolution</p>
                  <p className="text-sm text-gray-600">• Use appropriate deuterated solvents</p>
                  <p className="text-sm text-gray-600">• Label tubes clearly with sample information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Book NMR Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Schedule your NMR measurements and get expert assistance with sample preparation and data interpretation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Analysis
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Training Required
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NMR60MHz;
