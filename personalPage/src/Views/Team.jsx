import React, { useState } from 'react';
import Layout from '../Components/Layout';

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
          <div className="md:col-span-2 relative">
            <div className="h-80 md:h-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-sm font-medium">Email</span>
                </button>
              )}
              {member.linkedin && (
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </button>
              )}
              {member.researchgate && (
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition-colors">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.563.754-.563 1.132 0 .377 0 .754.563 1.132.565.375 1.255.565 2.073.565.818 0 1.508-.19 2.073-.565.563-.378.563-.755.563-1.132 0-.378 0-.755-.563-1.132C21.094.19 20.404 0 19.586 0z" />
                  </svg>
                  <span className="text-sm font-medium">ResearchGate</span>
                </button>
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
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full object-cover transition-transform duration-500 hover:scale-110"
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
          { member.role === "PhD" ?
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
          <div className="flex justify-center space-x-3 pt-3 border-t border-gray-200/50">
            {member.email && (
              <button className="p-2 rounded-full bg-blue-100/60 hover:bg-blue-200 text-blue-600 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </button>
            )}
            {member.linkedin && (
              <button className="p-2 rounded-full bg-blue-100/60 hover:bg-blue-200 text-blue-600 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            )}
            {member.researchgate && (
              <button className="p-2 rounded-full bg-green-100/60 hover:bg-green-200 text-green-600 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.563.754-.563 1.132 0 .377 0 .754.563 1.132.565.375 1.255.565 2.073.565.818 0 1.508-.19 2.073-.565.563-.378.563-.755.563-1.132 0-.378 0-.755-.563-1.132C21.094.19 20.404 0 19.586 0z" />
                </svg>
              </button>
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
    image: "/ganpati.jpeg",
    email: "ganapathy@university.edu",
    linkedin: "#",
    researchgate: "#",
    gradientFrom: "from-purple-500",
    gradientTo: "to-blue-600"
  };

  // PhD Students data
  const phdStudents = [
    {
      id: 2,
      name: "Baldau Singh",
      position: "PhD Student",
      role: "PhD",
      department: "Chemistry Department",
      specialization: "Photocatalytic Organic Synthesis,Total synthesis",
      image: "/baldau.jpg",
      email: "baldaus@iitbhilai.ac.in",
      linkedin: "",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600",
      bsc: "Udai Pratap College, Varanasi, UP",
      msc: "Udai Pratap College, Varanasi, UP",
    },
    {
      id: 3,
      name: "Neeraj Tiwari",
      position: "PhD Student",
      role: "PhD",
      department: "Chemistry Department",
      specialization: "Photocatalytic Organic Synthesis",
      image: "/neeraj.jpg",
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
      image: "/piyush.jpg",
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
      image: "/nagraj.jpg",
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
      image: "/abhijit.jpg",
      email: "abhijitpa@iitbhilai.ac.in",
      linkedin: "",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600"
    },
    
  ];

  // Staff data (empty for now, ready for future additions)
  const staff = [];

  return (
    <Layout className="bg-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
            Our Research Team
          </h1>
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

        {/* Staff Section - Empty for now */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Research Staff</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          {staff.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {staff.map((staffMember) => (
                <StudentCard key={staffMember.id} member={staffMember} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/30">
              <div className="text-gray-400 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-3">Research Staff Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">We are expanding our team with experienced research staff. Check back for updates on new team members joining our research group.</p>
            </div>
          )}
        </div>

        {/* Join Team Section */}
        <div className="text-center bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Research Team
          </h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate researchers to join our team. Explore opportunities for PhD and MSc positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              View Open Positions
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;