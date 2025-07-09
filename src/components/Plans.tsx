import React from 'react';
import { PLANS } from '../constants';
import { CheckCircleIcon } from '../constants';
import Button from './ui/Button';
import type { Plan } from '../types';
import BackButton from './ui/BackButton';
import Card from './ui/Card';

interface PlansProps {
  onRecommendClick: () => void;
  onNavigate: (path: string) => void;
  onSignUpClick: (plan: Plan) => void;
  onRequestQuote: (topic: string) => void;
  canGoBack?: boolean;
  onGoBack?: () => void;
  isPage?: boolean;
}

interface PlanCardProps {
    plan: Plan;
    onSignUpClick: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSignUpClick }) => (
    <div className={`
        group relative flex flex-col rounded-2xl overflow-hidden
        transition-all duration-300 transform hover:-translate-y-2
        ${plan.isPopular ? 'bg-slate-800' : 'bg-slate-900 border border-slate-800'}
    `}>
        {plan.isPopular && (
            <>
                <div className="absolute top-0 right-0 z-10">
                    <div className="w-28 h-28 overflow-hidden">
                        <div className="absolute transform rotate-45 bg-primary text-center text-white font-semibold py-1 right-[-34px] top-[32px] w-[170px]">
                            Popular
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"></div>
            </>
        )}

        {/* Illustration */}
        <div className="relative h-48">
            <img src={plan.illustrationUrl} alt={`${plan.name} plan illustration`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.name}</h3>
            </div>
        </div>
        
        <div className="flex flex-col p-6 flex-grow">
            {/* Price */}
            <div className="my-2">
                <div className="flex items-baseline justify-start">
                    <span className="text-xl font-bold text-slate-400 mr-1">D</span>
                    <span className="text-4xl font-extrabold text-white">{plan.price.toLocaleString()}</span>
                    <span className="text-slate-400 ml-1.5">/mo</span>
                </div>
            </div>
          
            {/* Description */}
            <p className="text-slate-400 mt-2 text-sm">{plan.description}</p>
          
            {/* Speed Meter */}
            <div className="mt-6">
                <p className="text-sm font-semibold text-slate-300 mb-2">Speed</p>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${plan.speedValue * 10}%` }}
                    ></div>
                </div>
                <p className="text-right text-primary font-bold mt-1">{plan.speed.split(' ')[0]} Mbps</p>
            </div>
          
            {/* Best For Section */}
            <div className="mt-6">
                <p className="text-sm font-semibold text-slate-300 mb-3">Best for:</p>
                <ul className="space-y-3 text-slate-300">
                    {plan.bestFor.map((item, i) => (
                        <li key={i} className="flex items-center text-sm">
                            <span className="text-primary">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-grow"></div>
          
            {/* Features List */}
            <ul className="space-y-3 my-8 text-slate-300 border-t border-slate-700 pt-6">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                        <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button variant={plan.isPopular ? 'primary' : 'outline'} className="w-full mt-auto" onClick={() => onSignUpClick(plan)}>
                Choose {plan.name}
            </Button>
        </div>
    </div>
);

export const Plans: React.FC<PlansProps> = ({ onRecommendClick, onNavigate, onSignUpClick, onRequestQuote, canGoBack, onGoBack, isPage = false }) => {
  return (
    <section id="plans" className={isPage ? 'pt-12 pb-20' : 'py-20'}>
      <div className="container mx-auto px-6">
        {isPage && canGoBack && onGoBack && <div className="mb-12"><BackButton onClick={onGoBack} /></div>}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Shared Bandwidth Plans
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Simple, transparent pricing for homes and businesses. No hidden fees, ever.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onSignUpClick={onSignUpClick} />
          ))}
        </div>

        <div className="mt-24 text-center">
            <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-br from-slate-900 to-black p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-2 text-white">Need More Power? <span className="text-secondary">Dedicated Bandwidth</span></h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">For enterprises and power users requiring guaranteed speeds and ultimate reliability. Prices start from <span className="font-bold text-secondary">D1,000 for 1Mbps</span>. Contact us for a custom quote tailored to your needs.</p>
                    <Button variant="secondary" onClick={() => onRequestQuote('Dedicated Bandwidth')}>
                        Get a Custom Quote
                    </Button>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-slate-800/80">
                <h3 className="text-xl font-semibold mb-2 text-white">Not sure which plan is right for you?</h3>
                <p className="text-slate-400 mb-4">Let our AI assistant help you find the perfect fit based on your needs.</p>
                <Button variant="primary" onClick={onRecommendClick}>
                    Get AI Recommendation
                </Button>
            </Card>
        </div>
      </div>
    </section>
  );
};