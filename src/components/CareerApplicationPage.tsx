import React, { useState, useEffect } from 'react';
import type { Job } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import { CloudUploadIcon, MailIcon } from '../constants';
import BackButton from './ui/BackButton';

interface CareerApplicationPageProps {
    job: Job | null;
    onNavigate: (path: string) => void;
    canGoBack: boolean;
    onGoBack: () => void;
}

const CareerApplicationPage: React.FC<CareerApplicationPageProps> = ({ job, onNavigate, canGoBack, onGoBack }) => {
    const [showEmailPrompt, setShowEmailPrompt] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null as FileList | null,
        coverLetter: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        // If no job is selected (e.g., direct navigation), redirect to the careers page.
        // The empty job object {} is a special case for general applications.
        if (!job) {
            onNavigate('careers');
        }
    }, [job, onNavigate]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({ ...formData, resume: e.target.files });
             if (errors.resume) {
                const newErrors = { ...errors };
                delete newErrors.resume;
                setErrors(newErrors);
            }
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            const newErrors = { ...errors };
            delete newErrors[e.target.name];
            setErrors(newErrors);
        }
    };

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        if (!formData.resume) newErrors.resume = 'A resume/CV is required.';
        if (!formData.coverLetter.trim()) newErrors.coverLetter = 'A cover letter is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const generateMailtoLink = () => {
        const jobTitle = job?.title || 'General Application';
        const subject = `Job Application: ${jobTitle} - ${formData.name}`;
        const body = `
New job application received.

--- Applicant Details ---
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Applying for: ${jobTitle}

--- Cover Letter ---
${formData.coverLetter}

---------------------------------
*** IMPORTANT: The applicant has been instructed to attach their resume to this email. ***
Resume file: ${formData.resume?.[0]?.name || 'N/A'}
        `.trim().replace(/^\s+/gm, '');
        
        return `mailto:careers@dktelecom.gm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setShowEmailPrompt(true);
            window.location.href = generateMailtoLink();
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };
    
    if (!job) {
        return null; // Render nothing while redirecting
    }

    const jobTitle = job.title || 'General Application';

    const inputStyles = "mt-1 block w-full rounded-md shadow-sm sm:text-sm bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50";
    const errorInputStyles = "border-red-500";
    
    if (showEmailPrompt) {
        const resumeName = formData.resume?.[0]?.name || 'your CV file';
        return (
            <section className="py-20 md:py-32 bg-slate-900 animate-fade-in-up">
                <div className="container mx-auto px-6">
                    <Card className="max-w-2xl mx-auto text-center bg-slate-800">
                        <MailIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-white mb-2">Final Step: Send Your Application</h1>
                        <p className="text-lg text-slate-300 mb-6">
                            Your email client should now be open with your application details. Please review them and <strong className="text-secondary">remember to attach your resume</strong> before sending.
                        </p>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                            <p className="text-slate-300">File to attach:</p>
                            <p className="font-mono text-primary font-semibold text-lg break-all">{resumeName}</p>
                        </div>
                        <p className="text-sm text-slate-400 mt-4">
                            If your email client did not open, you can <a href={generateMailtoLink()} className="text-primary underline">click here to try again</a>.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" onClick={() => onNavigate('careers')}>Return to Careers Page</Button>
                        </div>
                    </Card>
                </div>
            </section>
        );
    }
    
    return (
        <section className="py-20 bg-slate-900 animate-fade-in-up">
            <div className="container mx-auto px-6">
                {canGoBack && <div className="mb-8"><BackButton onClick={onGoBack} /></div>}
                <div className="max-w-3xl mx-auto">
                     <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Apply for: <span className="text-primary">{jobTitle}</span></h1>
                        <p className="mt-2 text-lg text-slate-400">
                           We're excited to learn more about you. Please fill out the form below.
                        </p>
                    </div>
                    
                    <Card className="bg-slate-800">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`${inputStyles} ${errors.name ? errorInputStyles : ''}`} />
                                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`${inputStyles} ${errors.phone ? errorInputStyles : ''}`} />
                                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`${inputStyles} ${errors.email ? errorInputStyles : ''}`} />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>
                                
                                <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-slate-300">Resume/CV</label>
                                    <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${errors.resume ? 'border-red-500' : 'border-slate-600'}`}>
                                        <div className="space-y-1 text-center">
                                        <CloudUploadIcon className="mx-auto h-12 w-12 text-slate-400" />
                                        <div className="flex text-sm text-slate-400">
                                            <label htmlFor="resume-upload" className="relative cursor-pointer bg-slate-800 rounded-md font-medium text-primary hover:text-primary-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-slate-900 focus-within:ring-primary px-1">
                                            <span>Upload a file</span>
                                            <input id="resume-upload" name="resume" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                            <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                                            {formData.resume?.[0] && (
                                                <p className="text-sm text-green-400 pt-2 font-semibold">{formData.resume[0].name}</p>
                                            )}
                                        </div>
                                    </div>
                                    {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
                                </div>

                                <div>
                                    <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-300">Cover Letter</label>
                                    <textarea name="coverLetter" id="coverLetter" rows={6} value={formData.coverLetter} onChange={handleChange} placeholder="Tell us why you're a great fit for this role and for dktelecom..." className={`${inputStyles} ${errors.coverLetter ? errorInputStyles : ''}`}></textarea>
                                    {errors.coverLetter && <p className="mt-1 text-sm text-red-500">{errors.coverLetter}</p>}
                                </div>
                                
                                <div>
                                    <Button type="submit" className="w-full text-lg py-3">Submit Application</Button>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default CareerApplicationPage;