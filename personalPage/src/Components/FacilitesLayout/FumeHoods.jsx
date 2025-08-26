import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const FumeHoods = () => {
  return (
    <>
      <Layout className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              Fume Hoods
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chemical fume hoods providing safe work environments for handling hazardous chemicals and reactions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  💨
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Safety Specifications</h2>
                  <p className="text-gray-600">High-efficiency chemical containment</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Face Velocity:</span>
                  <span className="text-purple-600 font-medium">100-120 fpm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Working Height:</span>
                  <span className="text-purple-600 font-medium">18-24 inches</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Filtration:</span>
                  <span className="text-purple-600 font-medium">HEPA & Carbon</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Operational</span>
                </div>
              </div>
            </div>

            {/* Safety Features */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Safety Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Airflow Monitoring</h4>
                    <p className="text-sm text-gray-600">Continuous airflow velocity monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Emergency Shutdown</h4>
                    <p className="text-sm text-gray-600">Quick-response emergency stop system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Chemical Resistance</h4>
                    <p className="text-sm text-gray-600">Corrosion-resistant materials and coatings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Lighting Integration</h4>
                    <p className="text-sm text-gray-600">LED lighting with emergency backup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Guidelines */}
          <div className="bg-yellow-50/80 backdrop-blur-lg rounded-2xl p-8 border border-yellow-200/50 mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-2xl">⚠️</span>
              Safety Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-sm text-gray-700">• Always work with sash at proper height (18 inches max)</p>
                <p className="text-sm text-gray-700">• Verify airflow indicator before beginning work</p>
                <p className="text-sm text-gray-700">• Keep materials at least 6 inches inside the hood</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">• Report any airflow alarms immediately</p>
                <p className="text-sm text-gray-700">• Use appropriate personal protective equipment</p>
                <p className="text-sm text-gray-700">• Clean up spills immediately and properly</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Fume Hood Access & Training
            </h2>
            <p className="text-gray-600 mb-6">
              All users must complete safety training before using fume hoods. Contact safety officer for certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Safety Training
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-red-500 hover:text-red-600 transition-all duration-300">
                Report Issues
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FumeHoods;
