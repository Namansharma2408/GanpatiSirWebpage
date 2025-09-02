import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'team', label: 'Team', path: '/team' },
  { id: 'research', label: 'Research', path: '/research' },
  { id: 'publications', label: 'Publications', path: '/publications' },
  { id: 'facilities', label: 'Facilities', path: '/facilities' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
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
      {/* Mobile Logo Section - Glass Morphism Style */}
      <div className="xl:hidden fixed  left-6 z-[9999] flex items-center">
        <div className="relative group">
          {/* Background glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Main logo container */}
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-2xl px-3 py-2 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center">
              {/* Logo Text */}
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                  Ganpathy Research Group
                </h1>
                <p className="text-xs text-gray-600 font-medium">Department of Chemistry</p>
              </div>
            </div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5  pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Desktop Unified Navbar with Logo */}
      <nav className="hidden xl:flex fixed left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg z-[9999] w-[100vw]">
        <div className="flex items-center justify-between px-8 py-3 w-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                Ganpathy Research Group
              </h1>
              <p className="text-sm text-gray-600 font-medium">Department  of Chemistry</p>
            </div>
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out text-sm font-bold   border ${isActive(item.path)
                    ? 'bg-white/60 text-gray-800 shadow-lg backdrop-blur-sm border-white/60'
                    : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-white/20 hover:backdrop-blur-sm hover:border-white/30 hover:shadow-sm'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/0 via-blue-200/0 to-indigo-200/0 hover:from-purple-200/5 hover:via-blue-200/5 hover:to-indigo-200/5 transition-all duration-500 pointer-events-none rounded-full"></div>
      </nav>

      {/* Mobile Hamburger Button - Glass Morphism Style */}
      <button
        className="xl:hidden fixed top-6 right-6 z-[10000] p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar - Glass Morphism Style */}
      <div className={`xl:hidden fixed inset-0 z-[9999] transition-all duration-300 ${sidebarOpen ? 'bg-black/20 pointer-events-auto' : 'pointer-events-none bg-transparent'}`}
        style={{ backdropFilter: sidebarOpen ? 'blur(4px)' : 'none' }}
        onClick={() => setSidebarOpen(false)}
      >
        <aside
          className={`absolute top-0 right-0 h-full w-72 backdrop-blur-xl bg-white/50 border-l border-white/20 shadow-2xl transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
                className={`relative px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-sm font-medium border ${isActive(item.path)
                    ? 'bg-white/30 text-gray-800 shadow-sm backdrop-blur-sm border-white/40'
                    : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-white/20 hover:backdrop-blur-sm hover:border-white/30 hover:shadow-sm'
                  }`}
              >
                {item.label}
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