'use client'
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../Components/Layout';
import GlassEffectBg from '../Components/Landing/GlassEffectBg';

// Direct imports for testing
import gallery1 from '../assets/gallery/gallery1.webp';
import gallery2 from '../assets/gallery/gallery2.webp';
import gallery3 from '../assets/gallery/gallery3.webp';

// Gallery images array
const galleryImagesData = [
  {
    id: 1,
    src: gallery1,
    alt: 'Gallery 1',
    title: 'Gallery 1',
    category: 'General',
    description: 'Gallery 1 - General image',
    filename: 'gallery1.webp'
  },
  {
    id: 2,
    src: gallery2,
    alt: 'Gallery 2',
    title: 'Gallery 2',
    category: 'General',
    description: 'Gallery 2 - General image',
    filename: 'gallery2.webp'
  },
  {
    id: 3,
    src: gallery3,
    alt: 'Gallery 3',
    title: 'Gallery 3',
    category: 'General',
    description: 'Gallery 3 - General image',
    filename: 'gallery3.webp'
  },
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(galleryImagesData);

  useEffect(() => {
    console.log('Gallery images:', galleryImages);
  }, [galleryImages]);

  const categories = galleryImages.length > 0 ? ['All', ...new Set(galleryImages.map(img => img.category))] : ['All'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-slate-200">
        <GlassEffectBg />
      </div>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12 z-20 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mt-12">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore the memories and milestones of our research journey through this curated collection of images.
            </p>
          </div>
          {/* Category Filter */}
          {galleryImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:scale-105'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>


          )}
          
          {/* Gallery Content */}
          {galleryImages.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Images Found</h3>
                <p className="text-gray-600 mb-6">
                  Add images to the <code>src/assets/gallery/</code> folder to see them appear here automatically.
                </p>
                <div className="text-left bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Supported formats:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• WebP images only</li>
                    <li>• Add .webp files to src/assets/gallery/</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Pinterest-style Masonry Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        effect="blur"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width="100%"
                        height="256"
                      />


                    </div>
                  </div>
                ))}
              </div>

              {/* Modal for full-size image view */}
              {selectedImage && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                  onClick={closeModal}
                >
                  <div
                    className="relative max-w-4xl max-h-[90vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LazyLoadImage
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      effect="blur"
                      className="max-w-full max-h-full object-contain rounded-2xl"
                      width="100%"
                      height="auto"
                    />

                    {/* Close button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                  </div>
                </div>
              )}


            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Gallery;
