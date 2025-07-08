import React, { useState } from 'react';
import { CheckCircleIcon, ServerCrashIcon, TROUBLESHOOTING_STEPS } from '../constants';
import Card from './ui/Card';
import Button from './ui/Button';
import BackButton from './ui/BackButton';

interface SupportPageProps {
  canGoBack: boolean;
  onGoBack: () => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ canGoBack, onGoBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', accountId: '', issue: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const inputStyles = "mt-1 block w-full rounded-md shadow-sm sm:text-sm bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50";
  const errorInputStyles = "border-red-500";


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
    if (!formData.issue.trim()) newErrors.issue = 'Please describe your issue.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = `Support Ticket from ${formData.name} (${formData.accountId || 'N/A'})`;
      const body = `
New support ticket received.

--- Customer Details ---
Full Name: ${formData.name}
Email Address: ${formData.email}
Account ID / Phone: ${formData.accountId || 'Not provided'}

--- Issue Description ---
${formData.issue}
      `.trim().replace(/^\s+/gm, '');

      const mailtoLink = `mailto:support@dktelecom.gm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <main className="animate-fade-in-up">
      <section className="bg-primary-900/50 text-white py-20 text-center relative">
        {canGoBack && (
            <div className="absolute top-8 left-8">
                <BackButton onClick={onGoBack} className="text-white bg-black/20 backdrop-blur-sm p-2 rounded-md" />
            </div>
        )}
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Technical Support</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">We're here to help you get back online. Start with our troubleshooting steps below.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Quick Troubleshooting Guide</h2>
            <div className="space-y-8">
              {TROUBLESHOOTING_STEPS.map(step => (
                <div key={step.title} className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-full mr-6 mt-1 border border-slate-700">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="text-slate-400 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          {isSubmitted ? (
             <Card className="text-center bg-slate-800">
                <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">Support Ticket Submitted</h2>
                <p className="text-lg text-slate-300 mb-6">
                    Thank you, {formData.name.split(' ')[0]}. Your ticket has been created. Our technical team will investigate and contact you at <strong className="text-primary">{formData.email}</strong> as soon as possible.
                </p>
            </Card>
          ) : (
            <Card className="bg-slate-800">
              <h2 className="text-3xl font-bold text-white mb-2 text-center">Still Need Help?</h2>
              <p className="text-center text-slate-400 mb-8">Submit a support ticket and our team will get on it right away.</p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`${inputStyles} ${errors.name ? errorInputStyles : ''}`} />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`${inputStyles} ${errors.email ? errorInputStyles : ''}`} />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="accountId" className="block text-sm font-medium text-slate-300">Account ID or Phone Number <span className="text-slate-500">(Optional)</span></label>
                    <input type="text" name="accountId" id="accountId" value={formData.accountId} onChange={handleChange} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-slate-300">Please describe your issue in detail</label>
                    <textarea name="issue" id="issue" rows={6} value={formData.issue} onChange={handleChange} placeholder="e.g., My internet has been dropping every hour since this morning. I've already tried restarting the router." className={`${inputStyles} ${errors.issue ? errorInputStyles : ''}`}></textarea>
                    {errors.issue && <p className="mt-1 text-sm text-red-500">{errors.issue}</p>}
                  </div>
                  <div>
                    <Button type="submit" className="w-full text-lg py-3">Submit Support Ticket</Button>
                  </div>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
