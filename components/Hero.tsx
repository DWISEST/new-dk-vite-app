
import React from 'react';
import BrandText from './ui/BrandText';
import ServiceCheck from './ServiceCheck';

interface HeroProps {
    onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section 
        className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden"
    >
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative container mx-auto px-6 text-center animate-fade-in-up z-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
          High-Speed Internet for The Gambia
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-secondary font-semibold italic">
            ...the difference will amaze you.
        </p>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mt-6">
          <BrandText>Order now for reliable, fast internet at your home or business. Professional installation available nationwide.</BrandText>
        </p>
        <ServiceCheck onNavigate={onNavigate} />
      </div>
    </section>
  );
};

export default Hero;