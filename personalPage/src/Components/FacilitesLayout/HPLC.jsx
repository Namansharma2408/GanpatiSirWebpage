import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const HPLC = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              High Performance Liquid Chromatography (HPLC)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced liquid chromatography system for separation, identification, and quantification of compounds in complex mixtures.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-3xl mr-4">
                  💧
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Liquid phase separation analysis</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Pump:</strong> Binary gradient system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Detector:</strong> UV-Vis & Fluorescence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Columns:</strong> C18, C8, Phenyl, CN available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Flow rate:</strong> 0.1-10 mL/min</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Pharmaceutical Analysis</h4>
                  <p className="text-gray-600 text-sm">Drug purity, dissolution testing, stability studies</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Biomolecule Separation</h4>
                  <p className="text-gray-600 text-sm">Proteins, peptides, and amino acid analysis</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Food & Beverage Testing</h4>
                  <p className="text-gray-600 text-sm">Additives, preservatives, vitamin analysis</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Environmental Monitoring</h4>
                  <p className="text-gray-600 text-sm">Water quality, pesticide residues</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-semibold text-gray-800">Detection Range</h4>
                <p className="text-gray-600">190-800 nm UV-Vis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚗️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Injection Volume</h4>
                <p className="text-gray-600">1-100 μL variable</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Column Oven</h4>
                <p className="text-gray-600">5-80°C ±0.1°C</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Automated sample injection",
                  "Gradient and isocratic capability",
                  "Multiple column switching",
                  "Data acquisition software",
                  "Peak integration and reporting",
                  "Method development tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Columns</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">C18 Reverse Phase</h4>
                  <p className="text-gray-600 text-sm">General purpose, hydrophobic compounds</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Phenyl Column</h4>
                  <p className="text-gray-600 text-sm">Aromatic compound separation</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Ion Exchange</h4>
                  <p className="text-gray-600 text-sm">Charged molecule analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule HPLC analysis or method development sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Analysis
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

export default HPLC;
