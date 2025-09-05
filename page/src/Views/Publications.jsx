'use client'
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../Components/Layout';
import GlassEffectBg from '../Components/Landing/GlassEffectBg';
import { link } from 'framer-motion/client';
import Link from 'next/link';
// Academic Publication Card Component - Traditional Design
const PublicationCard = ({ publication, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-200 ${isHovered ? 'shadow-lg' : 'shadow-md'
        }`}
      style={{ fontFamily: 'Georgia, serif' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card with clean academic design */}
      <a href={publication.link}>
        <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
          {/* Publication Header */}
          <style>{`.georgia-font * { font-family: Georgia, serif !important; }`}</style>
          <div className="bg-blue-50 border-b border-blue-100 p-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 text-sm">📄</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-blue-600 font-medium text-lg">{publication.journal} </p>
              </div>
              <div className="text-right">
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6">
            {/* Mobile Layout: Content at top, then both images stacked below */}
            <div className="block md:hidden georgia-font">
              {/* Main content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 leading-tight mb-3">
                  {index === 0 ? (
                    <>
                      {index + 1}. <span className="underline text-blue-900 hover:text-blue-700">{publication.title}</span>
                    </>
                  ) : (
                    <>{index + 1}. {publication.title}</>
                  )}
                </h3>
                {/* Authors */}
                <div className="mb-4">
                  <p className="text-gray-700 text-sm">
                    {publication.authors.map((author, idx) => (
                      <span key={idx}>
                        <span className={author.isCorresponding ? 'font-bold' : ''}>
                          {author.name} {author.isCorresponding ? '*' : ''}
                        </span>
                        {idx < publication.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Images stacked vertically in mobile */}
              <div className="space-y-4">
                {/* Main image */}
                <LazyLoadImage
                  src={publication.image}
                  alt={publication.title}
                  effect="blur"
                  className="w-full h-auto object-cover rounded"
                  width="100%"
                  height="auto"
                />
                {/* Research image below */}
                <div className="w-full h-fit flex justify-center align-middle">
                  <LazyLoadImage
                    src={publication.researchImage}
                    alt={publication.title}
                    effect="blur"
                    className="w-full max-w-xs h-auto object-cover rounded border"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout: Original side-by-side layout */}
            <div className="hidden md:flex">
              <div className="flex w-full georgia-font" style={{ minHeight: '180px' }}>
                {/* Left 75%: Main content at top, image below */}
                <div className="flex flex-col w-3/4 pr-4">
                  {/* Main content at top left */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-800 leading-tight mb-3">
                      {index === 0 ? (
                        <>
                          {index + 1}. <span className="underline text-blue-900 hover:text-blue-700">{publication.title}</span>
                        </>
                      ) : (
                        <>{index + 1}. {publication.title}</>
                      )}
                    </h3>
                    {/* Authors */}
                    <div className="mb-3">
                      <p className="text-gray-700 text-sm">
                        {publication.authors.map((author, idx) => (
                          <span key={idx}>
                            <span className={author.isCorresponding ? 'font-bold' : ''}>
                              {author.name} {author.isCorresponding ? '*' : ''}
                            </span>
                            {idx < publication.authors.length - 1 && ', '}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  {/* Image below main content, 75% width */}
                  <div className="w-full flex-1 flex items-end mt-4">
                    <LazyLoadImage
                      src={publication.image}
                      alt={publication.title}
                      effect="blur"
                      className="w-full h-auto object-contain rounded border"
                      width="100%"
                      height="auto"
                    />
                  </div>
                </div>
                {/* Right 25%: Image at rightmost corner, full height */}
                <div className="w-1/4 flex items-center justify-center">
                  <div className="w-full max-w-xs bg-gray-100 rounded border p-2">
                    <LazyLoadImage
                      src={publication.researchImage}
                      alt={publication.title}
                      effect="blur"
                      className="w-full h-auto object-contain rounded"
                      width="100%"
                      height="auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const data = [
    {
      id: 1,
      title: "Visible-Light-Mediated Copper(I)-Catalyzed Regiospecific Amino-Hydroxylation and Amino-Alkoxylation of Vinyl Arenes",
      journal: "Eur. J. Org. Chem. 2025, 28, 15432-15441. ",
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
      image: "/journal1.webp",
      researchImage: "/publication1.webp",
      statusColor: "bg-green-100 text-green-700",
      link: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/ejoc.202400996'
    },
    {
      id: 2,
      title: "Insights into Lead-Free Bismuth-Based Halide Perovskites Toward Alcohol Oxidation Under Blue LED Illumination",
      journal: "ACS Applied Materials & Interfaces, 2025, 122, e2425438122",
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
      image: "journal2.webp",
      researchImage: "publication2.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
      {
      id: 3,
      title: "Enantioselective Total Synthesis of the Fungal Metabolite Blennolide D and the Enantiomers of Blennolide E and F",
      journal: "Org. Lett.2018, 20, 2186-2189",
      year: 2018,
      volume: "20",
      pages: "2186-2189",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Soundararasu Senthilkumar", isCorresponding: false },
        { name: "Guillermo Valdomir", isCorresponding: false },
        { name: "Dhandapani Ganapathy", isCorresponding: false },
        { name: "Yun Zhang", isCorresponding: false },
        { name: "Lutz F. Tietze", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://pubs.acs.org/doi/10.1021/acs.orglett.8b00487",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal3.webp",
      researchImage: "/publication3.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
    {
      id: 4,
      title: "Enantioselective Total Synthesis of Blennolide H and Phomopsis-H76 A and Determination of Their Structure",
      journal: "Chem. Eur. J.2018, 24, 8760-8763",
      year: 2018,
      volume: "24",
      pages: "8760-8763",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Guillermo Valdomir", isCorresponding: false },
        { name: "Soundararasu Senthilkumar", isCorresponding: false },
        { name: "Dhandapani Ganapathy", isCorresponding: false },
        { name: "Yun Zhang", isCorresponding: false },
        { name: "Lutz F. Tietze", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal4.webp",
      researchImage: "/publication4.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
    {
      id: 5,
      title: "Enantioselective Total Synthesis of Chromanone Lactone Homoand Heterodimers",
      journal: "Chem. Eur. J. 2018, 13, 1888-1891.",
      year: 2018,
      volume: "13",
      pages: "1888-18991",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Guillermo Valdomir", isCorresponding: false },
        { name: "Soundararasu Senthilkumar", isCorresponding: false },
        { name: "Dhandapani Ganapathy", isCorresponding: false },
        { name: "Yun Zhang", isCorresponding: false },
        { name: "Lutz F. Tietze", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal5.webp",
      researchImage: "/publication5.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
    {
      id: 6,
      title: "Enantioselective Total Synthesis and Structure Confirmation of the Natural Dimeric Tetrahydroxanthenone Dicerandrol C",
      journal: "Chem. Eur. J. 2017, 23, 2299-2302.",
      year: 2017,
      volume: "23",
      pages: "2299-2302",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Dhandapani Ganapathy", isCorresponding: false },
        { name: "Johannes R. Reiner", isCorresponding: false },
        { name: "Guillermo Valdomir", isCorresponding: false },
        { name: "Soundararasu Senthilkumar", isCorresponding: false },
        { name: "Lutz F. Tietze", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal5.webp",
      researchImage: "publication5.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
    {
      id: 7,
      title: "Formal Synthesis of (–)-Siccanin Using an Enantioselective Domino Wacker/Carbonylation/Methoxylation Reaction",
      journal: "Synlett, 2016, (27(01), 96-100",
      year: 2016,
      volume: "27(01)",
      pages: "96-100",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Lutz F. Tietze", isCorresponding: true },
        { name: "Stefan Jackenkroll", isCorresponding: false },
        { name: "Dhandapani Ganapathy", isCorresponding: false },
        { name: "Johannes R. Reiner", isCorresponding: false }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal7.webp",
      researchImage: "/publication7.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
    {
      id: 8,
      title: "Enantioselective Total Synthesis of Secalonic Acid E",
      journal: "Chem. Eur. J. 2015, 21, 16807-16810",
      year: 2015,
      volume: "21",
      pages: "16807-16810",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Dhandapani Ganapathy", isCorresponding: true },
        { name: "Johannes R. Reiner", isCorresponding: false },
        { name: "Lorenz E. Löffler", isCorresponding: false },
        { name: "Ling Ma", isCorresponding: false },
        { name: "Boopathy Gnanaprakasam", isCorresponding: false },
        { name: "Benedikt Niepötter", isCorresponding: false },
        { name: "Ingo Koehne", isCorresponding: false },
        { name: "Lutz F. Tietze", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal8.webp",
      researchImage: "/publication8.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
    {
      id: 9,
      title: "Enantioselective Total Synthesis of Secalonic Acid E",
      journal: "Chem. Eur. J. 2015, 21, 16807-16810",
      year: 2015,
      volume: "21",
      pages: "16807-16810",
      type: "Communication",
      status: "Published",
      impactFactor: "11.205",
      citations: 67,
      authors: [
        { name: "Dhandapani Ganapathy", isCorresponding: true },
        { name: "Johannes R. Reiner", isCorresponding: false },
        { name: "Lorenz E. Löffler", isCorresponding: false },
        { name: "Ling Ma", isCorresponding: false },
        { name: "Boopathy Gnanaprakasam", isCorresponding: false },
        { name: "Benedikt Niepötter", isCorresponding: false },
        { name: "Ingo Koehne", isCorresponding: false },
        { name: "Lutz F. Tietze", isCorresponding: true }
      ],
      abstract: "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
      keywords: ["Total Synthesis", "Morphine", "Drug Discovery", "Medicinal Chemistry", "Pharmacology"],
      doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
      pdfUrl: "#",
      supplementaryUrl: "#",
      image: "journal8.webp",
      researchImage: "/publication8.webp",
      statusColor: "bg-green-100 text-green-700",
      link: ''
    },
  ];
    setPublications(data);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-slate-200">
        <GlassEffectBg />
      </div>
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          
          {/* Header Section - Academic Style */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              Publications
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
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


