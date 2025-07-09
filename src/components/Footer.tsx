
import React from 'react';
import { BUSINESS_SERVICES, LOCATIONS } from '../constants';
import Logo from './Logo';
import BrandText from './ui/BrandText';

interface FooterProps {
    onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const handleDisabledClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Do nothing for placeholder links
  };

  return (
    <footer id="contact" className="bg-black text-slate-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
             <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="block mb-4">
              <Logo className="text-white" height="15" />
            </a>
            <p className="text-secondary italic text-sm">...the difference will amaze you.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider uppercase text-slate-500 text-sm">Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a href="/plans" onClick={(e) => handleLinkClick(e, 'plans')} className="hover:text-white transition-colors cursor-pointer">Plans</a></li>
              <li><a href="/about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider uppercase text-slate-500 text-sm">Business</h4>
            <ul className="space-y-3">
              {BUSINESS_SERVICES.map(service => (
                <li key={service.slug}>
                  <a href={`/business/${service.slug}`} onClick={e => handleLinkClick(e, `business/${service.slug}`)} className="hover:text-white transition-colors cursor-pointer">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider uppercase text-slate-500 text-sm">Support</h4>
            <ul className="space-y-3">
              <li><a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">Contact Hub</a></li>
              <li><a href="/support" onClick={(e) => handleLinkClick(e, 'support')} className="hover:text-white transition-colors cursor-pointer">Technical Support</a></li>
              <li><a href="/billing" onClick={(e) => handleLinkClick(e, 'billing')} className="hover:text-white transition-colors cursor-pointer">Billing Questions</a></li>
              <li><a href="/admin" onClick={(e) => handleLinkClick(e, 'admin')} className="hover:text-white transition-colors cursor-pointer">Admin Login</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold mb-4 tracking-wider uppercase text-slate-500 text-sm">Company</h4>
             <ul className="space-y-3">
              <li><a href="/about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="/careers" onClick={(e) => handleLinkClick(e, 'careers')} className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" onClick={handleDisabledClick} className="hover:text-white cursor-not-allowed opacity-50">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p><BrandText>© {new Date().getFullYear()} dktelecom ltd. All Rights Reserved.</BrandText></p>
        </div>
      </div>
    </footer>
  );
};
