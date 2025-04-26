
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
        className="block absolute top-0 left-0 z-20 w-full"
      >
        <div 
          className="offer-banner cursor-pointer bg-royal-gold text-royal-black font-bold 
            py-2 px-6 rounded-br shadow-md transition-all duration-300 
            hover:bg-royal-gold/90 focus:outline-none focus:ring-2 
            focus:ring-royal-gold focus:ring-offset-2 active:scale-95"
        >
          CLAIM EXCLUSIVE OFFER TODAY!
        </div>
      </a>
    </div>
  );
};

export default OfferBanner;
