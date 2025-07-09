
import React from 'react';
import { BUSINESS_SERVICES, GrowthIcon } from '../constants';
import BackButton from './ui/BackButton';
import Card from './ui/Card';
import Button from './ui/Button';

interface BusinessPageProps {
  onNavigate: (path: string) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ onNavigate, canGoBack, onGoBack }) => {
  return (
    <main className="animate-fade-in-up">
      {/* Hero Section */}
      <section 
          className="relative bg-cover bg-center py-32 md:py-48 text-white" 
          style={{ backgroundImage: `url('https://picsum.photos/seed/business-overview/1920/1080')` }}
      >
        {canGoBack && (
            <div className="absolute top-8 left-8 z-10">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Powering Gambian Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            From high-speed connectivity to custom digital solutions, we provide the tools you need to innovate and grow.
          </p>
        </div>
      </section>

      {/* Business Services List */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Business Services
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              Leverage our expert IT and development departments to power your business growth, from secure hosting to custom applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUSINESS_SERVICES.map((service, index) => (
              <div 
                key={service.slug} 
                className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-96 ${index === 0 ? 'md:col-span-2' : ''}`}
                onClick={() => onNavigate(`business/${service.slug}`)}
              >
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                  <div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-4 inline-block border border-white/20">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">{service.title}</h3>
                    <p className="text-sm text-slate-300">{service.description}</p>
                     <span className="mt-4 font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 inline-block transform group-hover:translate-x-1">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
            <Card className="bg-slate-800 text-center">
                <GrowthIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Ready to build the future?</h2>
                <p className="text-slate-300 mb-6 text-lg">
                    Whether you need guaranteed bandwidth, custom software, or strategic IT advice, our team is ready to partner with you. Let's discuss how we can help your business achieve its goals.
                </p>
                <Button variant="primary" onClick={() => onNavigate('contact')}>Contact Our Team</Button>
            </Card>
        </div>
      </section>

    </main>
  );
};

export default BusinessPage;
