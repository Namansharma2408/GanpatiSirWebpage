import React, { useState } from 'react';
import Layout from '../Components/Layout';

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
    <Layout className="bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold text-gray-800">Office Address</h3>
                <p className="text-gray-600">Chemistry Department<br />University Campus<br />City, State - 123456</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">ganapathy.d@university.edu</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <h3 className="font-semibold text-gray-800">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
