'use client'
import React from 'react';
import {TestTubeLoader} from '@/components';
import {LoadingBackground} from '@/components';

const LoadingScreen = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <LoadingBackground color="black" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <TestTubeLoader />
      </div>
    </div>
  );
};

export default LoadingScreen;
