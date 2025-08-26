import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const RotaryEvaporator = () => {
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
              Rotary Evaporator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rotary evaporators for efficient and gentle removal of solvents from samples under reduced pressure.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  🌪️
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Specifications</h2>
                  <p className="text-gray-600">Automated evaporation system</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Flask Capacity:</span>
                  <span className="text-purple-600 font-medium">50mL - 1L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Temperature Range:</span>
                  <span className="text-purple-600 font-medium">-10°C to +100°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Vacuum:</span>
                  <span className="text-purple-600 font-medium">1-1000 mbar</span>
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
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Solvent Removal</h4>
                    <p className="text-sm text-gray-600">Efficient removal of organic solvents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Sample Concentration</h4>
                    <p className="text-sm text-gray-600">Concentration of solutions and extracts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Gentle Drying</h4>
                    <p className="text-sm text-gray-600">Heat-sensitive compound processing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Crystallization</h4>
                    <p className="text-sm text-gray-600">Controlled solvent evaporation for crystal growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operation Guide */}
          <div className="bg-blue-50/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200/50 mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-2xl">📋</span>
              Operation Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Setup Procedure</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">1. Connect chiller and vacuum pump</p>
                  <p className="text-sm text-gray-600">2. Set appropriate temperature and rotation</p>
                  <p className="text-sm text-gray-600">3. Ensure proper flask attachment</p>
                  <p className="text-sm text-gray-600">4. Start vacuum gradually</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Safety Precautions</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">• Use appropriate glassware and clips</p>
                  <p className="text-sm text-gray-600">• Monitor for bumping and foaming</p>
                  <p className="text-sm text-gray-600">• Never exceed maximum temperature</p>
                  <p className="text-sm text-gray-600">• Release vacuum before stopping rotation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Reserve Rotary Evaporator
            </h2>
            <p className="text-gray-600 mb-6">
              Book time on our rotary evaporators for your solvent removal and concentration needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Equipment
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                Training Required
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RotaryEvaporator;
