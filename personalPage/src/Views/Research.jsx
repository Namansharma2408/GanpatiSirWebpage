import React from 'react';
import Layout from '../Components/Layout';

const Research = () => {
  return (
    <Layout className="bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
          Research Areas
        </h1>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <p className="text-lg text-gray-700 mb-6">
            Our research focuses on cutting-edge chemistry and innovative solutions for real-world problems.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-3">Organic Chemistry</h3>
              <p className="text-gray-600">Advanced synthesis and molecular design for pharmaceutical applications.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-3">Materials Science</h3>
              <p className="text-gray-600">Development of novel materials with unique properties and applications.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-3">Catalysis</h3>
              <p className="text-gray-600">Design and optimization of catalytic processes for sustainable chemistry.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-3">Green Chemistry</h3>
              <p className="text-gray-600">Environmentally friendly chemical processes and sustainable practices.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
