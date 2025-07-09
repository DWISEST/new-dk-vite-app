import React from 'react';
import { PLANS, BUSINESS_SERVICES } from '../constants';
import Card from './ui/Card';
import Button from './ui/Button';
import type { Plan } from '../types';
import BackButton from './ui/BackButton';

interface SalesPageProps {
  onNavigate: (path: string) => void;
  onSignUpClick: (plan: Plan) => void;
  onRequestQuote: (topic: string) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const SalesPage: React.FC<SalesPageProps> = ({ onNavigate, onSignUpClick, onRequestQuote, canGoBack, onGoBack }) => {
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
            <h1 className="text-4xl md:text-5xl font-bold">Ready to Get Connected?</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Find the perfect solution for your home or business. Our sales team is here to help you get started.</p>
        </div>
      </section>

      {/* Plans CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">For Your Needs</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Blazing-fast, reliable internet for streaming, gaming, and everything in between.</p>
          </div>
          <div className="max-w-4xl mx-auto">
             <Card className="text-center bg-slate-800">
                 <p className="text-slate-300 mb-6 text-lg">Browse our shared bandwidth packages with clear, upfront pricing, designed to perfectly match your internet needs.</p>
                <Button variant="primary" onClick={() => onNavigate('plans')} className="px-8 py-4 text-lg">
                    View All Shared Packages
                </Button>
             </Card>
          </div>
        </div>
      </section>

      {/* Business Solutions CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">For Your Business</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Powerful connectivity and IT solutions to help your business thrive.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <Card className="flex flex-col items-center justify-center text-center p-8 bg-slate-800">
                <h3 className="text-2xl font-bold text-white mb-2">Dedicated Bandwidth</h3>
                <p className="text-slate-400 mb-6 flex-grow">Guaranteed speeds and enterprise-grade reliability for mission-critical operations.</p>
                <Button variant="secondary" onClick={() => onRequestQuote('Dedicated Bandwidth')}>
                    Request a Dedicated Quote
                </Button>
            </Card>
             <Card className="flex flex-col items-center justify-center text-center p-8 bg-slate-800">
                <h3 className="text-2xl font-bold text-white mb-2">IT & Development Services</h3>
                <p className="text-slate-400 mb-6 flex-grow">From email hosting to custom apps, leverage our expertise to power your growth.</p>
                <Button variant="outline" onClick={() => onNavigate('#business-services')}>
                    Explore Business Services
                </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SalesPage;