
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const OfferBanner = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute top-0 left-0 z-20 w-auto">
      <a 
        href="https://go.mailboxpower.com/specialoffer?invite=BROWNIES" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block text-center"
      >
        <div 
          className="bg-royal-gold text-royal-black font-bold 
            py-2 px-6 rounded-br-md shadow-md transform transition-all duration-300 
            hover:scale-105 hover:shadow-lg hover:brightness-110 cursor-pointer"
          onClick={() => {
            console.log("Banner clicked");
            window.open("https://go.mailboxpower.com/specialoffer?invite=BROWNIES", "_blank", "noopener,noreferrer");
          }}
        >
          CLAIM EXCLUSIVE OFFER TODAY!
        </div>
      </a>
    </div>
  );
};

export default OfferBanner;
