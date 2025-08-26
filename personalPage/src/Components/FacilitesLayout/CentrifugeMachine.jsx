import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const CentrifugeMachine = () => {
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
              Centrifuge Machine
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-speed centrifuges for sample preparation, purification, and separation of biological and chemical samples.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment Details */}
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  🔄
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Machine Specifications</h2>
                  <p className="text-gray-600">High-capacity separation system</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Max Speed:</span>
                  <span className="text-purple-600 font-medium">15,000 rpm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Max RCF:</span>
                  <span className="text-purple-600 font-medium">21,000 x g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Capacity:</span>
                  <span className="text-purple-600 font-medium">24 x 15mL tubes</span>
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
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Sample Preparation</h4>
                    <p className="text-sm text-gray-600">Pellet formation and supernatant separation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Protein Purification</h4>
                    <p className="text-sm text-gray-600">Isolation and concentration of proteins</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Cell Harvesting</h4>
                    <p className="text-sm text-gray-600">Collection and washing of cellular material</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Phase Separation</h4>
                    <p className="text-sm text-gray-600">Separation of immiscible liquid phases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Rotors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">⚙️</div>
              <h4 className="font-bold text-gray-800 mb-2">Fixed Angle Rotor</h4>
              <p className="text-sm text-gray-600">High-speed pelleting and separations</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">24 x 1.5/2.0mL</p>
            </div>
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">🔄</div>
              <h4 className="font-bold text-gray-800 mb-2">Swing-Out Rotor</h4>
              <p className="text-sm text-gray-600">Gentle separations and gradients</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">6 x 15mL</p>
            </div>
            <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl">🧪</div>
              <h4 className="font-bold text-gray-800 mb-2">Microplate Rotor</h4>
              <p className="text-sm text-gray-600">96-well plate centrifugation</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">2 x 96-well</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Book Centrifuge Time
            </h2>
            <p className="text-gray-600 mb-6">
              Reserve time on our centrifuge systems for your sample preparation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Reserve Time
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
                User Manual
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CentrifugeMachine;
