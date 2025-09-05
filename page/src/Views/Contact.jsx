'use client'
import React, { useState } from 'react';
import Layout from '../Components/Layout';
import DatabaseComponent from '../Components/appwrite/database';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-200">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 "></div>
          <div className="relative max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Let's Connect
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to collaborate on groundbreaking research in organic synthesis and catalysis?
                We're always excited to connect with fellow researchers, students, and industry partners.
              </p>
            </div>

            {/* Quick Contact Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">For research inquiries and collaborations</p>
                  <a href="mailto:namans@iitbhilai.ac.in">
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"

                    >
                      Send Email
                    </button>
                  </a>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Schedule a meeting or quick discussion</p>

                  <a href="tel:+911234567890">
                    <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105">
                      Call Now
                    </button>
                  </a>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Located in the Chemistry Department</p>
                  <a
                    href="https://maps.app.goo.gl/47EEeDcVzuvQ21jZ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full hover:from-orange-500 hover:to-red-500 transition-all duration-200 transform hover:scale-105">
                      Get Directions
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Contact Information */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Contact Details
              </h2>
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Chemistry Department<br />
                        IIT Bhilai<br />
                        Chhattisgarh, India - 492015
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">ganapathy.d@iitbhilai.ac.in</p>
                      <p className="text-sm text-gray-500 mt-1">For academic and research inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 XXXXX XXXXX</p>
                      <p className="text-sm text-gray-500 mt-1">Available during office hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours & Social */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Connect With Us
              </h2>

              {/* Office Hours */}
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-800">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-800">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Our Research</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">Twitter</span>
                  </a>

                  <a href="#" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">LinkedIn</span>
                  </a>

                  <a href="#" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">ResearchGate</span>
                  </a>

                  <a href="#" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-200">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 6.627 5.374 12 12 12s12-5.373 12-12c0-6.627-5.374-12-12-12zm4.11 16.938l-1.057-.105c-.901-.09-1.043-.841-.555-1.244.488-.402.486-1.062-.055-1.228-.541-.166-.775-.75-.775-.75s-.234.584-.775.75c-.541.166-.543.826-.055 1.228.488.403.346 1.154-.555 1.244l-1.057.105c-.541.054-.775.584-.775.75s.234.584.775.75l1.057.105c.901.09 1.043.841.555 1.244-.488.402-.486 1.062.055 1.228.541.166.775.75.775.75s.234-.584.775-.75c.541-.166.543-.826.055-1.228-.488-.403-.346-1.154.555-1.244l1.057-.105c.541-.054.775-.584.775-.75s-.234-.584-.775-.75zm-6.11 0l-1.057-.105c-.901-.09-1.043-.841-.555-1.244.488-.402.486-1.062-.055-1.228-.541-.166-.775-.75-.775-.75s-.234.584-.775.75c-.541.166-.543.826-.055 1.228.488.403.346 1.154-.555 1.244l-1.057.105c-.541.054-.775.584-.775.75s.234.584.775.75l1.057.105c.901.09 1.043.841.555 1.244-.488.402-.486 1.062.055 1.228.541.166.775.75.775.75s.234-.584.775-.75c.541-.166.543-.826.055-1.228-.488-.403-.346-1.154.555-1.244l1.057-.105c.541-.054.775-.584.775-.75s-.234-.584-.775-.75z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DatabaseComponent/>
      </div>
    </Layout>
  );
};

export default Contact;
