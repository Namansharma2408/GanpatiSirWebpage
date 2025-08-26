import React, { useState, useEffect } from 'react';

// Same PublicationCard component from Publications page
const PublicationCard = ({ publication, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-200 flex-shrink-0 w-full ${isHovered ? 'shadow-lg' : 'shadow-md'
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
                          {author.name} {author.isCorresponding ? '*' : ''}
                        </span>
                        {idx < publication.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              {/* Image below main content, 75% width */}
              <div className="w-full flex-1 flex items-end">
                <div className="w-full h-fit bg-gray-100 rounded border">
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

const RecentPublication = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Publications data array - same as Publications page
  const publications = [
    {
      id: 1,
      title: "Visible-Light-Mediated Copper(I)-Catalyzed Regiospecific Amino-Hydroxylation and Amino-Alkoxylation of Vinyl Arenes",
      journal: "Eur. J. Org. Chem.",
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
      image: "/chemistry1.png",
      researchImage: "/chemistry2.png",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      title: "Insights into Lead-Free Bismuth-Based Halide Perovskites Toward Alcohol Oxidation Under Blue LED Illumination",
      journal: "ACS Catalysis",
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
      image: "/chemistry3.png",
      researchImage: "/chemistry4.png",
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
      image: "/chemistry5.png",
      researchImage: "/chemistry6.png",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 4,
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
      image: "/chemistry7.png",
      researchImage: "/chemistry1.png",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === publications.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [publications.length]);

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative z-50'>
      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
          Recent Publications
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Explore our latest research contributions and scientific discoveries in organic synthesis, catalysis, and materials science.
        </p>
      </div>

      {/* Sliding Publications Container */}
      <div className="w-full max-w-6xl overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)` // Move by 100% of container width
          }}
        >
          {publications.map((publication, index) => (
            <PublicationCard 
              key={publication.id}
              publication={publication} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center mt-8 space-x-3">
        {publications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* View All Publications Button */}
      <div className="mt-12">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
          View All Publications
        </button>
      </div>
    </div>
  );
};

export default RecentPublication;