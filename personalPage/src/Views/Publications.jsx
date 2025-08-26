import React, { useState } from 'react';
import Layout from '../Components/Layout';
import GlassEffectBg from '../Components/Landing/GlassEffectBg';

// Academic Publication Card Component - Traditional Design
const PublicationCard = ({ publication, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-200 ${isHovered ? 'shadow-lg' : 'shadow-md'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card with clean academic design */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {/* Publication Header */}
        <div className="bg-blue-50 border-b border-blue-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-blue-600 text-sm">📄</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-blue-600 font-medium text-sm">{publication.journal} {publication.year}</p>
              {publication.volume && (
                <p className="text-blue-500 text-xs">{publication.volume}, {publication.pages}</p>
              )}
            </div>
            <div className="text-right">
              {publication.impactFactor && (
                <span className="text-xs text-gray-600">IF: {publication.impactFactor}</span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 flex">
          <div className="flex w-full" style={{ minHeight: '180px' }}>
            {/* Left 75%: Main content at top, image below */}
            <div className="flex flex-col w-3/4 pr-4">
              {/* Main content at top left */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 leading-tight mb-3">
                  {publication.title}
                </h3>
                {/* Authors */}
                <div className="mb-3">
                  <p className="text-gray-700 text-sm">
                    {publication.authors.map((author, idx) => (
                      <span key={idx}>
                        <span className={author.isCorresponding ? 'font-bold' : ''}>
                          {author.name} {author.isCorresponding ? '*': '' }
                        </span>
                        {idx < publication.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              {/* Image below main content, 75% width */}
              <div className="w-full flex-1 flex items-end">
                <div className="w-full h-fit bg-gray-100 rounded border ">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Right 25%: Image at rightmost corner, full height */}
            <div className="w-1/4 flex items-center">
              <div className="w-fit h-80 bg-gray-100 rounded border">
                <img
                  src={publication.researchImage}
                  alt={publication.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  // Publications data array - Academic style
  const publications = [
    {
      id: 1,
      title: "Visible-Light-Mediated Copper(I)-Catalyzed Regiospecific Amino-Hydroxylation and Amino-Alkoxylation of Vinyl Arenes",
      journal: "Eur. J. Org. Chem. , ",
      year: 2025,
      volume: "28",
      pages: "15432-15441",
      type: "Research Article",
      status: "Published",
      impactFactor: "16.383",
      citations: 23,
      authors: [
        { name: "Baldau Singh", isCorresponding: false },
        { name: "Tiwari Neeraj Brijbhushan", isCorresponding: false },
        { name: "Krishn Kumar", isCorresponding: false },
        { name: "Piyush Pandey", isCorresponding: false },
        { name: "Dhandapani Ganapathy", isCorresponding: true }
      ],
      abstract: "In this comprehensive study, we present groundbreaking synthetic methodologies toward the aphidicolin family of diterpenoid natural products. Our research demonstrates the development of highly efficient strategies for the construction of complex polycyclic frameworks. These novel approaches exhibit unprecedented selectivity and efficiency in key bond formation reactions under mild conditions.",
      keywords: ["Natural Products", "Total Synthesis", "Diterpenoids", "Aphidicolin", "Organic Chemistry"],
      doi: "e202400996",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "public/journal1.jpg",
      researchImage: "public/publication1.jpg",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      title: "Insights into Lead-Free Bismuth-Based Halide Perovskites Toward Alcohol Oxidation Under Blue LED Illumination",
      journal: "PNAS",
      year: 2025,
      volume: "122",
      pages: "e2425438122",
      type: "Research Article",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Shalini Joshi", isCorresponding: false },
        { name: "Baldau Singh", isCorresponding: false },
        { name: "Deepak Aloysius", isCorresponding: false },
        { name: "Dhandapani Ganapathy", isCorresponding: true },
        { name: "Satyajit Gupta", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://doi.org/10.1073/pnas.2425438122",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "/public/journal2.jpg",
      researchImage: "/public/publication2.jpg",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 3,
      title: "Computational Design of Efficient Catalysts for CO2 Reduction Reactions",
      journal: "Angewandte Chemie International Edition",
      year: 2024,
      volume: "62",
      pages: "e202315678",
      type: "Communication",
      status: "Published",
      impactFactor: "16.823",
      citations: 89,
      authors: [
        { name: "Dr. Ganapathy D", isCorresponding: true },
        { name: "Lisa Zhang", isCorresponding: false },
        { name: "David Brown", isCorresponding: false },
        { name: "Prof. Robert Smith", isCorresponding: true }
      ],
      abstract: "Through advanced computational methodologies and machine learning approaches, we have designed a new class of single-atom catalysts for efficient CO2 reduction reactions. Our theoretical framework combines density functional theory calculations with high-throughput screening to identify optimal catalyst compositions.",
      keywords: ["CO2 Reduction", "Computational Chemistry", "DFT", "Single-atom Catalysts", "Machine Learning"],
      doi: "https://doi.org/10.1002/anie.202315678",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "/chemistry3.png",
      researchImage: "/chemistry1.png",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 4,
      title: "Biocompatible Nanocarriers for Targeted Drug Delivery: A Multidisciplinary Approach",
      journal: "ACS Nano",
      year: 2024,
      volume: "17",
      pages: "12456-12471",
      type: "Research Article",
      status: "Published",
      impactFactor: "17.1",
      citations: 45,
      authors: [
        { name: "Dr. Ganapathy D", isCorresponding: true },
        { name: "Emily Rodriguez", isCorresponding: false },
        { name: "James Wilson", isCorresponding: false }
      ],
      abstract: "We report the development of innovative biocompatible nanocarriers for targeted drug delivery applications. The nanocarriers are based on biodegradable polymers functionalized with targeting ligands for specific cell recognition.",
      keywords: ["Drug Delivery", "Nanocarriers", "Biocompatibility", "Cancer Therapy", "Nanomedicine"],
      doi: "https://doi.org/10.1021/acsnano.3c12345",
      pdfUrl: "#",
      image: "/chemistry4.png",
      researchImage: "/chemistry2.png",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 5,
      title: "Machine Learning Approaches for Predicting Molecular Properties in Drug Discovery",
      journal: "Nature Machine Intelligence",
      year: 2024,
      volume: "6",
      pages: "456-468",
      type: "Review Article",
      status: "In Press",
      impactFactor: "25.898",
      citations: 12,
      authors: [
        { name: "Dr. Ganapathy D", isCorresponding: true },
        { name: "Alex Kumar", isCorresponding: false },
        { name: "Maria Gonzalez", isCorresponding: false },
        { name: "Prof. Jennifer Lee", isCorresponding: false }
      ],
      abstract: "This comprehensive review examines the latest machine learning methodologies for predicting molecular properties in drug discovery pipelines. We analyze various deep learning architectures including graph neural networks and transformers.",
      keywords: ["Machine Learning", "Drug Discovery", "ADMET", "Graph Neural Networks", "AI"],
      doi: "https://doi.org/10.1038/s42256-2024-xxxxx",
      image: "/chemistry5.png",
      researchImage: "/chemistry3.png",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gray-300">
        <GlassEffectBg />
      </div>
      <Layout className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header Section - Academic Style */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              Publications
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Research contributions to the scientific community in organic synthesis, computational chemistry, and materials science.
            </p>
          </div>

          {/* Year Section */}
          <div className="mb-8">
            <div className="border-b-2 border-blue-500 inline-block">
              <h2 className="text-2xl font-bold text-gray-800 pb-2">2025</h2>
            </div>
          </div>

          {/* Publications List - Academic Format */}
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section - Simplified */}
          <div className="text-center bg-white border border-gray-200 rounded-lg p-8 shadow-sm mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Research Collaboration
            </h2>
            <p className="text-gray-600 mb-4">
              Interested in collaboration or have questions about our research?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors duration-200">
                Contact Us
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:border-blue-500 hover:text-blue-600 transition-colors duration-200">
                Request Reprints
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Publications;
