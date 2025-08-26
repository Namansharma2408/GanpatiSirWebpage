import React from 'react';
import Layout from '../Layout';
import GlassEffectBg from '../Landing/GlassEffectBg';

const FumeHood = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Chemical Fume Hood System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced ventilation system for safe handling of hazardous chemicals and protection of laboratory personnel.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Overview */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white text-3xl mr-4">
                  💨
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
                  <p className="text-gray-600">Chemical containment & ventilation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Airflow:</strong> 100-120 fpm face velocity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Working Area:</strong> 6ft × 2.5ft workspace</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Sash:</strong> Vertical rising with stops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>Material:</strong> Chemical-resistant epoxy</span>
                </div>
              </div>
            </div>

            {/* Right Column - Safety Features */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Safety Features</h3>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Airflow Monitoring</h4>
                  <p className="text-gray-600 text-sm">Continuous face velocity monitoring with alarms</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Emergency Shutoff</h4>
                  <p className="text-gray-600 text-sm">Emergency gas and electrical shutoff system</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Fire Suppression</h4>
                  <p className="text-gray-600 text-sm">Built-in fire suppression system</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Spill Containment</h4>
                  <p className="text-gray-600 text-sm">Raised lip design for spill containment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌬️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Face Velocity</h4>
                <p className="text-gray-600">100-120 fpm optimal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Lighting</h4>
                <p className="text-gray-600">LED vapor-proof fixtures</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔌</span>
                </div>
                <h4 className="font-semibold text-gray-800">Power</h4>
                <p className="text-gray-600">110V & 220V outlets</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Equipment Features</h3>
              <div className="space-y-4">
                {[
                  "Constant airflow control system",
                  "Chemical-resistant work surface",
                  "Built-in cup sink with vacuum",
                  "Gas and air service fixtures",
                  "Interior lighting with switch",
                  "Rear baffle exhaust design"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Usage Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Sash Position</h4>
                  <p className="text-gray-600 text-sm">Keep sash at recommended working height (18")</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Work Practice</h4>
                  <p className="text-gray-600 text-sm">Keep materials 6" inside the hood opening</p>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                  <h4 className="font-semibold text-gray-800 mb-2">Cleanup</h4>
                  <p className="text-gray-600 text-sm">Clean spills immediately and decontaminate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book This Facility</h3>
            <p className="text-gray-600 mb-6">
              Contact our safety officer to schedule fume hood time or receive training on proper usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Reserve Fume Hood
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-red-500 hover:text-red-600 transition-all duration-300">
                Safety Training
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FumeHood;
