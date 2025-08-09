import React from 'react';
import Layout from '../Components/Layout';

const Publications = () => {
  return (
    <Layout className="bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
          Publications
          </h1>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <p className="text-lg text-gray-700 mb-6">
            Recent publications and research contributions to the scientific community.
          </p>
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Recent Publications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800">Advanced Organic Synthesis Methods</h4>
                  <p className="text-sm text-gray-600">Journal of Organic Chemistry, 2024</p>
                  <p className="text-sm text-gray-500 mt-1">DOI: 10.1021/acs.joc.2024.xxxxx</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-800">Catalytic Applications in Green Chemistry</h4>
                  <p className="text-sm text-gray-600">Green Chemistry Journal, 2024</p>
                  <p className="text-sm text-gray-500 mt-1">DOI: 10.1039/D4GC0xxxx</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-gray-800">Novel Materials for Energy Applications</h4>
                  <p className="text-sm text-gray-600">Materials Chemistry A, 2023</p>
                  <p className="text-sm text-gray-500 mt-1">DOI: 10.1039/D3TA0xxxx</p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Conference Presentations</h3>
              <p className="text-gray-600">Selected presentations at national and international conferences.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
