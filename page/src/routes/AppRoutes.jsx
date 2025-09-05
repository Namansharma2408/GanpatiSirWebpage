import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Views/LandingPage';
import Gallery from '../Views/Gallery';
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
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path="/research" element={<Research />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
