import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'research', label: 'Research', path: '/research' },
    { id: 'publications', label: 'Publications', path: '/publications' },
    { id: 'facilities', label: 'Facilities', path: '/facilities' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Responsive: show sidebar on mobile, glass navbar on desktop
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex fixed mt-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-full z-[9999]">
        <div className="px-8 py-3">
          <div className="flex items-center space-x-6 z-15">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`relative px-4 py-2 rounded-full transition-all z-30 duration-300 text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-white/30 text-gray-800 shadow-sm backdrop-blur-sm border border-white/40'
                    : 'text-gray-600 hover:text-[#341539] hover:bg-gradient-to-r hover:from-purple-100/30 hover:to-blue-100/30 hover:backdrop-blur-sm hover:border hover:border-purple-100/40 hover:shadow-md'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/0 via-blue-200/0 to-indigo-200/0 hover:from-purple-200/5 hover:via-blue-200/5 hover:to-indigo-200/5 transition-all duration-500 pointer-events-none rounded-full"></div>
      </nav>

      {/* Mobile Hamburger Button - Glass Morphism Style */}
      <button
        className="sm:hidden fixed top-6 right-6 z-[10000] p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar - Glass Morphism Style */}
      <div className={`sm:hidden fixed inset-0 z-[9999] transition-all duration-300 ${sidebarOpen ? 'bg-black/20 pointer-events-auto' : 'pointer-events-none bg-transparent'}`}
        style={{ backdropFilter: sidebarOpen ? 'blur(4px)' : 'none' }}
        onClick={() => setSidebarOpen(false)}
      >
        <aside
          className={`absolute top-0 right-0 h-full w-72 backdrop-blur-xl bg-white/10 border-l border-white/20 shadow-2xl transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/20">
            <span className="text-lg font-bold text-gray-700">Navigation</span>
            <button
              className="p-2 rounded-full backdrop-blur-sm bg-white/20 hover:bg-white/30 text-gray-600 border border-white/30 transition-all"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-3 px-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => { handleNavigation(item.path); setSidebarOpen(false); }}
                className={`relative px-4 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-white/30 text-gray-800 shadow-sm backdrop-blur-sm border border-white/40'
                    : 'text-gray-600 hover:text-[#341539] hover:bg-gradient-to-r hover:from-purple-100/30 hover:to-blue-100/30 hover:backdrop-blur-sm hover:border hover:border-purple-100/40 hover:shadow-md'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Subtle glow effect in sidebar */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/5 via-blue-200/5 to-indigo-200/5 pointer-events-none rounded-r-lg"></div>
        </aside>
      </div>
    </>
  );
}