
import React from 'react';
import { FEATURES } from '../constants';
import BrandText from './ui/BrandText';
import ServiceCheck from './ServiceCheck';

interface FeaturesProps {
  onNavigate: (path: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-slate-400">At </span><BrandText>dktelecom</BrandText>
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            We're more than just an ISP. We are your partner in connectivity, offering unparalleled speed and unwavering reliability.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-white">Ready to Experience the Difference?</h3>
          <p className="mt-2 text-lg text-slate-400">Check if our high-speed service is available at your address.</p>
          <ServiceCheck onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
};

export default Features;