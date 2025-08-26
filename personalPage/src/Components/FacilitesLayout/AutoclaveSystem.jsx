import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const AutoclaveSystem = () => {
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
              Autoclave System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Steam sterilization systems for equipment, media, and glassware sterilization in research applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-3xl shadow-lg">
                  🔥
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Specifications</h2>
                  <p className="text-gray-600">High-pressure steam sterilization</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Chamber Volume:</span>
                  <span className="text-purple-600 font-medium">50-100 Liters</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Temperature:</span>
                  <span className="text-purple-600 font-medium">121-134°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Pressure:</span>
                  <span className="text-purple-600 font-medium">15-30 PSI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Operational</span>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Applications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Glassware Sterilization</h4>
                    <p className="text-sm text-gray-600">Laboratory glassware and equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Media Preparation</h4>
                    <p className="text-sm text-gray-600">Culture media and buffer sterilization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Waste Decontamination</h4>
                    <p className="text-sm text-gray-600">Biological and chemical waste treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Instrument Sterilization</h4>
                    <p className="text-sm text-gray-600">Small instruments and tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cycle Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">⚡</div>
              <h4 className="font-bold text-gray-800 mb-2">Fast Cycle</h4>
              <p className="text-sm text-gray-600">Quick sterilization for urgent needs</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">15-20 minutes</p>
            </div>
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">🔄</div>
              <h4 className="font-bold text-gray-800 mb-2">Standard Cycle</h4>
              <p className="text-sm text-gray-600">Regular sterilization cycle</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">45-60 minutes</p>
            </div>
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">💧</div>
              <h4 className="font-bold text-gray-800 mb-2">Liquid Cycle</h4>
              <p className="text-sm text-gray-600">Special cycle for liquids and media</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">60-90 minutes</p>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="bg-red-50/80 backdrop-blur-lg rounded-2xl p-8 border border-red-200/50 mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-2xl">🔒</span>
              Safety & Operating Procedures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Before Use</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Check door seal and gasket condition</p>
                  <p className="text-sm text-gray-600">• Ensure adequate water level</p>
                  <p className="text-sm text-gray-600">• Select appropriate cycle parameters</p>
                  <p className="text-sm text-gray-600">• Load materials properly with spacing</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Safety Precautions</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Never open door during operation</p>
                  <p className="text-sm text-gray-600">• Allow pressure to release completely</p>
                  <p className="text-sm text-gray-600">• Use heat-resistant gloves when unloading</p>
                  <p className="text-sm text-gray-600">• Report any malfunctions immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Schedule Autoclave Use
            </h2>
            <p className="text-gray-600 mb-6">
              Training required before first use. Contact facility manager to schedule training and reserve time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Request Training
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-600 hover:text-gray-600 transition-all duration-300">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AutoclaveSystem;
