import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import BusinessServices from './BusinessServices';
import PartnerLogos from './PartnerLogos';

interface HomeProps {
    onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <main>
            <Hero onNavigate={onNavigate} />
            <div className="bg-black">
                <PartnerLogos />
            </div>
            <div className="bg-black">
                <Features onNavigate={onNavigate} />
            </div>
            <div className="bg-slate-900">
                <HowItWorks />
            </div>
            <div className="bg-black">
                <BusinessServices onNavigate={onNavigate} />
            </div>
            <div className="bg-slate-900">
                <Testimonials />
            </div>
        </main>
    );
};

export default Home;