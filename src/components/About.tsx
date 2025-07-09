
import React from 'react';
import { COMPANY_VALUES, TEAM_MEMBERS, generatePlaceholder } from '../constants';
import Card from './ui/Card';
import BrandText from './ui/BrandText';
import BackButton from './ui/BackButton';
import Button from './ui/Button';

interface AboutProps {
    canGoBack: boolean;
    onGoBack: () => void;
    onNavigate: (path: string) => void;
}

interface AboutHeroProps {
    canGoBack: boolean;
    onGoBack: () => void;
}

const AboutHero: React.FC<AboutHeroProps> = ({ canGoBack, onGoBack }) => (
    <section 
        className="relative bg-cover bg-center py-32 md:py-48 text-white" 
        style={{ backgroundImage: `url('${generatePlaceholder(1920, 1080, 'About Us')}')` }}
    >
        {canGoBack && (
            <div className="absolute top-8 left-8 z-10">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                More Than a Connection.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
                <BrandText>We are dktelecom, a proudly Gambian company dedicated to building a stronger, more connected future for our nation.</BrandText>
            </p>
        </div>
    </section>
);

const OurMission: React.FC = () => (
    <section className="py-20 sm:py-32 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Why: A Pledge to The Gambia</h2>
                <p className="text-lg text-slate-300 mb-6">
                    <BrandText>dktelecom was born from a simple but powerful idea: to create a world-class telecommunications company that directly serves the people of The Gambia and contributes to its prosperity. In a world where profits are often sent overseas, we stand firm on our principle of <strong className="text-primary">zero capital flight</strong>.</BrandText>
                </p>
                <p className="text-lg text-slate-300">
                    This means every subscription, every installation, and every new service is an investment back into our communities. We hire locally, partner with Gambian businesses, and dedicate our resources to building an infrastructure that empowers every citizen—from the student in a remote village to the entrepreneur in the heart of Serekunda. We're not just providing internet; we're building a legacy.
                </p>
            </div>
        </div>
    </section>
);

const OurValues = () => (
    <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Our Core Values</h2>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                    These principles guide every decision we make.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {COMPANY_VALUES.map((value) => (
                     <div key={value.title} className="text-center flex flex-col items-center p-6">
                        <div className="bg-slate-800 border-2 border-slate-700 p-4 rounded-full mb-6">
                            {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                        <p className="text-slate-400">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const OurTeam = () => (
    <section className="py-20 sm:py-32 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Meet Our Team</h2>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                    A passionate group of Gambians driving our mission forward.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM_MEMBERS.map((member) => (
                    <div key={member.name} className="text-center group">
                        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-primary transition-all duration-300">
                           <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-primary font-semibold">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const CareersCTA: React.FC<{onNavigate: (path: string) => void}> = ({ onNavigate }) => (
    <section className="py-20 bg-primary-700/20">
        <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Want to Join Our Mission?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">We're always looking for talented and passionate individuals to help us build the future of connectivity in The Gambia. Explore our open positions.</p>
            <Button 
              variant="secondary" 
              className="px-8 py-4 text-lg" 
              onClick={() => onNavigate('careers')}
            >
              View Careers
            </Button>
        </div>
    </section>
);


const About: React.FC<AboutProps> = ({ canGoBack, onGoBack, onNavigate }) => {
    return (
        <main className="animate-fade-in-up">
            <AboutHero canGoBack={canGoBack} onGoBack={onGoBack} />
            <OurMission />
            <OurValues />
            <OurTeam />
            <CareersCTA onNavigate={onNavigate} />
        </main>
    );
};

export default About;