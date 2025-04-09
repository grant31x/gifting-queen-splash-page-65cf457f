
import React from 'react';
import OfferBanner from './OfferBanner';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
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
            <p className="text-royal-cream opacity-90 text-xl sm:text-2xl font-medium mb-2">Hi,</p>
            <h1 className="hero-title text-royal-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3">
              I'M TAMI
            </h1>
            <h2 className="hero-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              THE STRATEGIC <br />GIFTING QUEEN
            </h2>
            <p className="hero-subtitle text-royal-cream text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
              helping you find and keep customers for life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
