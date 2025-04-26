
import React from 'react';
import { Gift, UserCircle, Mail, lightbulb } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface InfoBoxProps {
  title: React.ReactNode;
  subtitle?: string;
  linkText: string;
  href: string;
  icon: React.ReactNode;
}

const InfoBox = ({ title, subtitle, linkText, href, icon }: InfoBoxProps) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-royal-black border border-royal-gold/30 p-4 sm:p-6 text-center transition-all duration-300 hover:scale-105 hover:border-royal-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] relative min-h-[250px] flex flex-col"
    >
      <div className="flex justify-center mb-6">
        <div className="text-royal-gold w-12 h-12 sm:w-16 sm:h-16">
          {icon}
        </div>
      </div>
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
    <div className="bg-royal-black py-8 sm:py-12 px-4">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-8 sm:mb-12">
        MORE INFORMATION BELOW
      </h2>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mb-8 sm:mb-12">
        <InfoBox 
          title={<>
            <h3 className="text-royal-cream text-lg sm:text-xl font-bold">MAILBOX POWER</h3>
            <p className="text-royal-cream text-base sm:text-lg font-bold">-VIDEO DEMO-</p>
            <p className="text-royal-cream text-base sm:text-lg font-bold">BOOK A CALL</p>
          </>}
          linkText="CLICK HERE"
          href="https://app.mailboxpower.com/demo/BROWNIES"
          icon={<Mail className="w-full h-full" />}
        />
        
        <InfoBox 
          title={<>
            <h3 className="text-royal-cream text-lg sm:text-xl font-bold">ABOUT ME</h3>
            <p className="text-royal-cream text-base sm:text-lg font-bold">COMING SOON</p>
          </>}
          linkText="CLICK HERE"
          href="#about-me"
          icon={<UserCircle className="w-full h-full" />}
        />
        
        <InfoBox 
          title={<h3 className="text-royal-cream text-lg sm:text-xl font-bold">FREE GIFT</h3>}
          linkText="CLICK HERE"
          href="https://tamigrant.myflodesk.com/linkinbio"
          icon={<Gift className="w-full h-full" />}
        />
        
        <InfoBox 
          title={<>
            <h3 className="text-royal-cream text-lg sm:text-xl font-bold">7 REASONS</h3>
            <p className="text-royal-cream text-base sm:text-lg font-bold">I CHOOSE</p>
            <p className="text-royal-cream text-base sm:text-lg font-bold">MAILBOX POWER</p>
          </>}
          linkText="CLICK HERE"
          href="https://youtu.be/WwCwFFbio1Q"
          icon={<lightbulb className="w-full h-full" />}
        />
      </div>

      <div className="text-center">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4">
          ARE WE CONNECTED?
        </h2>
        <div className="flex justify-center gap-4">
          <a 
            href="https://www.instagram.com/the.strategicgifting.queen?igsh=bzJndW8wdnpwd2M%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img 
              src="/lovable-uploads/2464fbf7-692a-4470-8395-96ad1ae39c33.png" 
              alt="Instagram" 
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/tamigrant1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img 
              src="/lovable-uploads/6465750e-28f5-4c04-a63d-3da3bb3f241e.png" 
              alt="LinkedIn" 
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
          <a 
            href="https://www.youtube.com/@iamtamigrant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img 
              src="/lovable-uploads/c452717f-c426-468a-90cb-8987816f4ee6.png" 
              alt="YouTube" 
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
