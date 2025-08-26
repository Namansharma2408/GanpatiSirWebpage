import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const AnalyticalBalance = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mb-4">
              Analytical Balance System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-precision analytical balance for accurate weighing of chemicals, samples, and reagents in analytical work.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-3xl mr-4">
                  ⚖️
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">High-precision analytical weighing</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Precision:</strong> 0.1 mg (0.0001 g)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Capacity:</strong> 220 g maximum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Calibration:</strong> Internal automatic calibration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                  <span className="text-gray-700"><strong>Environment:</strong> Anti-vibration table</span>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Applications</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Chemical Analysis</h4>
                  <p className="text-gray-600 text-sm">Precise weighing for quantitative analysis</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Preparation</h4>
                  <p className="text-gray-600 text-sm">Accurate sample weighing for experiments</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Solution Preparation</h4>
                  <p className="text-gray-600 text-sm">Precise reagent weighing for standard solutions</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Control</h4>
                  <p className="text-gray-600 text-sm">Product purity and content verification</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-800">Readability</h4>
                <p className="text-gray-600">0.1 mg precision</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Stabilization Time</h4>
                <p className="text-gray-600">≤ 3 seconds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📏</span>
                </div>
                <h4 className="font-semibold text-gray-800">Pan Size</h4>
                <p className="text-gray-600">Ø90 mm stainless steel</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Internal automatic calibration",
                  "Temperature drift compensation",
                  "Anti-static ionizer",
                  "Draft shield with glass doors",
                  "LCD display with backlight",
                  "Data logging capability"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Best Practices</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Environmental Control</h4>
                  <p className="text-gray-600 text-sm">Minimize air currents and temperature fluctuations</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sample Handling</h4>
                  <p className="text-gray-600 text-sm">Use tweezers and avoid touching samples directly</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Calibration</h4>
                  <p className="text-gray-600 text-sm">Regular calibration with certified weights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our facility manager to schedule analytical balance usage or receive training on proper weighing techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Reserve Balance
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-500 hover:text-gray-600 transition-all duration-300">
                Training Session
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AnalyticalBalance;
