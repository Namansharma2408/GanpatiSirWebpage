import React from 'react';
import Layout from '../Components/Layout';

const Team = () => {
  return (
    <Layout className="bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
          Our Team
        </h1>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <p className="text-lg text-gray-700 mb-6">
            Meet our dedicated team of researchers and professionals working in the field of chemistry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team member cards will go here */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Dr. Ganapathy D</h3>
              <p className="text-gray-600 mb-2">Principal Investigator</p>
              <p className="text-sm text-gray-500">Chemistry Department</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
