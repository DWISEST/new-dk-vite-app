import React, { useState } from 'react';
import { 
    HeadsetIcon, TrendingUpIcon, CreditCardIcon, PhoneIcon, MapPinIcon, ClockIcon, LOCATIONS
} from '../constants';
import type { LocationInfo } from '../types';
import Card from './ui/Card';
import BackButton from './ui/BackButton';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, canGoBack, onGoBack }) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo>(LOCATIONS[0]);

  return (
    <main className="animate-fade-in-up">
      {/* Hero */}
      <section className="bg-primary-900/50 text-white py-20 text-center relative">
         {canGoBack && (
            <div className="absolute top-8 left-8">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold">How can we help?</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Our team is ready to assist you. Choose a category below to get started and find the right support fast.</p>
        </div>
      </section>
      
      {/* Pathways */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="text-center flex flex-col items-center p-8 cursor-pointer group hover:border-primary-600 bg-slate-800" onClick={() => onNavigate('sales')}>
                    <div className="bg-slate-700 p-4 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110">
                        <TrendingUpIcon className="h-8 w-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">Sales Inquiry</h3>
                    <p className="text-slate-400 flex-grow mb-4">Interested in our plans or business solutions? Get in touch with our sales team.</p>
                    <span className="font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Go to Sales →</span>
                </Card>
                <Card className="text-center flex flex-col items-center p-8 cursor-pointer group hover:border-primary-600 bg-slate-800" onClick={() => onNavigate('support')}>
                    <div className="bg-slate-700 p-4 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110">
                        <HeadsetIcon className="h-8 w-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">Technical Support</h3>
                    <p className="text-slate-400 flex-grow mb-4">Experiencing an issue? Our technical experts are ready to assist you.</p>
                    <span className="font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Get Support →</span>
                </Card>
                <Card className="text-center flex flex-col items-center p-8 cursor-pointer group hover:border-primary-600 bg-slate-800" onClick={() => onNavigate('billing')}>
                    <div className="bg-slate-700 p-4 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110">
                        <CreditCardIcon className="h-8 w-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">Billing Question</h3>
                    <p className="text-slate-400 flex-grow mb-4">Have a question about your invoice or payments? We're here to help.</p>
                    <span className="font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Go to Billing →</span>
                </Card>
            </div>
        </div>
      </section>

      {/* Visit Us Section with Map */}
      <section id="visit-us" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Visit Our Offices</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              We're happy to assist you in person. Select a location to see details and get directions.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Location List (Left) */}
            <div className="lg:col-span-1 space-y-4">
              {LOCATIONS.map((location) => (
                <Card 
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  className={`p-6 cursor-pointer border-2 transition-all duration-300 bg-slate-800 ${
                    selectedLocation.name === location.name 
                      ? 'border-primary shadow-2xl scale-105' 
                      : 'border-slate-700 hover:border-primary/50'
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{location.name}</h3>
                  <div className="space-y-3 text-sm text-slate-400">
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {/* Map (Right) */}
            <div className="lg:col-span-2 h-96 lg:h-full rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <iframe
                src={selectedLocation.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${selectedLocation.name}`}
                className="min-h-[450px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;