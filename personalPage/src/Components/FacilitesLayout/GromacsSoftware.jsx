import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const GromacsSoftware = () => {
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
              GROMACS Molecular Dynamics Software
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-performance molecular dynamics simulation package for biomolecular systems and materials research.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-3xl mr-4">
                  🧬
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Software Overview</h2>
                  <p className="text-gray-600">Molecular dynamics simulations</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Performance:</strong> GPU-accelerated computing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>System size:</strong> Millions of atoms capability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Force fields:</strong> CHARMM, AMBER, GROMOS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>License:</strong> Open source, unlimited use</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Protein Folding Studies</h4>
                  <p className="text-gray-600 text-sm">Conformational dynamics and stability analysis</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Drug-Target Interactions</h4>
                  <p className="text-gray-600 text-sm">Binding affinity and mechanism studies</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Membrane Dynamics</h4>
                  <p className="text-gray-600 text-sm">Lipid bilayer and membrane protein simulations</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Materials Science</h4>
                  <p className="text-gray-600 text-sm">Polymer properties and surface interactions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Simulation Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-800">Ensemble Methods</h4>
                <p className="text-gray-600">NPT, NVT, NVE ensembles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Time Scales</h4>
                <p className="text-gray-600">Nanosecond to microsecond</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Hardware</h4>
                <p className="text-gray-600">CPU and GPU clusters</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "MPI and OpenMP parallelization",
                  "CUDA and OpenCL GPU acceleration",
                  "Free energy perturbation (FEP)",
                  "Umbrella sampling and metadynamics",
                  "Implicit and explicit solvent models",
                  "Advanced analysis tools suite"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Analysis Tools</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Trajectory Analysis</h4>
                  <p className="text-gray-600 text-sm">RMSD, RMSF, radius of gyration</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Structural Analysis</h4>
                  <p className="text-gray-600 text-sm">Secondary structure, clustering</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Thermodynamics</h4>
                  <p className="text-gray-600 text-sm">Energy decomposition, heat capacity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Access This Software</h3>
            <p className="text-gray-600 mb-6">
              Contact our computational facility manager to request GROMACS access or schedule molecular dynamics training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Request Access
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-green-500 hover:text-green-600 transition-all duration-300">
                MD Tutorial
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GromacsSoftware;
