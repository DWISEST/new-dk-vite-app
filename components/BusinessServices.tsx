
import React from 'react';
import { BUSINESS_SERVICES } from '../constants';

interface BusinessServicesProps {
  onNavigate: (path: string) => void;
}

const BusinessServices: React.FC<BusinessServicesProps> = ({ onNavigate }) => {
  return (
    <section id="business-services" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Beyond Connectivity: Business Solutions
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
  );
};

export default BusinessServices;
