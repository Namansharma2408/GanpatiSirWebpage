import React, { useState, useEffect } from 'react';

// Main component for the loading animation
const TestTubeLoader = () => {
  return (
    <div style={{ position: 'relative', width: 640, height: 480 }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        textShadow: '0 2px 8px rgba(0,0,0,0.7)',
        zIndex: 2
      }}>
        
      </div>
      <video
        width="640"
        height="480"
        loop
        autoPlay
        muted
        style={{
          display: 'block',
          borderRadius: '32px',
          opacity: 0.7,
          filter: 'blur(1px)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
        }}
      >
        <source src="LoadingVideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
};

export default TestTubeLoader;
