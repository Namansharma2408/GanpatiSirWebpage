"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const PublicationCard = ({ publication, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-200 flex-shrink-0 w-full ${
        isHovered ? "shadow-lg" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card with clean academic design */}
      <a href={publication.link}>
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
                <p className="text-blue-600 font-medium text-sm">
                  {publication.journal} {publication.year}
                </p>
                {publication.volume && (
                  <p className="text-blue-500 text-xs">
                    {publication.volume}, {publication.pages}
                  </p>
                )}
              </div>
              <div className="text-right">
                {publication.impactFactor && (
                  <span className="text-xs text-gray-600">
                    IF: {publication.impactFactor}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 ">
            {/* Mobile Layout: Content at top, then both images stacked below */}
            <div className="block md:hidden georgia-font">
              {/* Main content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-800 leading-tight mb-3">
                  {index === 0 ? (
                    <>
                      {index + 1}.{" "}
                      <span className="underline text-blue-900 hover:text-blue-700">
                        {publication.title}
                      </span>
                    </>
                  ) : (
                    <>
                      {index + 1}. {publication.title}
                    </>
                  )}
                </h3>
                {/* Authors */}
                <div className="mb-4">
                  <p className="text-gray-700 text-sm">
                    {publication.authors.map((author, idx) => (
                      <span key={idx}>
                        <span
                          className={author.isCorresponding ? "font-bold" : ""}
                        >
                          {author.name} {author.isCorresponding ? "*" : ""}
                        </span>
                        {idx < publication.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Images stacked vertically in mobile */}
              <div className="space-y-4 ">
                {/* Main image - fixed size for consistency */}
                <div className="w-full flex justify-center ">
                  <Image
                    src={publication.image || "/journal.webp"}
                    alt={publication.title}
                    width={800} // Fixed width
                    height={500} // Fixed height for 16:10 ratio
                    className="object-cover rounded"
                  />
                </div>
                {/* Research image below - centered and fixed size */}
                <div className="w-full flex justify-center">
                  <Image
                    src={publication.researchImage || "/neeraj.webp"}
                    alt={publication.title}
                    width={300} // Smaller fixed width
                    height={200} // Fixed height for consistency
                    className="object-cover rounded border"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout: Side-by-side with consistent sizing */}
            <div className="hidden md:flex">
              <div
                className="flex w-full georgia-font"
                style={{ minHeight: "200px" }}
              >
                {/* Left 75%: Main content at top, image below */}
                <div className="flex flex-col w-3/4 pr-4">
                  {/* Main content at top left */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-blue-800 leading-tight mb-3">
                      {index === 0 ? (
                        <>
                          {index + 1}.{" "}
                          <span className="underline text-blue-900 hover:text-blue-700">
                            {publication.title}
                          </span>
                        </>
                      ) : (
                        <>
                          {index + 1}. {publication.title}
                        </>
                      )}
                    </h3>
                    {/* Authors */}
                    <div className="mb-3">
                      <p className="text-gray-700 text-sm">
                        {publication.authors.map((author, idx) => (
                          <span key={idx}>
                            <span
                              className={
                                author.isCorresponding ? "font-bold" : ""
                              }
                            >
                              {author.name} {author.isCorresponding ? "*" : ""}
                            </span>
                            {idx < publication.authors.length - 1 && ", "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  {/* Image below main content - fixed size */}
                  <div className="w-full flex justify-center mt-4">
                    <Image
                      src={publication.image || "/journal.webp"}
                      alt={publication.title}
                      width={800} // Fixed width
                      height={400} // Fixed height
                      className="object-cover rounded border"
                    />
                  </div>
                </div>
                {/* Right 25%: Research image - fixed size and centered */}
                <div className="w-1/4 flex items-center justify-center">
                  <div className="bg-gray-100 rounded border p-2 flex justify-center">
                    <Image
                      src={publication.researchImage || "/neeraj.webp"}
                      alt={publication.title}
                      width={200} // Fixed width
                      height={150} // Fixed height
                      className="object-cover rounded"
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

const StudentCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` relative group transition-all duration-300 transform ${
        isHovered ? "scale-105 -translate-y-2" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${member.gradientFrom} ${
          member.gradientTo
        } rounded-2xl blur-sm transition-opacity duration-500 ${
          isHovered ? "opacity-40" : "opacity-0"
        }`}
      ></div>

      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-72 md:w-80">
        {/* Profile Image */}
        <div className="relative h-48 md:h-60 overflow-hidden flex items-center justify-center">
          <Image
            src={member?.image || "/neeraj.webp"}
            alt={member.name}
            effect="blur"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            width="320"
            height="240"
          />
          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          {/* Role badge */}
          <div
            className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/90 text-gray-700 border border-white/50`}
          >
            {member.role}
          </div>
        </div>

        <div className="p-4 md:p-5">
          {/* Header */}
          <div className="text-center mb-3 md:mb-4">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 font-medium">
              {member.position}
            </p>
          </div>
          {/* Contact Links - Compact */}
          <div className="flex justify-center space-x-3 pt-3 border-t border-gray-200/50">
            {member.email && (
              <button className="p-2 rounded-full bg-blue-100/60 hover:bg-blue-200 text-blue-600 transition-colors">
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Landingbackground = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-200 overflow-hidden">
      <Image
        src="/neeraj.webp"
        alt="Landing Background"
        effect="blur"
        className="w-full h-full object-cover object-center"
        fill
      />
    </div>
  );
};
const GlassEffectBg = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-1"
      style={{
        background: "rgba(255,255,255,0.65)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(2px) saturate(180%)",
        WebkitBackdropFilter: "blur(2px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    ></div>
  );
};
export default function Home() {
  const researchAreas = [
    {
      id: 1,
      title: "Photocatalysis",
      image: null,
      description:
        "Developing novel photocatalytic systems for sustainable organic synthesis using visible light-responsive catalysts and green chemistry principles.",
    },
    {
      id: 2,
      title: "Electrocatalysis",
      image: null,
      description:
        "Advancing electrocatalytic methodologies for efficient chemical transformations and energy conversion applications.",
    },
    {
      id: 3,
      title: "Total Synthesis and Natural Products",
      image: null,
      description:
        "Exploring innovative strategies for the total synthesis of complex natural products and the development of new synthetic methodologies.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title:
          "Visible-Light-Mediated Copper(I)-Catalyzed Regiospecific Amino-Hydroxylation and Amino-Alkoxylation of Vinyl Arenes",
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
          { name: "Dhandapani Ganapathy", isCorresponding: true },
        ],
        abstract:
          "In this comprehensive study, we present groundbreaking synthetic methodologies toward the aphidicolin family of diterpenoid natural products. Our research demonstrates the development of highly efficient strategies for the construction of complex polycyclic frameworks. These novel approaches exhibit unprecedented selectivity and efficiency in key bond formation reactions under mild conditions.",
        keywords: [
          "Natural Products",
          "Total Synthesis",
          "Diterpenoids",
          "Aphidicolin",
          "Organic Chemistry",
        ],
        doi: "e202400996",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/ejoc.202400996",
      },
      {
        id: 2,
        title:
          "Insights into Lead-Free Bismuth-Based Halide Perovskites Toward Alcohol Oxidation Under Blue LED Illumination",
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
          { name: "Satyajit Gupta", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://doi.org/10.1073/pnas.2425438122",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 3,
        title:
          "Enantioselective Total Synthesis of the Fungal Metabolite Blennolide D and the Enantiomers of Blennolide E and F",
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
          { name: "Lutz F. Tietze", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://pubs.acs.org/doi/10.1021/acs.orglett.8b00487",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 4,
        title:
          "Enantioselective Total Synthesis of Blennolide H and Phomopsis-H76 A and Determination of Their Structure",
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
          { name: "Lutz F. Tietze", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 5,
        title:
          "Enantioselective Total Synthesis of Chromanone Lactone Homoand Heterodimers",
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
          { name: "Lutz F. Tietze", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: null,
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 6,
        title:
          "Enantioselective Total Synthesis and Structure Confirmation of the Natural Dimeric Tetrahydroxanthenone Dicerandrol C",
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
          { name: "Lutz F. Tietze", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 7,
        title:
          "Formal Synthesis of (–)-Siccanin Using an Enantioselective Domino Wacker/Carbonylation/Methoxylation Reaction",
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
          { name: "Johannes R. Reiner", isCorresponding: false },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
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
          { name: "Lutz F. Tietze", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: null,
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 9,
        title: "Enantioselective Total Synthesis of Secalonic Acid E",
        journal: "Chem. Eur. J. 2015, 21, 16807-16810",
        year: 2015,
        volume: "21",
        pages: "16807-16810",
        type: "Communication",
        status: "/journal.webp",
        impactFactor: "/neeraj.webp",
        citations: 67,
        authors: [
          { name: "Dhandapani Ganapathy", isCorresponding: true },
          { name: "Johannes R. Reiner", isCorresponding: false },
          { name: "Lorenz E. Löffler", isCorresponding: false },
          { name: "Ling Ma", isCorresponding: false },
          { name: "Boopathy Gnanaprakasam", isCorresponding: false },
          { name: "Benedikt Niepötter", isCorresponding: false },
          { name: "Ingo Koehne", isCorresponding: false },
          { name: "Lutz F. Tietze", isCorresponding: true },
        ],
        abstract:
          "This work presents the total synthesis and comprehensive biological evaluation of carbamorphine, a novel morphine analog featuring strategic O-to-CH2 replacement in the E-ring. The synthetic approach demonstrates exceptional chemoselectivity and provides access to previously inaccessible structural modifications of the morphine pharmacophore.",
        keywords: [
          "Total Synthesis",
          "Morphine",
          "Drug Discovery",
          "Medicinal Chemistry",
          "Pharmacology",
        ],
        doi: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.201801323",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
      {
        id: 10,
        title: "Another Research Publication",
        journal: "J. Org. Chem. 2024, 89, 1234-1245",
        year: 2024,
        volume: "89",
        pages: "1234-1245",
        type: "Research Article",
        status: "Published",
        impactFactor: "4.335",
        citations: 15,
        authors: [
          { name: "Dhandapani Ganapathy", isCorresponding: true },
          { name: "Research Team", isCorresponding: false },
        ],
        abstract: "Additional research publication to ensure unique IDs.",
        keywords: ["Organic Chemistry", "Research"],
        doi: "https://doi.org/10.1021/acs.joc.2024",
        pdfUrl: "#",
        supplementaryUrl: "#",
        image: "/journal.webp",
        researchImage: "/neeraj.webp",
        statusColor: "bg-green-100 text-green-700",
        link: "",
      },
    ];
    setPublications(data);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === publications.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [publications.length]);

  const arr = useMemo(
    () => [
      {
        id: 2,
        name: "Baldau Singh",
        position: "PhD Student",
        role: "PhD",
        department: "Chemistry Department",
        specialization: "Photocatalytic Organic Synthesis,Total synthesis",
        image: null,
        email: "baldaus@iitbhilai.ac.in",
        linkedin: "",
        gradientFrom: "from-green-500",
        gradientTo: "to-teal-600",
        bsc: "Udai Pratap College, Varanasi, UP",
        msc: "Udai Pratap College, Varanasi, UP",
      },
      {
        id: 3,
        name: "Neeraj Tiwari",
        position: "PhD Student",
        role: "PhD",
        department: "Chemistry Department",
        specialization: "Photocatalytic Organic Synthesis",
        image: null,
        email: "neerajbr@iitbhilai.ac.in",
        bsc: "Veer Narmad South  Gujarat University",
        msc: "Sardar Patel University",
        linkedin: "",
        gradientFrom: "from-blue-500",
        gradientTo: "to-indigo-600",
      },
      {
        id: 4,
        name: "Piyush Pandey",
        position: "PhD Student",
        role: "PhD",
        department: "Chemistry Department",
        specialization: "Electrochemical Organic Synthesis and Total Synthesis",
        image: null,
        email: "piyushp@iitbhilai.ac.in",
        linkedin: "",
        gradientFrom: "from-blue-500",
        gradientTo: "to-indigo-600",
        bsc: "Udai Pratap College, Varanasi, Uttar Pradesh",
        msc: "Udai Pratap College, Varanasi, Uttar Pradesh",
      },
      {
        id: 5,
        name: "Nagarajan.S",
        position: "MSc Student",
        role: "MSc",
        department: "Chemistry Department",
        specialization: "Electrochemical Organic Synthesis",
        image: null,
        email: "nagarajanan@iitbhilai.ac.in",
        linkedin: "",
        gradientFrom: "from-orange-500",
        gradientTo: "to-red-600",
      },
      {
        id: 6,
        name: "Abhijit Pandey",
        position: "MSc Student",
        role: "MSc",
        department: "Chemistry Department",
        specialization:
          "Materials Chemistry and Nanotechnology. Working on synthesis of nanomaterials for energy applications.",
        image: null,
        email: "abhijitpa@iitbhilai.ac.in",
        linkedin: "",
        gradientFrom: "from-indigo-500",
        gradientTo: "to-purple-600",
      },
    ],
    []
  );

  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          // Desktop
          isDesktop: "(min-width: 768px)",
          // Mobile
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions;
          const c = containerRef.current;
          const s = sliderRef.current;

          if (!c || !s) return;

          const wrappers = Array.from(s.children);
          if (wrappers.length === 0) return;

          // Reset inline styles to get accurate measurements
          s.style.width = "";
          gsap.set(s, { clearProps: "x" });

          // Force a reflow to ensure measurements are accurate
          void s.offsetWidth;

          const rect = wrappers[0].getBoundingClientRect();
          const gap =
            wrappers.length > 1
              ? wrappers[1].getBoundingClientRect().left - rect.right
              : 0;

          const totalWidth =
            rect.width * wrappers.length + gap * (wrappers.length - 1);
          const containerWidth = c.offsetWidth;

          // Only animate if content overflows
          if (totalWidth <= containerWidth) return;

          s.style.width = `${totalWidth}px`;

          if (isDesktop) {
            // Desktop: Start from right side
            gsap.set(s, { x: containerWidth });
            const endX = -(totalWidth - containerWidth / 2 - rect.width / 2);
            gsap.to(s, {
              x: endX,
              ease: "none",
              scrollTrigger: {
                trigger: c,
                start: "top top",
                end: "bottom top",
                scrub: 3,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          } else {
            // Mobile: Start from left edge
            gsap.set(s, { x: 0 });
            const distance = totalWidth - containerWidth;

            gsap.to(s, {
              x: -distance,
              ease: "none",
              scrollTrigger: {
                trigger: c,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [arr]);

  const el = useRef(null);

useEffect(() => {
  if (!el.current) return;

  gsap.to(el.current, {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#trigger",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
}, []);

  return (
    <div>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <Landingbackground />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GlassEffectBg />
      </div>
      <div
        className="w-full h-full flex items-center justify-center py-10 md:py-20 relative z-10"
        style={{ minHeight: "100vh" }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center max-w-6xl relative z-20">
          <div className="w-full relative z-30 flex justify-center items-center">
            {/* Glassy Card Container */}
            <div className="relative w-full max-w-4xl z-40">
              <div className="relative z-50">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent relative z-60 leading-tight px-4">
                  Welcome to The Chemical Synthesis Group
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 mb-1 font-medium text-center relative z-60 mt-4 px-4">
                  Exploring organic synthesis through photocatalysis and
                  electrocatalysis
                </p>
              </div>

              {/* Subtle glow effect around card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/20 via-blue-200/20 to-indigo-200/20 rounded-2xl blur-sm z-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative z-50">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold italic mb-6 bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text text-transparent">
            Research Interests
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our research focuses on cutting-edge areas of chemistry that combine
            sustainability, innovation, and practical applications for solving
            real-world challenges.
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {researchAreas.map((area) => (
            <div key={area.id} className="group relative">
              {/* Card with Glass Morphism Effect */}
              <div className="relative backdrop-blur-xl border bg-white border-white/40 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={area?.image || "/neeraj.webp"}
                    alt={area?.title}
                    effect="blur"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="relative top-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-black drop-shadow-lg">
                    {area.title}
                  </h3>
                </div>
                {/* Content Section */}
                <div className="p-6 h-fit">
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {area.description}
                  </p>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/0 via-blue-200/0 to-indigo-200/0 group-hover:from-purple-200/20 group-hover:via-blue-200/20 group-hover:to-indigo-200/20 rounded-2xl blur-sm -z-10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative z-50">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
            Recent Publications
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Explore our latest research contributions and scientific discoveries
            in organic synthesis, catalysis, and materials science.
          </p>
        </div>

        {/* Sliding Publications Container */}
        <div className="w-full max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move by 100% of container width
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
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
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
      <div ref={containerRef} className="relative z-50 ">
        <div ref={el} className="sticky top-8 z-30 bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm py-16">
          <div className="container mx-auto px-4 py-8 ">
            <div className="flex flex-col text-center max-w-4xl mx-auto align-bottom">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Our Team
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Meet our dedicated team of researchers and students working on
                cutting-edge projects in organic synthesis and catalysis.
              </p>
            </div>
          </div>
        </div>

        <div className=" h-screen ">
          <div
            ref={sliderRef}
            className="absolute top-1/2 -translate-y-1/2 flex items-center space-x-6 md:space-x-12"
            style={{ willChange: "transform", height: "auto" }}
          >
            {arr.map((student) =>
              student.id === 1 ? null : (
                <div
                  key={student.id}
                  className="student-card flex-shrink-0 w-72 md:w-80"
                >
                  <StudentCard member={student} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div id="trigger" className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative z-50">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
            All Facilities
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Explore our state-of-the-art facilities at IIT Bhilai and resources
            for research and collaboration.
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
              facilities.slice(colLength * 3),
            ];
            return (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
                {columns.map((col, colIdx) => (
                  <ul key={colIdx} className="space-y-3">
                    {col.map((facility, idx) => (
                      <li
                        key={facility + idx}
                        className="text-lg text-gray-800 font-medium flex items-center"
                      >
                        <span className="mr-2 text-purple-900 text-xl">
                          &bull;
                        </span>
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
    </div>
  );
}
