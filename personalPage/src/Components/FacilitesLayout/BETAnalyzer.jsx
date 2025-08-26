import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const BETAnalyzer = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
              BET Surface Area Analyzer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced surface area and porosity analyzer using nitrogen adsorption-desorption isotherms.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-3xl mr-4">
                  🔬
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Surface area & porosity analysis</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Method:</strong> Nitrogen physisorption at 77K</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Range:</strong> 0.05 to 2000 m²/g</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Pore size:</strong> 0.35 nm to 500 nm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Samples:</strong> Simultaneous 3 samples</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Catalyst Characterization</h4>
                  <p className="text-gray-600 text-sm">Active surface area and pore structure analysis</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Nanomaterial Analysis</h4>
                  <p className="text-gray-600 text-sm">Nanoparticle surface area determination</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Porous Material Study</h4>
                  <p className="text-gray-600 text-sm">MOFs, zeolites, activated carbons</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Pharmaceutical Analysis</h4>
                  <p className="text-gray-600 text-sm">Drug delivery system characterization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📏</span>
                </div>
                <h4 className="font-semibold text-gray-800">Surface Area Range</h4>
                <p className="text-gray-600">0.05-2000 m²/g</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🕳️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Pore Size</h4>
                <p className="text-gray-600">0.35-500 nm</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❄️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Operating Temperature</h4>
                <p className="text-gray-600">77K (liquid nitrogen)</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Analysis Methods</h3>
              <div className="space-y-4">
                {[
                  "BET surface area calculation",
                  "BJH pore size distribution",
                  "t-plot micropore analysis",
                  "Density functional theory (DFT)",
                  "Isotherm data collection",
                  "Multi-point BET analysis"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Sample Requirements</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Amount</h4>
                  <p className="text-gray-600 text-sm">0.05-10 g depending on surface area</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Pretreatment</h4>
                  <p className="text-gray-600 text-sm">Degassing at 100-400°C required</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Form</h4>
                  <p className="text-gray-600 text-sm">Powder, granules, or small pieces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule BET analysis or discuss sample preparation requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule BET Analysis
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-teal-500 hover:text-teal-600 transition-all duration-300">
                Sample Consultation
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BETAnalyzer;
