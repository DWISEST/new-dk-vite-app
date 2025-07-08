import React from 'react';
import type { ServiceDetail } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import BackButton from './ui/BackButton';

interface BusinessServicePageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onRequestQuote: (topic: string) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const BusinessServicePage: React.FC<BusinessServicePageProps> = ({ service, onNavigate, onRequestQuote, canGoBack, onGoBack }) => {
  return (
    <main className="animate-fade-in-up">
      {/* Hero Section */}
      <section 
          className="relative bg-cover bg-center py-32 md:py-48 text-white" 
          style={{ backgroundImage: `url('${service.hero.imageUrl}')` }}
      >
        {canGoBack && (
            <div className="absolute top-8 left-8 z-10">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {service.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            {service.hero.subtitle}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{service.about.title}</h2>
                <p className="text-lg text-slate-300">
                    {service.about.description}
                </p>
            </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Key Features</h2>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                    Everything you need to succeed, backed by our expert team.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {service.features.map((feature) => (
                    <div key={feature.title} className="text-center flex flex-col items-center p-6">
                        <div className="bg-slate-800 border-2 border-slate-700 p-4 rounded-full mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-primary-700/20">
        <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">{service.cta.title}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">{service.cta.description}</p>
            <Button 
              variant="secondary" 
              className="px-8 py-4 text-lg" 
              onClick={() => onRequestQuote(service.hero.title)}
            >
              {service.cta.buttonText}
            </Button>
        </div>
    </section>
    </main>
  );
};

export default BusinessServicePage;