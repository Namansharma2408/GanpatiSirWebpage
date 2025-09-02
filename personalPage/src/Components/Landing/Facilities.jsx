import React from 'react'

const Facilities = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative z-50'>
            {/* Header Section */}
            <div className="text-center mb-12 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                    All Facilities
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Explore our state-of-the-art facilities at IIT Bhilai and resources for research and collaboration.
                </p>
            </div>
            {/* Facilities Card */}
            <div className="w-full max-w-4xl mx-auto  backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-8 flex flex-col items-center">
                {(() => {
                  const facilities = [
                    "NMR 60MHz",
                    "FTIR-ATR",
                    "UV-Vis Spectrometer",
                    "GC-MS",
                    "HPLC",
                    "Elemental Analyzer (CHNS-O)",
                    "BET Analyzer",
                    "CD Spectrophotometer",
                    "Thermogravimetric Analysis",
                    "Differential Scanning Calorimetry",
                    "Size Exclusion Chromatography (GPC)",
                    "Rotary Evaporator",
                    "Photo Reactor",
                    "Microwave Synthesizer",
                    "Hot Air Oven",
                    "Analytical Balance",
                    "Digital pH Meter",
                    "Vortex Mixture",
                    "Centrifuge",
                    "Fume Hood",
                    "Vacuum Pump",
                    "Ultrasonic Cleaner",
                    "Melting Point Apparatus",
                    "Ice Flaking Machine",
                    "Elga Water Purification Systems",
                    "Workstation",
                    "Source Meter",
                    "Micro Plate Reader",
                    "Low Temp. Cooler & Circulator",
                    "Gromacs Software",
                    "PyMol Software",
                    "VMD Software",
                    "AutoDock Software",
                    "Modeller Software",
                  ];
                  // Split into 3 columns
                  const colLength = Math.ceil(facilities.length / 4);
                  const columns = [
                    facilities.slice(0, colLength),
                    facilities.slice(colLength, colLength * 2),
                    facilities.slice(colLength * 2, colLength * 3),
                    facilities.slice(colLength * 3)
                  ];
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                      {columns.map((col, colIdx) => (
                        <ul key={colIdx} className="space-y-3">
                          {col.map((facility, idx) => (
                            <li key={facility + idx} className="text-lg text-gray-800 font-medium flex items-center">
                              <span className="mr-2 text-purple-900 text-xl">&bull;</span>
                              {facility}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  );
                })()}
            </div>
        </div>
    )
}

export default Facilities