import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Views/LandingPage';
import About from '../Views/About';
import Team from '../Views/Team';
import Research from '../Views/Research';
import Facilities from '../Views/Facilities';
import Publications from '../Views/Publications';
import Contact from '../Views/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/research" element={<Research />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
