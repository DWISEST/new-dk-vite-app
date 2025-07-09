
import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_SERVICES } from '../constants';
import Logo from './Logo';

interface HeaderProps {
    onNavigate: (path: string) => void;
    currentPage: string;
    isAuthenticated: boolean;
}

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="4" x2="20" y1="12" y2="12"/>
        <line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, isAuthenticated }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }
  
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay to allow mouse to travel to the dropdown
  };

  const isBusinessPage = currentPage.startsWith('business');

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center space-x-2">
              <Logo className="text-white" height="20" />
            </a>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">Features</a>
              <a href="/plans" onClick={(e) => handleLinkClick(e, 'plans')} className={`transition-colors cursor-pointer ${currentPage === 'plans' ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'}`}>Plans</a>
              <a href="/products" onClick={(e) => handleLinkClick(e, 'products')} className={`transition-colors cursor-pointer ${currentPage === 'products' ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'}`}>Products</a>
              <div 
                className="relative" 
                onMouseEnter={handleDropdownEnter} 
                onMouseLeave={handleDropdownLeave}
              >
                <a href="/business" onClick={(e) => handleLinkClick(e, 'business')} className={`transition-colors cursor-pointer flex items-center ${isBusinessPage ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'}`}>
                  Business
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </a>
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-slate-800 rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5 animate-fade-in-up" style={{animationDuration: '0.2s'}}>
                    <a 
                      href="/business" 
                      onClick={e => handleLinkClick(e, 'business')} 
                      className={`block px-4 py-2 text-sm transition-colors ${currentPage === 'business' ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                    >
                      Overview
                    </a>
                    {BUSINESS_SERVICES.map(service => {
                      const path = `business/${service.slug}`;
                      const isActive = currentPage === path;
                      return (
                        <a 
                          key={service.slug} 
                          href={`/business/${service.slug}`} 
                          onClick={e => handleLinkClick(e, path)} 
                          className={`block px-4 py-2 text-sm transition-colors ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                        >
                          {service.title}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              <a href="/about" onClick={(e) => handleLinkClick(e, 'about')} className={`transition-colors cursor-pointer ${currentPage === 'about' ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'}`}>About</a>
              <a href="/careers" onClick={(e) => handleLinkClick(e, 'careers')} className={`transition-colors cursor-pointer ${currentPage === 'careers' ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'}`}>Careers</a>
              <a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')} className={`transition-colors cursor-pointer ${currentPage === 'contact' ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'}`}>Contact</a>
              {isAuthenticated && (
                <a href="/admin" onClick={(e) => handleLinkClick(e, 'admin')} className="text-secondary font-semibold hover:text-orange-400 transition-colors cursor-pointer">Admin</a>
              )}
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-200" aria-label="Open menu">
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] animate-fade-in-up" style={{animationDuration: '0.3s'}}>
            <div className="fixed inset-0 bg-black/60" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900 shadow-xl flex flex-col">
                <div className="flex items-center justify-between p-6 flex-shrink-0 border-b border-slate-700">
                    <Logo className="text-white" height="15" />
                    <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                        <XIcon className="h-6 w-6 text-slate-400"/>
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <nav className="flex flex-col space-y-3 text-lg p-6">
                        <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="text-slate-200 hover:text-primary p-2 rounded-md">Features</a>
                        <a href="/plans" onClick={(e) => handleLinkClick(e, 'plans')} className={`p-2 rounded-md ${currentPage === 'plans' ? 'text-primary bg-primary/10 font-semibold' : 'text-slate-200 hover:text-primary'}`}>Plans</a>
                        <a href="/products" onClick={(e) => handleLinkClick(e, 'products')} className={`p-2 rounded-md ${currentPage === 'products' ? 'text-primary bg-primary/10 font-semibold' : 'text-slate-200 hover:text-primary'}`}>Products</a>
                        
                        <div className="pt-2">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider px-2">Business</h3>
                            <div className="mt-2 flex flex-col space-y-1">
                                <a 
                                    href="/business" 
                                    onClick={e => handleLinkClick(e, 'business')} 
                                    className={`block p-2 rounded-md text-base ${currentPage === 'business' ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-200 hover:bg-slate-800 hover:text-primary'}`}
                                >
                                    Overview
                                </a>
                               {BUSINESS_SERVICES.map(service => {
                                    const path = `business/${service.slug}`;
                                    const isActive = currentPage === path;
                                    return (
                                    <a 
                                        key={service.slug} 
                                        href={`/business/${service.slug}`} 
                                        onClick={e => handleLinkClick(e, path)} 
                                        className={`block p-2 rounded-md text-base ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-200 hover:bg-slate-800 hover:text-primary'}`}
                                    >
                                        {service.title}
                                    </a>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <a href="/about" onClick={(e) => handleLinkClick(e, 'about')} className={`p-2 rounded-md ${currentPage === 'about' ? 'text-primary bg-primary/10 font-semibold' : 'text-slate-200 hover:text-primary'}`}>About</a>
                        <a href="/careers" onClick={(e) => handleLinkClick(e, 'careers')} className={`p-2 rounded-md ${currentPage === 'careers' ? 'text-primary bg-primary/10 font-semibold' : 'text-slate-200 hover:text-primary'}`}>Careers</a>
                        <a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')} className={`p-2 rounded-md ${currentPage === 'contact' ? 'text-primary bg-primary/10 font-semibold' : 'text-slate-200 hover:text-primary'}`}>Contact</a>
                        {isAuthenticated && (
                           <div className="border-t border-slate-700 mt-4 pt-4">
                             <a href="/admin" onClick={(e) => handleLinkClick(e, 'admin')} className="p-2 rounded-md text-secondary bg-secondary/10 font-semibold">Admin Dashboard</a>
                           </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Header;
