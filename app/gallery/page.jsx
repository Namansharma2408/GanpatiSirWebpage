"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

const Page = () => {
  const images = Array(16).fill({ src: '/neeraj.webp' })

  const heightClasses = ['h-32', 'h-48', 'h-64', 'h-80']

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  // Store random heights in state, only on client
  const [randomHeights, setRandomHeights] = useState([])

  useEffect(() => {
    setRandomHeights(images.map(() => heightClasses[Math.floor(Math.random() * heightClasses.length)]))
  }, [])

  return (
    <div>
      <div className='h-32'/>
      <div className="text-center mb-12 z-20 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent ">
          Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Explore the memories and milestones of our research journey through this curated collection of images.
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {randomHeights.length > 0 && images.map((img, idx) => (
          <div key={idx} className={`relative w-full ${randomHeights[idx]} overflow-hidden rounded-lg mb-4`}>
            <Image
              src={img.src}
              alt={img.alt || 'Image'}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default Page
