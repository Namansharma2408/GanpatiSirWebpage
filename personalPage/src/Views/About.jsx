import React from 'react';
import Layout from '../Components/Layout';

const About = () => {
  return (
    <Layout className="bg-gray-300">
      <div className="max-w-6xl mx-auto bg-gray-300">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
          About Dr. Ganapathy D
        </h1>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Academic Background</h2>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Ganapathy D is a distinguished chemistry professor with over 15 years of experience in research and academia. 
                His expertise spans across various domains of chemistry, with a particular focus on organic synthesis and materials science.
              </p>
              <div className="space-y-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <h3 className="font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600">Ph.D. in Chemistry - Indian Institute of Science</p>
                  <p className="text-gray-600">M.Sc. in Chemistry - University of Mumbai</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <h3 className="font-semibold text-gray-800">Research Interests</h3>
                  <p className="text-gray-600">Organic Synthesis, Catalysis, Green Chemistry, Materials Science</p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Professor (2020 - Present)</h4>
                  <p className="text-sm text-gray-600">Chemistry Department, University</p>
                </div>
                <div>
                  <h4 className="font-medium">Associate Professor (2015 - 2020)</h4>
                  <p className="text-sm text-gray-600">Chemistry Department, University</p>
                </div>
                <div>
                  <h4 className="font-medium">Assistant Professor (2010 - 2015)</h4>
                  <p className="text-sm text-gray-600">Chemistry Department, University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
