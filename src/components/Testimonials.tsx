

import React from 'react';
import { TESTIMONIALS, StarIcon } from '../constants';
import BrandText from './ui/BrandText';

const getInitials = (name: string): string => {
  const names = name.split(' ');
  if (names.length === 1) {
    return names[0].substring(0, 2).toUpperCase();
  }
  return (names[0][0] + (names[names.length - 1][0] || '')).toUpperCase();
};

const avatarColors = [
    'bg-primary/20 text-primary',
    'bg-secondary/20 text-secondary',
    'bg-green-500/20 text-green-300',
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Loved by Customers Everywhere
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="flex flex-col p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-slate-700 text-slate-300 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                            {testimonial.plan} Plan
                        </span>
                        <div className="flex items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <StarIcon key={i} className="h-5 w-5 text-secondary" />
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-300 italic text-lg leading-relaxed mb-6">"<BrandText>{testimonial.quote}</BrandText>"</p>
                </div>
                <div className="flex items-center mt-auto pt-6 border-t border-slate-700">
                    <div className={`w-14 h-14 rounded-full ${avatarColors[index % avatarColors.length]} flex-shrink-0 flex items-center justify-center mr-4`}>
                        <span className="text-xl font-bold">{getInitials(testimonial.author)}</span>
                    </div>
                    <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        <p className="text-sm text-slate-400">{testimonial.location}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;