import React from 'react';
import Navbar from './Landing/Navbar';

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <Navbar />
      <div className="pt-24 p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
