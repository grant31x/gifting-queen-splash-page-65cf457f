
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface InfoBoxProps {
  title: React.ReactNode;
  subtitle?: string;
  linkText: string;
  href: string;
  imageSrc?: string;
}

const InfoBox = ({ title, subtitle, linkText, href, imageSrc }: InfoBoxProps) => {
  return (
    <a 
      href={href} 
      className="block bg-royal-black border border-royal-gold/30 p-4 sm:p-6 text-center transition-all duration-300 hover:scale-105 hover:border-royal-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] relative min-h-[300px] flex flex-col"
    >
      {imageSrc && (
        <div className="mb-4 w-full h-32 overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-between flex-grow">
        <div className="text-center">
          {title}
          {subtitle && <div className="text-royal-cream text-lg sm:text-xl font-bold mb-4">{subtitle}</div>}
        </div>
        <div className="text-royal-cream/60 mt-auto text-xs sm:text-sm tracking-wide">
          {linkText}
        </div>
      </div>
    </a>
  );
};

const InfoSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-royal-black py-10 sm:py-16 px-4">
      {/* Title */}
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-10 sm:mb-16">
        MORE INFORMATION BELOW
      </h2>
      
      {/* Info Boxes Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mb-10 sm:mb-16">
        {/* Mailbox Power Box */}
        <InfoBox 
          title={<>
            <h3 className="text-royal-cream text-xl sm:text-2xl font-bold">MAILBOX POWER</h3>
            <p className="text-royal-cream text-lg sm:text-xl font-bold">-VIDEO DEMO-</p>
            <p className="text-royal-cream text-lg sm:text-xl font-bold">BOOK A CALL</p>
          </>}
          linkText="CLICK HERE"
          href="https://app.mailboxpower.com/demo/BROWNIES"
          imageSrc="/lovable-uploads/eeb5b286-832c-4437-9952-8b24132aa7cb.png"
        />
        
        {/* About Me Box */}
        <InfoBox 
          title={<>
            <h3 className="text-royal-cream text-xl sm:text-2xl font-bold">ABOUT ME</h3>
            <p className="text-royal-cream text-lg sm:text-xl font-bold">COMING SOON</p>
          </>}
          linkText="CLICK HERE"
          href="#about-me"
          imageSrc="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        />
        
        {/* Free Gift Box */}
        <InfoBox 
          title={<h3 className="text-royal-cream text-xl sm:text-2xl font-bold">FREE GIFT</h3>}
          subtitle="COMING SOON"
          linkText="CLICK HERE"
          href="https://tamigrant.myflodesk.com/linkinbio"
          imageSrc="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
        />
        
        {/* 7 Reasons Box */}
        <InfoBox 
          title={<>
            <h3 className="text-royal-cream text-xl sm:text-2xl font-bold">7 REASONS</h3>
            <p className="text-royal-cream text-lg sm:text-xl font-bold">I CHOOSE</p>
            <p className="text-royal-cream text-lg sm:text-xl font-bold">MAILBOX POWER</p>
          </>}
          linkText="CLICK HERE"
          href="https://youtu.be/WwCwFFbio1Q"
          imageSrc="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        />
      </div>

      {/* Social Connection Section */}
      <div className="text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">
          ARE WE CONNECTED?
        </h2>
        <div className="flex justify-center gap-4 sm:gap-6">
          <a 
            href="https://www.instagram.com/the.strategicgifting.queen?igsh=bzJndW8wdnpwd2M%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Instagram size={isMobile ? 36 : 48} className="text-white p-2 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tamigrant1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Linkedin size={isMobile ? 36 : 48} className="text-white p-2 rounded-full bg-[#0077b5]" />
          </a>
          <a 
            href="https://www.youtube.com/@iamtamigrant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Youtube size={isMobile ? 36 : 48} className="text-white p-2 rounded-full bg-[#ff0000]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
