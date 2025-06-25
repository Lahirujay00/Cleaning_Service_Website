import React from 'react';

const LoadingAnimation = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative w-24 h-24 mb-4">
        {/* Water drops animation */}
        <div className="water-drop absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="water-drop delay-300 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="water-drop delay-600 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        
        {/* Circle border that fills up */}
        <div className="loading-circle"></div>
        
        {/* Spray bottle */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[#2CA2B0] rounded-b-lg"></div>
        <div className="absolute bottom-8 left-0 w-full h-12 bg-[#2CA2B0]/80 rounded-lg"></div>
        <div className="absolute bottom-16 left-6 w-2 h-6 bg-[#2CA2B0] rounded-t-lg"></div>
      </div>
      <p className="text-[#2CA2B0] font-medium animate-pulse">Preparing your spotless experience...</p>
    </div>
  );
};

export default LoadingAnimation;
