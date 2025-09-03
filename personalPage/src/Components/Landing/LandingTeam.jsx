import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const StudentCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` relative group transition-all duration-300 transform ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-2xl blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-0'
        }`}></div>

      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-80">
        {/* Profile Image */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
          {/* Contact Links - Compact */}
          <div className="flex justify-center space-x-3 pt-3 border-t border-gray-200/50">
            {member.email && (
              <button className="p-2 rounded-full bg-blue-100/60 hover:bg-blue-200 text-blue-600 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const LandingTeam = () => {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)

  const arr = [
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
    },
    {
      id: 5,
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
      id: 6,
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

  useEffect(() => {
    const container = containerRef.current
    const slider = sliderRef.current
    if (!container || !slider) return

    const setupAnimation = () => {
      // Filter out the empty entry (id: 1) for calculation
      const activeStudents = arr.filter(student => student.id !== 1)

      // Calculate positions for right-to-left animation
      const cardWidth = 400 // Increased card width with spacing
      const containerWidth = container.offsetWidth
      const rightOffset = containerWidth // Position first card at the absolute right edge
      const totalMove = cardWidth * activeStudents.length

      // Kill existing ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())

      // Set initial position to start from right edge
      gsap.set(slider, { x: rightOffset })

      gsap.to(slider, {
        x: rightOffset - totalMove, // Move from right edge to final position (leftward)
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${window.innerHeight * 2}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      })
    }

    // Initial setup
    setupAnimation()

    // Handle resize
    const handleResize = () => {
      setupAnimation()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [arr.length])

  return (
    <div className='relative'>
      {/* Sticky heading that becomes fixed when reaching navbar, but unsticks when hitting cards */}
      <div className="sticky top-16 z-40  backdrop-blur-md  transition-all duration-300"
        style={{
          position: 'sticky',
          top: '4rem',
          bottom: 'auto',

        }}>
        <div className="container mx-auto px-4 py-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Meet our dedicated team of researchers and students working on cutting-edge projects in organic synthesis and catalysis.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to push cards down and create unstick effect */}
      <div className="h-32"></div>

      {/* Team cards section */}
      <div ref={containerRef} className='overflow-hidden w-full h-screen flex items-end justify-end'>
        <div ref={sliderRef} className='flex items-end justify-end space-x-12 h-full'>
          {arr.map((student) =>
            student.id === 1 ? null : (
              <div key={student.id} className="flex items-center justify-center flex-shrink-0">
                <StudentCard member={student} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingTeam