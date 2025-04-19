
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const OfferBanner = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute top-0 left-0 z-10">
      <a 
        href="https://go.mailboxpower.com/specialoffer?invite=BROWNIES" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
      >
        <div className="offer-banner cursor-pointer bg-royal-gold text-royal-black font-bold py-2 px-6 rounded-br shadow-md">
          CLAIM EXCLUSIVE OFFER TODAY!
        </div>
      </a>
    </div>
  );
};

export default OfferBanner;
