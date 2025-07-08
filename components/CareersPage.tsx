import React, { useState } from 'react';
import { WORK_CULTURE_ITEMS, CheckCircleIcon, MapPinIcon, ClockIcon, generatePlaceholder } from '../constants';
import type { Job } from '../types';
import BackButton from './ui/BackButton';
import Card from './ui/Card';
import Button from './ui/Button';
import BrandText from './ui/BrandText';

interface CareersPageProps {
  jobs: Job[];
  onNavigate: (path: string) => void;
  onApplyClick: (job: Job) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const JobListItem: React.FC<{ job: Job, onApplyClick: (job: Job) => void, onToggle: (id: string) => void, isExpanded: boolean }> = ({ job, onApplyClick, onToggle, isExpanded }) => {
    return (
        <Card className={`bg-slate-800/80 transition-all duration-300 ${isExpanded ? 'border-primary/50' : 'hover:border-primary/20'}`}>
            <div className="cursor-pointer" onClick={() => onToggle(job.id)}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary-400">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                            <span>{job.department}</span>
                            <span className="flex items-center"><MapPinIcon className="h-4 w-4 mr-1"/>{job.location}</span>
                            <span className="flex items-center"><ClockIcon className="h-4 w-4 mr-1"/>{job.type}</span>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <span className="inline-flex items-center font-semibold text-white">
                           {isExpanded ? 'Hide Details' : 'View Details'}
                           <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 pt-6 mt-6 border-t border-slate-700' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-300 mb-6">{job.description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-semibold text-white mb-3">Responsibilities</h4>
                        <ul className="space-y-2 text-slate-400">
                            {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-3">Qualifications</h4>
                         <ul className="space-y-2 text-slate-400">
                            {job.qualifications.map((item, i) => (
                                <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-right">
                    <Button variant="primary" onClick={() => onApplyClick(job)}>Apply Now</Button>
                </div>
            </div>
        </Card>
    );
};


const CareersPage: React.FC<CareersPageProps> = ({ jobs, onNavigate, onApplyClick, canGoBack, onGoBack }) => {
    const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

    const handleToggleJob = (jobId: string) => {
        setExpandedJobId(prevId => (prevId === jobId ? null : jobId));
    };

  return (
    <main className="animate-fade-in-up">
      {/* Hero Section */}
      <section 
          className="relative bg-cover bg-center py-32 md:py-48 text-white" 
          style={{ backgroundImage: `url('${generatePlaceholder(1920, 1080, 'Join Our Team')}')` }}
      >
        {canGoBack && (
            <div className="absolute top-8 left-8 z-10">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            <BrandText>Be a part of the team that's building the digital future of The Gambia. We're looking for passionate innovators to join our mission.</BrandText>
          </p>
        </div>
      </section>

       {/* Why Work With Us Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Why Work at <BrandText>dktelecom</BrandText>?</h2>
                <p className="mt-4 text-lg text-slate-400">
                    We're more than a company; we're a community. We believe in fostering a culture of growth, collaboration, and impact.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {WORK_CULTURE_ITEMS.map((item) => (
                     <div key={item.title} className="text-center flex flex-col items-center p-6">
                        <div className="bg-slate-800 border-2 border-slate-700 p-4 rounded-full mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section id="open-positions" className="py-20 sm:py-32 bg-slate-900">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Open Positions</h2>
                <p className="mt-4 text-slate-400">Find your next opportunity and make your mark.</p>
            </div>
            <div className="space-y-6">
                {jobs.map(job => (
                    <JobListItem 
                        key={job.id} 
                        job={job} 
                        onApplyClick={onApplyClick}
                        onToggle={handleToggleJob}
                        isExpanded={expandedJobId === job.id}
                    />
                ))}
            </div>
            <Card className="mt-16 text-center bg-slate-800">
                <h3 className="text-2xl font-bold text-white mb-2">Don't see the right fit?</h3>
                <p className="text-slate-400 mb-6">We're always looking for great talent. If you believe you have what it takes to contribute to our team, send us a speculative application!</p>
                <Button variant="secondary" onClick={() => onApplyClick({} as Job)}>Apply Generally</Button>
            </Card>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;