import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const TURBOMOLESoftware = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              TURBOMOLE Quantum Chemistry Software
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced quantum chemistry software package for electronic structure calculations and molecular property prediction.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-3xl mr-4">
                  💻
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Software Overview</h2>
                  <p className="text-gray-600">Quantum chemistry calculations</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Methods:</strong> DFT, HF, MP2, CC calculations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Performance:</strong> Parallel computing support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>System size:</strong> Up to 1000+ atoms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Licenses:</strong> 20 concurrent users</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Reaction Mechanisms</h4>
                  <p className="text-gray-600 text-sm">Transition state searches and pathway analysis</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Electronic Properties</h4>
                  <p className="text-gray-600 text-sm">HOMO-LUMO gaps, ionization potentials</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Molecular Optimization</h4>
                  <p className="text-gray-600 text-sm">Geometry optimization and conformer search</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Spectroscopy Prediction</h4>
                  <p className="text-gray-600 text-sm">IR, UV-Vis, NMR spectral predictions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Computational Methods</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚗️</span>
                </div>
                <h4 className="font-semibold text-gray-800">DFT Methods</h4>
                <p className="text-gray-600">B3LYP, PBE, M06 functionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-semibold text-gray-800">Basis Sets</h4>
                <p className="text-gray-600">def2-SV(P) to def2-TZVPP</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Performance</h4>
                <p className="text-gray-600">Multi-core parallelization</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Efficient SCF convergence algorithms",
                  "Resolution-of-identity approximations", 
                  "Excited state calculations (TD-DFT)",
                  "Solvation model support (COSMO)",
                  "Dispersion correction methods",
                  "Natural bond orbital (NBO) analysis"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">System Requirements</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Operating System</h4>
                  <p className="text-gray-600 text-sm">Linux cluster with 32-128 CPU cores</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Memory Requirements</h4>
                  <p className="text-gray-600 text-sm">8-64 GB RAM per calculation</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Storage</h4>
                  <p className="text-gray-600 text-sm">High-speed scratch disk for temporary files</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Access This Software</h3>
            <p className="text-gray-600 mb-6">
              Contact our computational facility manager to request TURBOMOLE access or schedule training sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Request Access
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300">
                Training Workshop
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TURBOMOLESoftware;
