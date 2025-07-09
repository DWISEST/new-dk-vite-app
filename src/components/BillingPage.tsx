import React, { useState } from 'react';
import { CheckCircleIcon, BILLING_FAQS, WalletIcon } from '../constants';
import Card from './ui/Card';
import Button from './ui/Button';
import BackButton from './ui/BackButton';

const FAQAccordionItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <button
        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-white"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 text-slate-400 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-5 text-slate-400">{faq.answer}</p>
      </div>
    </div>
  );
};

interface BillingPageProps {
  canGoBack: boolean;
  onGoBack: () => void;
}

const BillingPage: React.FC<BillingPageProps> = ({ canGoBack, onGoBack }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', accountId: '', question: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const inputStyles = "mt-1 block w-full rounded-md shadow-sm sm:text-sm bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50";
  const errorInputStyles = "border-red-500";


  const handleToggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
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
    if (!formData.question.trim()) newErrors.question = 'Please describe your question.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = `Billing Question from ${formData.name} (${formData.accountId || 'N/A'})`;
      const body = `
New billing question received.

--- Customer Details ---
Full Name: ${formData.name}
Email Address: ${formData.email}
Account ID / Phone: ${formData.accountId || 'Not provided'}

--- Question ---
${formData.question}
      `.trim().replace(/^\s+/gm, '');

      const mailtoLink = `mailto:billing@dktelecom.gm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <h1 className="text-4xl md:text-5xl font-bold">Billing & Payments</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Manage your account, pay your bill, and find answers to common billing questions.</p>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
           <div>
               <h2 className="text-3xl font-bold text-white mb-8">Billing FAQ</h2>
               <div className="space-y-2">
                {BILLING_FAQS.map((faq, index) => (
                  <FAQAccordionItem
                    key={index}
                    faq={faq}
                    isOpen={openFAQIndex === index}
                    onClick={() => handleToggleFAQ(index)}
                  />
                ))}
              </div>
           </div>
           <div>
                <Card className="flex flex-col items-center text-center p-8 bg-slate-800 shadow-2xl border-2 border-secondary relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Coming Soon
                    </div>
                    <WalletIcon className="h-10 w-10 text-secondary mb-4"/>
                    <h3 className="text-2xl font-bold text-white mb-2">Introducing dkpay</h3>
                    <p className="text-slate-300 mb-6">The future of account management is here. Soon, you'll be able to pay bills, view your invoice history, manage subscriptions, and more—all in one place with our revolutionary new fintech solution.</p>
                    <Button variant="secondary" disabled className="cursor-not-allowed opacity-70">
                        Launching Soon...
                    </Button>
                </Card>
           </div>
        </div>
      </section>
      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          {isSubmitted ? (
             <Card className="text-center bg-slate-800">
                <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">Message Sent</h2>
                <p className="text-lg text-slate-300 mb-6">
                    Thank you, {formData.name.split(' ')[0]}. Our billing department has received your question and will respond to <strong className="text-primary">{formData.email}</strong> within one business day.
                </p>
            </Card>
          ) : (
            <Card className="bg-slate-800">
              <h2 className="text-3xl font-bold text-white mb-2 text-center">Contact Billing Department</h2>
              <p className="text-center text-slate-400 mb-8">Have a question not covered in the FAQ? Send our billing team a message directly.</p>
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
                    <label htmlFor="accountId" className="block text-sm font-medium text-slate-300">Account ID or Phone Number <span className="text-slate-500">(if applicable)</span></label>
                    <input type="text" name="accountId" id="accountId" value={formData.accountId} onChange={handleChange} className={inputStyles} />
                  </div>
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-slate-300">Your Billing Question</label>
                    <textarea name="question" id="question" rows={6} value={formData.question} onChange={handleChange} placeholder="e.g., I have a question about a charge on my recent invoice..." className={`${inputStyles} ${errors.question ? errorInputStyles : ''}`}></textarea>
                    {errors.question && <p className="mt-1 text-sm text-red-500">{errors.question}</p>}
                  </div>
                  <div>
                    <Button type="submit" className="w-full text-lg py-3">Send Billing Question</Button>
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

export default BillingPage;