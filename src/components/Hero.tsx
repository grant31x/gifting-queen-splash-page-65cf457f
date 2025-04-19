
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
            <p className="text-royal-gold opacity-90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-2">Hi,</p>
            <h1 className="hero-title text-royal-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
              I'M TAMI
            </h1>
            <h2 className="hero-title text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              THE STRATEGIC <br />GIFTING QUEEN
            </h2>
            <p className="hero-subtitle text-royal-gold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 max-w-[400px]">
              HELPING YOU FIND AND KEEP CUSTOMERS FOR LIFE!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
