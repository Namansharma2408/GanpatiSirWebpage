'use client'
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../Components/Layout';
import { a } from 'framer-motion/client';

// Team Member Card Component for Professor (Full Width)
const ProfessorCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group transition-all duration-300 transform ${isHovered ? 'scale-[1.02] -translate-y-1' : 'scale-100'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-3xl blur-lg transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-0'
        }`}></div>

      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Large Profile Image */}
          <div className="md:col-span-2 relative ">
            <div className="h-80 md:h-full overflow-hidden">
              <LazyLoadImage
                src={member.image}
                alt={member.name}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                width="100%"
                height="100%"
              />
              {/* Image overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-transparent via-transparent to-black/10"></div>

            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-3 p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h2>
              <p className="text-lg text-purple-600 font-semibold mb-2">{member.position}</p>
              <p className="text-gray-600">{member.department}</p>
            </div>

            {/* Research Focus */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Research Focus</h3>
              <p className="text-gray-600 leading-relaxed">{member.specialization}</p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex space-x-4">
              {member.email && (
                <a href={`mailto:${member.email}`}>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span className="text-sm font-medium">Email</span>
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Team Member Card Component for Students and Staff
const StudentCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group transition-all duration-300 transform ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-2xl blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-0'
        }`}></div>

      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Profile Image */}
        <div className="relative h-80 overflow-hidden flex items-center justify-center">
          <LazyLoadImage
            src={member.image}
            alt={member.name}
            effect="blur"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            width="100%"
            height="320"
          />
          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          {/* Role badge */}
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/90 text-gray-700 border border-white/50`}>
            {member.role}
          </div>
        </div>

        <div className="p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-sm text-gray-600 font-medium">{member.position}</p>
          </div>

          {/* Research Focus - Brief */}
          <div className="mb-4">
            <p className="text-s text-gray-900 leading-relaxed line-clamp-2">
              Research Area : {member.specialization.split('.')[0]}.
            </p>
          </div>
          {member.role === "PhD" ?
            <div className="mb-4">
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                BSc : {member.bsc}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                MSc : {member.msc}
              </p>
            </div>
            :
            ""

          }

          {/* Contact Links - Compact */}
          <div className="flex justify-center space-x-3 pt-3 border-t border-gray-200/50" >
            {member.email && (
              <a href={`mailto:${member.email}`}>
                <button className="p-2 rounded-full bg-blue-100/60 hover:bg-blue-200 text-blue-600 transition-colors">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  // Principal Investigator data
  const principalInvestigator = {
    id: 1,
    name: "Dr. Ganapathy D",
    position: "Principal Investigator",
    role: "PI",
    department: "Chemistry Department",
    specialization: "Organic Chemistry, Medicinal Chemistry, and Drug Discovery. Leading groundbreaking research in developing novel synthetic methodologies and bioactive compounds. With over 15 years of experience, Dr. Ganapathy has published numerous papers in high-impact journals and has been instrumental in advancing chemical research in medicinal applications.",
    skills: ["Organic Synthesis", "Drug Discovery", "Spectroscopy", "Research Leadership", "Grant Writing", "Team Management"],
    image: "/ganpathi.webp",
    email: "ganapathy@university.edu",
    linkedin: "#",
    researchgate: "#",
    gradientFrom: "from-purple-500",
    gradientTo: "to-blue-600"
  };

  // PhD Students data
  const phdStudents = [
    {
      id: 1,
      name: "Baldau Singh",
      position: "PhD Student",
      role: "PhD",
      department: "Chemistry Department",
      specialization: "Photocatalytic Organic Synthesis,Total synthesis",
      image: "/baldau.webp",
      email: "baldaus@iitbhilai.ac.in",
      linkedin: "",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600",
      bsc: "Udai Pratap College, Varanasi, UP",
      msc: "Udai Pratap College, Varanasi, UP",
    },
    {
      id: 2,
      name: "Neeraj Tiwari",
      position: "PhD Student",
      role: "PhD",
      department: "Chemistry Department",
      specialization: "Photocatalytic Organic Synthesis",
      image: "/neeraj.webp",
      email: "neerajbr@iitbhilai.ac.in",
      bsc: "Veer Narmad South  Gujarat University",
      msc: "Sardar Patel University",
      linkedin: "",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600"
    },
    {
      id: 3,
      name: "Piyush Pandey",
      position: "PhD Student",
      role: "PhD",
      department: "Chemistry Department",
      specialization: "Electrochemical Organic Synthesis and Total Synthesis",
      image: "/piyush.webp",
      email: "piyushp@iitbhilai.ac.in",
      linkedin: "",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600",
      bsc: "Udai Pratap College, Varanasi, Uttar Pradesh",
      msc: "Udai Pratap College, Varanasi, Uttar Pradesh",
    }
  ];

  // MSc Students data
  const mscStudents = [
    {
      id: 4,
      name: "Nagarajan.S",
      position: "MSc Student",
      role: "MSc",
      department: "Chemistry Department",
      specialization: "Electrochemical Organic Synthesis",
      image: "/nagarajan.webp",
      email: "nagarajanan@iitbhilai.ac.in",
      linkedin: "",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-600"
    },
    {
      id: 5,
      name: "Abhijit Pandey",
      position: "MSc Student",
      role: "MSc",
      department: "Chemistry Department",
      specialization: "Materials Chemistry and Nanotechnology. Working on synthesis of nanomaterials for energy applications.",
      image: "/abhijit.webp",
      email: "abhijitpa@iitbhilai.ac.in",
      linkedin: "",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600"
    },

  ];

  // Staff data (empty for now, ready for future additions)
  const staff = [];

  return (
    <Layout>
      <div className="max-w-full h-1/2 mx-auto bg-slate-200">
        {/* Header Section */}
        <div className="relative text-center mb-16 overflow-hidden rounded-3xl h-[50vh] min-h-[400px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
            style={{ backgroundImage: "url('/completeTeam.webp')" }}
          ></div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full ">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Our Research Team
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Meet the dedicated researchers driving innovation in organic chemistry and drug discovery
              </p>
            </div>
          </div>
        </div>

        {/* Principal Investigator Section - Full Width Featured Card */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Principal Investigator</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <ProfessorCard member={principalInvestigator} />
        </div>

        {/* PhD Students Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">PhD Students</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {phdStudents.map((student) => (
              <StudentCard key={student.id} member={student} />
            ))}
          </div>
        </div>

        {/* MSc Students Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">MSc Students</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {mscStudents.map((student) => (
              <StudentCard key={student.id} member={student} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;