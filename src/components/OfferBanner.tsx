
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
        className="block"
      >
        <div className="offer-banner cursor-pointer hover:scale-105 transition-transform duration-300">
          CLAIM EXCLUSIVE OFFER TODAY!
        </div>
      </a>
    </div>
  );
};

export default OfferBanner;
