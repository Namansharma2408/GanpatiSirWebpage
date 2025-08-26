import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const UVVisSpectrometer = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              UV-Vis Spectrometer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ultraviolet-Visible spectroscopy for quantitative analysis and molecular characterization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  🌈
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Technical Specifications</h2>
                  <p className="text-gray-600">UV-Visible spectrophotometer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Wavelength Range:</span>
                  <span className="text-purple-600 font-medium">190-1100 nm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Bandwidth:</span>
                  <span className="text-purple-600 font-medium">1.8 nm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Accuracy:</span>
                  <span className="text-purple-600 font-medium">±0.3 nm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Available</span>
                </div>
              </div>
            </div>

            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Applications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Concentration Determination</h4>
                    <p className="text-sm text-gray-600">Quantitative analysis using Beer's law</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Kinetics Studies</h4>
                    <p className="text-sm text-gray-600">Real-time reaction monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Protein Analysis</h4>
                    <p className="text-sm text-gray-600">Protein concentration and purity assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Quality Control</h4>
                    <p className="text-sm text-gray-600">Pharmaceutical and chemical analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Schedule UV-Vis Analysis</h2>
            <p className="text-gray-600 mb-6">Fast and accurate quantitative analysis for your research needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Analysis
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300">
                Method Development
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UVVisSpectrometer;
