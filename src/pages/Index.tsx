
import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import OfferBanner from '../components/OfferBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-royal-black overflow-x-hidden flex flex-col">
      <OfferBanner />
      <Hero />
      <InfoSection />
      {/* This empty div will push the content to fill any remaining space with black background */}
      <div className="flex-grow bg-royal-black"></div>
    </div>
  );
};

export default Index;
