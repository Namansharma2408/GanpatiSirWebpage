import React from 'react';
import Navbar from './Landing/Navbar';
import Footer from './Landing/Footer';

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-[100dvh] flex flex-col ${className}`}>
      <Navbar />
      <main className="flex-grow pt-24 p-8">
        {children}
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
