import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const HPLCSystem = () => {
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
              HPLC System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-Performance Liquid Chromatography for separation, identification, and quantification of compounds.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  📊
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Specifications</h2>
                  <p className="text-gray-600">High-resolution analytical system</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Detection:</span>
                  <span className="text-purple-600 font-medium">UV-Vis, MS, PDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Flow Rate:</span>
                  <span className="text-purple-600 font-medium">0.1-10 mL/min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Pressure Range:</span>
                  <span className="text-purple-600 font-medium">Up to 400 bar</span>
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
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Pharmaceutical Analysis</h4>
                    <p className="text-sm text-gray-600">Drug purity and impurity profiling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Natural Product Isolation</h4>
                    <p className="text-sm text-gray-600">Purification of bioactive compounds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Environmental Monitoring</h4>
                    <p className="text-sm text-gray-600">Pollutant detection and quantification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Food Analysis</h4>
                    <p className="text-sm text-gray-600">Quality control and safety testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Schedule HPLC Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Book time on our HPLC systems for your analytical and preparative needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Reserve System
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Method Development
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HPLCSystem;
