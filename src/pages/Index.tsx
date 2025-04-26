
import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import OfferBanner from '../components/OfferBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-royal-black overflow-x-hidden">
      <OfferBanner />
      <Hero />
      <InfoSection />
    </div>
  );
};

export default Index;
