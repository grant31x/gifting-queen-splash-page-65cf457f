
import React from 'react';
import OfferBanner from './OfferBanner';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/91d72838-34bc-445f-bec6-d75557018279.png" 
          alt="Tami - The Strategic Gifting Queen" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Offer Banner */}
      <OfferBanner />
      
      {/* Hero Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 lg:w-5/12 text-left">
            <p className="text-royal-gold opacity-90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-2">Hi,</p>
            <h1 className="hero-title text-royal-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3">
              I'M TAMI
            </h1>
            <h2 className="hero-title text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              THE STRATEGIC <br />GIFTING QUEEN
            </h2>
            <p className="hero-subtitle text-royal-gold text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-[400px]">
              Helping you find and keep customers for life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
