
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

interface InfoBoxProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  linkText: string;
  href: string;
}

const InfoBox = ({ icon, title, subtitle, linkText, href }: InfoBoxProps) => {
  return (
    <a 
      href={href} 
      className="block bg-royal-black border border-royal-gold/30 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-royal-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="mb-2">
        {title}
      </div>
      {subtitle && <div className="text-royal-cream/80 mb-4">{subtitle}</div>}
      <div className="text-royal-cream/60 mt-2 text-sm tracking-wide">
        {linkText}
      </div>
    </a>
  );
};

const InfoSection = () => {
  return (
    <div className="bg-royal-black py-16 px-4">
      {/* Title */}
      <h2 className="text-white text-4xl sm:text-5xl font-serif font-bold text-center mb-16">
        MORE INFORMATION BELOW
      </h2>
      
      {/* Info Boxes Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mb-16">
        {/* Mailbox Power Box */}
        <InfoBox 
          icon={<div className="bg-[#30A9DE] w-16 h-16 rounded-full flex items-center justify-center">
            <Mail size={36} color="white" />
          </div>}
          title={<>
            <h3 className="text-[#30A9DE] text-2xl font-bold">MAILBOX POWER</h3>
            <p className="text-[#30A9DE] text-xl font-bold">-VIDEO DEMO-</p>
            <p className="text-[#30A9DE] text-xl font-bold">BOOK A CALL</p>
          </>}
          linkText="CLICK HERE"
          href="#mailbox-power"
        />
        
        {/* About Me Box */}
        <InfoBox 
          icon={<img src="/lovable-uploads/eeb5b286-832c-4437-9952-8b24132aa7cb.png" alt="Tami" className="w-16 h-16 rounded-full object-cover" />}
          title={<>
            <h3 className="text-royal-cream text-2xl font-bold">ABOUT ME</h3>
            <p className="text-royal-cream text-xl font-bold">COMING SOON</p>
          </>}
          linkText="CLICK HERE"
          href="#about-me"
        />
        
        {/* Free Gift Box */}
        <InfoBox 
          icon={<img src="/lovable-uploads/eeb5b286-832c-4437-9952-8b24132aa7cb.png" alt="Gift" className="w-16 h-16 rounded-full object-cover" />}
          title={<h3 className="text-royal-cream text-2xl font-bold">FREE GIFT</h3>}
          subtitle="DOWNLOAD TODAY"
          linkText=""
          href="#free-gift"
        />
        
        {/* I Wish More People Knew Box */}
        <InfoBox 
          icon={<div className="bg-[#30A9DE] w-16 h-16 rounded-full flex items-center justify-center">
            <Mail size={36} color="white" />
          </div>}
          title={<>
            <h3 className="text-[#30A9DE] text-2xl font-bold">I WISH MORE</h3>
            <p className="text-[#30A9DE] text-xl font-bold">PEOPLE KNEW</p>
            <p className="text-[#30A9DE] text-xl font-bold">THAT...</p>
          </>}
          linkText="CLICK HERE"
          href="#wish-more"
        />
      </div>

      {/* Social Connection Section */}
      <div className="text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-serif font-bold mb-6">
          ARE WE CONNECTED?
        </h2>
        <div className="flex justify-center gap-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Instagram size={48} className="text-white p-2 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Linkedin size={48} className="text-white p-2 rounded-full bg-[#0077b5]" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Youtube size={48} className="text-white p-2 rounded-full bg-[#ff0000]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
