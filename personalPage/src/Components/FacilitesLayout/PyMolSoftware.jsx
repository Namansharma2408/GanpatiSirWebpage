import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const PyMolSoftware = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              PyMOL Molecular Visualization Software
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced molecular visualization and analysis platform for structural biology and chemistry research.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-3xl mr-4">
                  🎨
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Software Overview</h2>
                  <p className="text-gray-600">3D molecular visualization</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Graphics:</strong> OpenGL-accelerated rendering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>File formats:</strong> PDB, CIF, MOL2, SDF</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Scripting:</strong> Python integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Licenses:</strong> 10 educational licenses</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Protein Structure Analysis</h4>
                  <p className="text-gray-600 text-sm">3D structure visualization and annotation</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Drug Design Visualization</h4>
                  <p className="text-gray-600 text-sm">Ligand binding site analysis and docking</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Publication Graphics</h4>
                  <p className="text-gray-600 text-sm">High-quality images for research publications</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Educational Content</h4>
                  <p className="text-gray-600 text-sim">Teaching and learning molecular structures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Visualization Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold text-gray-800">Rendering Styles</h4>
                <p className="text-gray-600">Cartoon, surface, stick, sphere</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎬</span>
                </div>
                <h4 className="font-semibold text-gray-800">Animation</h4>
                <p className="text-gray-600">Movie creation and trajectory</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-800">Color Schemes</h4>
                <p className="text-gray-600">Element, B-factor, custom</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Real-time 3D structure manipulation",
                  "Multiple selection and alignment tools",
                  "Surface and cavity analysis",
                  "Ray-traced image rendering",
                  "Sequence-structure correlation",
                  "Plugin and script extensibility"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Analysis Tools</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Distance Measurements</h4>
                  <p className="text-gray-600 text-sm">Bond lengths, angles, and dihedrals</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Structural Alignment</h4>
                  <p className="text-gray-600 text-sm">RMSD calculation and superposition</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Electrostatics</h4>
                  <p className="text-gray-600 text-sm">Surface potential visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Access This Software</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to request PyMOL access or schedule molecular visualization training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Request Access
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-300">
                Visualization Workshop
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PyMolSoftware;
