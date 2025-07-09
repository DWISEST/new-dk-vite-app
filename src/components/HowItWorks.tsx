
import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="bg-slate-900">
      <div className="container mx-auto px-6 py-20 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get Connected in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We've made switching to a faster internet as easy as possible.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 space-y-8 md:space-y-0">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <div key={index} className="min-h-[50vh] md:min-h-[70vh] flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              <div 
                className={`relative w-full h-80 md:h-[60vh] rounded-xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'md:order-last' : ''}`}
              >
                <img src={step.imageUrl} alt={step.title} className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-800 border-2 border-slate-700 mb-6">
                   {step.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-lg">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;