import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Views/LandingPage';
import About from '../Views/About';
import Team from '../Views/Team';
import Research from '../Views/Research';
import Facilities from '../Views/Facilities';
import Publications from '../Views/Publications';
import Contact from '../Views/Contact';
import GasChromatography from '../Components/FacilitesLayout/GasChromatography';
import Glovebox from '../Components/FacilitesLayout/Glovebox';
import MassSpectrometry from '../Components/FacilitesLayout/MassSpectrometry';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/research" element={<Research />} />
      <Route path="/facilities" element={<Facilities />}>
        <Route path="glovebox" element={<Glovebox />} />
        <Route path="mass-spectrometry" element={<MassSpectrometry />} />
        <Route path="gas-chromatography" element={<GasChromatography />} />

      </Route>
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
