import React, { useState, useEffect } from 'react';
import type { Plan } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import { CheckCircleIcon } from '../constants';
import BackButton from './ui/BackButton';

interface SignUpProps {
    plan: Plan | null;
    onNavigate: (path: string) => void;
    canGoBack: boolean;
    onGoBack: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ plan, onNavigate, canGoBack, onGoBack }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (!plan) {
            onNavigate('plans');
        }
    }, [plan, onNavigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        let finalValue = value;
        if (name === 'phone') {
            const digits = value.replace(/\D/g, '');
            const numberPart = digits.startsWith('220') ? digits.substring(3) : digits;
            const trimmedNumber = numberPart.slice(0, 7);

            if (trimmedNumber.length > 0) {
                let formatted = '+220';
                if (trimmedNumber.length > 0) {
                    formatted += ' ' + trimmedNumber.substring(0, 3);
                }
                if (trimmedNumber.length > 3) {
                    formatted += ' ' + trimmedNumber.substring(3);
                }
                finalValue = formatted;
            } else {
                finalValue = '';
            }
        }
        
        setFormData({ ...formData, [name]: finalValue });
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else {
            const phoneDigits = formData.phone.replace(/\D/g, '');
            if (phoneDigits.length !== 10) {
                newErrors.phone = 'Please enter a valid 7-digit Gambian phone number.';
            }
        }
        
        if (!formData.address.trim()) newErrors.address = 'Installation address is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const subject = `New Sign-Up Request: ${plan?.name} Plan`;
            const body = `
A new customer has signed up for a plan. Please see their details below.

--- Customer Details ---
Plan: ${plan?.name}
Price: D${plan?.price.toLocaleString()}/mo
Speed: ${plan?.speed}

Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Installation Address: ${formData.address}

---
Please contact the customer within 24 hours to schedule the installation.
            `.trim().replace(/^\s+/gm, '');

            const mailtoLink = `mailto:sales@dktelecom.gm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };

    if (!plan) {
        return null; // Render nothing while redirecting
    }
    
    const inputStyles = "mt-1 block w-full rounded-md shadow-sm sm:text-sm bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50";
    const errorInputStyles = "border-red-500";
    
    if (isSubmitted) {
        return (
            <section className="py-20 md:py-32 bg-slate-900 animate-fade-in-up">
                <div className="container mx-auto px-6">
                    <Card className="max-w-2xl mx-auto text-center bg-slate-800">
                        <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-white mb-2">Thank You, {formData.name.split(' ')[0]}!</h1>
                        <p className="text-lg text-slate-300 mb-6">
                            Your sign-up request for the <strong className="text-primary">{plan.name}</strong> plan has been received. Our team will contact you at <strong className="text-primary">{formData.email}</strong> or <strong className="text-primary">{formData.phone}</strong> within 24 hours to schedule your installation.
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
                <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-5 lg:gap-12">
                    <div className="lg:col-span-2 mb-10 lg:mb-0">
                         <h1 className="text-3xl font-bold text-white">Sign Up Now</h1>
                        <p className="mt-2 text-slate-400">You're just a few steps away from super-fast internet. Please fill out your details below.</p>
                        <Card className="mt-8 bg-slate-800">
                            <h2 className="text-xl font-bold text-primary">{plan.name} Plan</h2>
                             <div className="my-4">
                                <span className="text-4xl font-extrabold text-white">D{plan.price.toLocaleString()}</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            <p className="font-semibold text-slate-200">{plan.speed}</p>
                             <ul className="mt-4 space-y-2 text-sm text-slate-400">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div className="lg:col-span-3">
                        <Card className="bg-slate-800">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="space-y-6">
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
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="+220 XXX XXXX" className={`${inputStyles} ${errors.phone ? errorInputStyles : ''}`} />
                                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                    </div>
                                     <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-slate-300">Installation Address</label>
                                        <textarea name="address" id="address" rows={3} value={formData.address} onChange={handleChange} className={`${inputStyles} ${errors.address ? errorInputStyles : ''}`}></textarea>
                                        {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                                    </div>
                                    <div>
                                        <Button type="submit" className="w-full text-lg py-3">Complete Sign-Up</Button>
                                    </div>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
