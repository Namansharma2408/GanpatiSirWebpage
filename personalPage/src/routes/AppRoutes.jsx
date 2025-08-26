import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Views/LandingPage';
import About from '../Views/About';
import Team from '../Views/Team';
import Research from '../Views/Research';
import Facilities from '../Views/Facilities';
import Publications from '../Views/Publications';
import Contact from '../Views/Contact';

// Facility Components
import NMR60MHz from '../Components/FacilitesLayout/NMR60MHz';
import FTIRATR from '../Components/FacilitesLayout/FTIRATR';
import UVVisSpectrometer from '../Components/FacilitesLayout/UVVisSpectrometer';
import RotaryEvaporator from '../Components/FacilitesLayout/RotaryEvaporator';
import PhotoReactor from '../Components/FacilitesLayout/PhotoReactor';
import HotAirOven from '../Components/FacilitesLayout/HotAirOven';
import AnalyticalBalance from '../Components/FacilitesLayout/AnalyticalBalance';
import DigitalPHMeter from '../Components/FacilitesLayout/DigitalPHMeter';
import VortexMixture from '../Components/FacilitesLayout/VortexMixture';
import ThermogravimetricAnalysis from '../Components/FacilitesLayout/ThermogravimetricAnalysis';
import DifferentialScanningCalorimetry from '../Components/FacilitesLayout/DifferentialScanningCalorimetry';
import SizeExclusionChromatography from '../Components/FacilitesLayout/SizeExclusionChromatography';
import GCMS from '../Components/FacilitesLayout/GCMS';
import ElementalAnalyzer from '../Components/FacilitesLayout/ElementalAnalyzer';
import BETAnalyzer from '../Components/FacilitesLayout/BETAnalyzer';
import CDSpectrophotometer from '../Components/FacilitesLayout/CDSpectrophotometer';
import VacuumPump from '../Components/FacilitesLayout/VacuumPump';
import UltrasonicCleaner from '../Components/FacilitesLayout/UltrasonicCleaner';
import IceFlakingMachine from '../Components/FacilitesLayout/IceFlakingMachine';
import ElgaWaterPurification from '../Components/FacilitesLayout/ElgaWaterPurification';
import Workstation from '../Components/FacilitesLayout/Workstation';
import TURBOMOLESoftware from '../Components/FacilitesLayout/TURBOMOLESoftware';
import GromacsSoftware from '../Components/FacilitesLayout/GromacsSoftware';
import PyMolSoftware from '../Components/FacilitesLayout/PyMolSoftware';
import VMDSoftware from '../Components/FacilitesLayout/VMDSoftware';
import AutoDockSoftware from '../Components/FacilitesLayout/AutoDockSoftware';
import ModellerSoftware from '../Components/FacilitesLayout/ModellerSoftware';
import SourceMeter from '../Components/FacilitesLayout/SourceMeter';
import MicroPlateReader from '../Components/FacilitesLayout/MicroPlateReader';
import LowTempCooler from '../Components/FacilitesLayout/LowTempCooler';
import MicrowaveSynthesizer from '../Components/FacilitesLayout/MicrowaveSynthesizer';
import HPLC from '../Components/FacilitesLayout/HPLC';
import Centrifuge from '../Components/FacilitesLayout/Centrifuge';
import FumeHood from '../Components/FacilitesLayout/FumeHood';
import MeltingPointApparatus from '../Components/FacilitesLayout/MeltingPointApparatus';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/research" element={<Research />} />
      <Route path="/facilities" element={<Facilities />} />
      
      {/* Analytical Instruments */}
      <Route path="/facilities/nmr-60mhz" element={<NMR60MHz />} />
      <Route path="/facilities/ftir-atr" element={<FTIRATR />} />
      <Route path="/facilities/uv-vis-spectrometer" element={<UVVisSpectrometer />} />
      <Route path="/facilities/gc-ms" element={<GCMS />} />
      <Route path="/facilities/elemental-analyzer" element={<ElementalAnalyzer />} />
      <Route path="/facilities/bet-analyzer" element={<BETAnalyzer />} />
      <Route path="/facilities/cd-spectrophotometer" element={<CDSpectrophotometer />} />
      <Route path="/facilities/thermogravimetric-analysis" element={<ThermogravimetricAnalysis />} />
      <Route path="/facilities/differential-scanning-calorimetry" element={<DifferentialScanningCalorimetry />} />
      <Route path="/facilities/size-exclusion-chromatography" element={<SizeExclusionChromatography />} />
      <Route path="/facilities/hplc" element={<HPLC />} />
      <Route path="/facilities/micro-plate-reader" element={<MicroPlateReader />} />
      <Route path="/facilities/source-meter" element={<SourceMeter />} />
      
      {/* Synthesis Equipment */}
      <Route path="/facilities/rotary-evaporator" element={<RotaryEvaporator />} />
      <Route path="/facilities/photo-reactor" element={<PhotoReactor />} />
      <Route path="/facilities/microwave-synthesizer" element={<MicrowaveSynthesizer />} />
      <Route path="/facilities/hot-air-oven" element={<HotAirOven />} />
      <Route path="/facilities/melting-point-apparatus" element={<MeltingPointApparatus />} />
      
      {/* General Laboratory Equipment */}
      <Route path="/facilities/analytical-balance" element={<AnalyticalBalance />} />
      <Route path="/facilities/digital-ph-meter" element={<DigitalPHMeter />} />
      <Route path="/facilities/vortex-mixture" element={<VortexMixture />} />
      <Route path="/facilities/centrifuge" element={<Centrifuge />} />
      <Route path="/facilities/vacuum-pump" element={<VacuumPump />} />
      <Route path="/facilities/ultrasonic-cleaner" element={<UltrasonicCleaner />} />
      <Route path="/facilities/fume-hood" element={<FumeHood />} />
      <Route path="/facilities/low-temp-cooler" element={<LowTempCooler />} />
      
      {/* Utility Equipment */}
      <Route path="/facilities/ice-flaking-machine" element={<IceFlakingMachine />} />
      <Route path="/facilities/elga-water-purification" element={<ElgaWaterPurification />} />
      <Route path="/facilities/workstation" element={<Workstation />} />
      
      {/* Software */}
      <Route path="/facilities/turbomole-software" element={<TURBOMOLESoftware />} />
      <Route path="/facilities/gromacs-software" element={<GromacsSoftware />} />
      <Route path="/facilities/pymol-software" element={<PyMolSoftware />} />
      <Route path="/facilities/vmd-software" element={<VMDSoftware />} />
      <Route path="/facilities/autodock-software" element={<AutoDockSoftware />} />
      <Route path="/facilities/modeller-software" element={<ModellerSoftware />} />
      
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
