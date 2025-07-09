import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import { CheckCircleIcon } from '../constants';
import { BUSINESS_SERVICE_DETAILS } from '../constants';
import BackButton from './ui/BackButton';

interface QuoteProps {
    topic: string;
    onNavigate: (path: string) => void;
    canGoBack: boolean;
    onGoBack: () => void;
}

// Define specific field types
interface DynamicFormData {
    // Standard fields
    name: string;
    company: string;
    email: string;
    phone: string;
    
    // Dynamic fields
    bandwidth?: string;
    userCount?: string;
    mailboxCount?: string;
    domainName?: string;
    storageNeeds?: string;
    trafficEstimate?: string;
    dataSources?: string;
    primaryGoal?: string;
    projectType?: string;
    projectTypeOther?: string;
    estimatedBudget?: string;

    // General message
    message: string;
}

const Quote: React.FC<QuoteProps> = ({ topic, onNavigate, canGoBack, onGoBack }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState<DynamicFormData>({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (!topic) {
            onNavigate('home');
        } else {
             setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: `I'm interested in a quote for ${topic}.`
            });
        }
    }, [topic, onNavigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        
        const serviceSlug = BUSINESS_SERVICE_DETAILS.find(s => s.hero.title === topic)?.slug;

        if (topic === 'Dedicated Bandwidth') {
             if (!formData.bandwidth) newErrors.bandwidth = 'Please select a bandwidth requirement.';
        } else if (serviceSlug === 'custom-development') {
             if (!formData.projectType) newErrors.projectType = 'Project type is required.';
             if (formData.projectType === 'Other' && !formData.projectTypeOther?.trim()) {
                 newErrors.projectTypeOther = 'Please specify the project type.';
             }
             if (!formData.estimatedBudget) newErrors.estimatedBudget = 'Estimated budget is required.';
        } else if (serviceSlug === 'email-hosting') {
             if (!formData.mailboxCount) newErrors.mailboxCount = 'Number of mailboxes is required.';
        }
        
        if (!formData.message.trim()) newErrors.message = 'Please provide some details about your needs.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const subject = `Quote Request: ${topic}`;
            let body = `
A customer has requested a quote for: ${topic}

--- Customer Details ---
Full Name: ${formData.name}
Company Name: ${formData.company || 'N/A'}
Email Address: ${formData.email}
Phone Number: ${formData.phone}

--- Request Details ---
`;

            if (formData.bandwidth) body += `Required Bandwidth: ${formData.bandwidth}\n`;
            if (formData.userCount) body += `Number of Users: ${formData.userCount}\n`;
            if (formData.mailboxCount) body += `Number of Mailboxes: ${formData.mailboxCount}\n`;
            if (formData.domainName) body += `Domain Name: ${formData.domainName}\n`;
            if (formData.projectType) {
                body += `Project Type: ${formData.projectType}`;
                if (formData.projectType === 'Other' && formData.projectTypeOther) {
                    body += ` (${formData.projectTypeOther})`;
                }
                body += `\n`;
            }
            if (formData.estimatedBudget) body += `Estimated Budget: ${formData.estimatedBudget}\n`;

            body += `\n--- Message ---\n${formData.message}`;

            const cleanedBody = body.trim().replace(/^\s+/gm, '');

            const mailtoLink = `mailto:sales@dktelecom.gm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(cleanedBody)}`;
            window.location.href = mailtoLink;
            
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };
    
    const inputStyles = "mt-1 block w-full rounded-md shadow-sm sm:text-sm bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50";
    const errorInputStyles = "border-red-500";


    const renderDynamicFields = () => {
        const serviceSlug = BUSINESS_SERVICE_DETAILS.find(s => s.hero.title === topic)?.slug;

        let fields = null;

        if (topic === 'Dedicated Bandwidth') {
            fields = (
                 <>
                    <div>
                        <label htmlFor="bandwidth" className="block text-sm font-medium text-slate-300">Required Bandwidth</label>
                        <select id="bandwidth" name="bandwidth" value={formData.bandwidth || ''} onChange={handleChange} className={`${inputStyles} ${errors.bandwidth ? errorInputStyles : ''}`}>
                            <option value="">Select required speed...</option>
                            <option value="1-5 Mbps">1-5 Mbps</option>
                            <option value="5-10 Mbps">5-10 Mbps</option>
                            <option value="10-25 Mbps">10-25 Mbps</option>
                            <option value="25-50 Mbps">25-50 Mbps</option>
                            <option value="50+ Mbps">50+ Mbps</option>
                            <option value="Unsure">I'm not sure</option>
                        </select>
                        {errors.bandwidth && <p className="mt-1 text-sm text-red-500">{errors.bandwidth}</p>}
                    </div>
                     <div>
                        <label htmlFor="userCount" className="block text-sm font-medium text-slate-300">Number of Concurrent Users</label>
                        <input type="text" name="userCount" id="userCount" value={formData.userCount || ''} onChange={handleChange} placeholder="e.g., 25" className={inputStyles} />
                    </div>
                </>
            );
        } else if (serviceSlug === 'custom-development') {
             fields = (
                <>
                    <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-slate-300">Type of Project</label>
                        <select id="projectType" name="projectType" value={formData.projectType || ''} onChange={handleChange} className={`${inputStyles} ${errors.projectType ? errorInputStyles : ''}`}>
                            <option value="">Select a project type...</option>
                            <option value="New Website">New Website</option>
                            <option value="Web Application">Web Application</option>
                            <option value="Mobile App (iOS/Android)">Mobile App (iOS/Android)</option>
                            <option value="E-commerce Store">E-commerce Store</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>}
                        {formData.projectType === 'Other' && (
                            <div className="mt-4">
                                <label htmlFor="projectTypeOther" className="block text-sm font-medium text-slate-300">Please Specify</label>
                                <input 
                                    type="text" 
                                    name="projectTypeOther" 
                                    id="projectTypeOther" 
                                    value={formData.projectTypeOther || ''} 
                                    onChange={handleChange} 
                                    className={`${inputStyles} ${errors.projectTypeOther ? errorInputStyles : ''}`} 
                                />
                                {errors.projectTypeOther && <p className="mt-1 text-sm text-red-500">{errors.projectTypeOther}</p>}
                            </div>
                        )}
                    </div>
                     <div>
                        <label htmlFor="estimatedBudget" className="block text-sm font-medium text-slate-300">Estimated Budget (in GMD)</label>
                        <select id="estimatedBudget" name="estimatedBudget" value={formData.estimatedBudget || ''} onChange={handleChange} className={`${inputStyles} ${errors.estimatedBudget ? errorInputStyles : ''}`}>
                            <option value="">Select a budget range...</option>
                            <option value="< 50,000">Less than D50,000</option>
                            <option value="50,000 - 250,000">D50,000 - D250,000</option>
                            <option value="250,000 - 1,000,000">D250,000 - D1,000,000</option>
                            <option value="> 1,000,000">More than D1,000,000</option>
                        </select>
                         {errors.estimatedBudget && <p className="mt-1 text-sm text-red-500">{errors.estimatedBudget}</p>}
                    </div>
                </>
            );
        } else if (serviceSlug === 'email-hosting') {
            fields = (
                <>
                   <div>
                       <label htmlFor="mailboxCount" className="block text-sm font-medium text-slate-300">Approximate Number of Mailboxes</label>
                       <input type="number" name="mailboxCount" id="mailboxCount" min="1" value={formData.mailboxCount || ''} onChange={handleChange} placeholder="e.g., 15" className={`${inputStyles} ${errors.mailboxCount ? errorInputStyles : ''}`} />
                       {errors.mailboxCount && <p className="mt-1 text-sm text-red-500">{errors.mailboxCount}</p>}
                   </div>
                   <div>
                      <label htmlFor="domainName" className="block text-sm font-medium text-slate-300">Your Domain Name <span className="text-slate-500">(if you have one)</span></label>
                       <input type="text" name="domainName" id="domainName" value={formData.domainName || ''} onChange={handleChange} placeholder="e.g., yourcompany.com" className={inputStyles} />
                   </div>
                </>
            );
        }

        if (fields) {
             return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 my-6 bg-slate-900/70 rounded-lg border border-slate-700">
                    {fields}
                </div>
            )
        }
        return null;
    }
    
    if (isSubmitted) {
        return (
            <section className="py-20 md:py-32 bg-slate-900 animate-fade-in-up">
                <div className="container mx-auto px-6">
                    <Card className="max-w-2xl mx-auto text-center bg-slate-800">
                        <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-white mb-2">Quote Request Sent!</h1>
                        <p className="text-lg text-slate-300 mb-6">
                            Thank you, {formData.name.split(' ')[0]}. We've received your request regarding <strong className="text-primary">{topic}</strong>. Our business solutions team will review your information and contact you shortly.
                        </p>
                        <Button onClick={() => onNavigate('home')}>Back to Homepage</Button>
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Request a Custom Quote</h1>
                        <p className="mt-2 text-lg text-slate-400">
                            Tell us about your business needs, and we'll prepare a tailored quote for you.
                        </p>
                    </div>
                    
                    <Card className="bg-slate-800">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="topic" className="block text-sm font-medium text-slate-300">Service of Interest</label>
                                    <input type="text" name="topic" id="topic" value={topic} readOnly className="mt-1 block w-full rounded-md border-slate-600 shadow-sm bg-slate-700 text-slate-400 sm:text-sm cursor-default" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`${inputStyles} ${errors.name ? errorInputStyles : ''}`} />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-300">Company Name <span className="text-slate-500">(Optional)</span></label>
                                        <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={inputStyles} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`${inputStyles} ${errors.email ? errorInputStyles : ''}`} />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`${inputStyles} ${errors.phone ? errorInputStyles : ''}`} />
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                </div>

                                {renderDynamicFields()}
                                    
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Additional Details or Questions</label>
                                    <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className={`${inputStyles} ${errors.message ? errorInputStyles : ''}`}></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>
                                
                                <div>
                                    <Button type="submit" className="w-full text-lg py-3">Submit Quote Request</Button>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Quote;
