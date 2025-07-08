
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import BusinessServicePage from './components/BusinessServicePage';
import SignUp from './components/SignUp';
import Quote from './components/Quote';
import { Footer } from './components/Footer';
import PlanRecommender from './components/PlanRecommender';
import PlansPage from './components/PlansPage';
import ContactPage from './components/ContactPage';
import SalesPage from './components/SalesPage';
import SupportPage from './components/SupportPage';
import BillingPage from './components/BillingPage';
import BusinessPage from './components/BusinessPage';
import ProductsPage from './components/ProductsPage';
import CareersPage from './components/CareersPage';
import CareerApplicationPage from './components/CareerApplicationPage';
import AdminPage from './components/admin/AdminPage';
import AdminLogin from './components/admin/AdminLogin';
import { BUSINESS_SERVICE_DETAILS, PRODUCTS, JOBS } from './constants';
import type { Plan, Job, Product } from './types';

type Page = string; // e.g., 'home', 'about', 'plans', 'admin'

const App: React.FC = () => {
  const [isRecommenderOpen, setIsRecommenderOpen] = useState(false);
  const [navigationStack, setNavigationStack] = useState<Page[]>(['home']);
  const [hash, setHash] = useState(window.location.hash);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [quoteTopic, setQuoteTopic] = useState<string>('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Centralized state for products and jobs
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [jobs, setJobs] = useState<Job[]>(JOBS);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const currentPage = navigationStack[navigationStack.length - 1];
  const canGoBack = navigationStack.length > 1;

  // CRUD handlers for Products
  const handleAddProduct = (product: Product) => setProducts(prev => [...prev, product]);
  const handleUpdateProduct = (updatedProduct: Product) => setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  const handleDeleteProduct = (productId: string) => setProducts(prev => prev.filter(p => p.id !== productId));
  
  // CRUD handlers for Jobs
  const handleAddJob = (job: Job) => setJobs(prev => [...prev, job]);
  const handleUpdateJob = (updatedJob: Job) => setJobs(prev => prev.map(j => j.id === updatedJob.id ? updatedJob : j));
  const handleDeleteJob = (jobId: string) => setJobs(prev => prev.filter(j => j.id !== jobId));

  const handleGoBack = () => {
    if (canGoBack) {
      setNavigationStack(prevStack => prevStack.slice(0, -1));
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleNavigate = (path: string) => {
    if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      const targetPage = currentPage.startsWith('business/') ? 'business' : currentPage;
      
      const destinationPage = ['features', 'howitworks', 'testimonials', 'business-services'].includes(sectionId) ? 'home' : targetPage;

      if (currentPage !== destinationPage) {
        setNavigationStack(prev => [...prev, destinationPage]);
        setHash(path);
      } else {
        scrollToSection(path);
      }
    } else {
      if (path !== currentPage) {
        setNavigationStack(prev => [...prev, path]);
        window.scrollTo({ top: 0, behavior: 'auto' });
        setHash('');
      }
    }
  };

  const handleSignUpClick = (plan: Plan) => {
    setSelectedPlan(plan);
    handleNavigate('signup');
  };
  
  const handleRequestQuote = (topic: string) => {
    setQuoteTopic(topic);
    handleNavigate('quote');
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    handleNavigate('careers/apply');
  };

  const scrollToSection = (sectionId: string) => {
    if (!sectionId || sectionId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetId = sectionId.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    if ((currentPage === 'home' || currentPage === 'products' || currentPage === 'careers') && hash) {
      const timer = setTimeout(() => {
        scrollToSection(hash);
        setHash('');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, hash]);

  useEffect(() => {
    let title = 'dktelecom ltd - High Speed Internet';
    if (currentPage === 'about') title = 'About Us | dktelecom ltd';
    else if (currentPage === 'careers') title = 'Careers | dktelecom ltd';
    else if (currentPage === 'careers/apply') title = `Apply for ${selectedJob?.title || 'Job'} | dktelecom ltd`;
    else if (currentPage === 'plans') title = 'Our Plans | dktelecom ltd';
    else if (currentPage === 'products') title = 'Our Products | dktelecom ltd';
    else if (currentPage === 'contact') title = 'Contact Us | dktelecom ltd';
    else if (currentPage === 'sales') title = 'Sales Inquiry | dktelecom ltd';
    else if (currentPage === 'support') title = 'Technical Support | dktelecom ltd';
    else if (currentPage === 'billing') title = 'Billing Questions | dktelecom ltd';
    else if (currentPage === 'signup') title = `Sign Up for ${selectedPlan?.name || 'Plan'} | dktelecom ltd`;
    else if (currentPage === 'quote') title = `Request a Quote | dktelecom ltd`;
    else if (currentPage === 'business') title = 'Business Solutions | dktelecom ltd';
    else if (currentPage.startsWith('business/')) {
      const slug = currentPage.split('/')[1];
      const service = BUSINESS_SERVICE_DETAILS.find(s => s.slug === slug);
      if (service) title = `${service.hero.title} | dktelecom ltd`;
    } else if (currentPage === 'admin') title = 'Admin Dashboard | dktelecom ltd';
    document.title = title;
  }, [currentPage, selectedPlan, selectedJob]);
  
  const isPublicPage = currentPage !== 'admin';

  const renderPage = () => {
    if (currentPage === 'admin') {
      return isAuthenticated ? (
        <AdminPage 
            products={products}
            jobs={jobs}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onAddJob={handleAddJob}
            onUpdateJob={handleUpdateJob}
            onDeleteJob={handleDeleteJob}
            onLogout={() => setIsAuthenticated(false)}
        />
      ) : (
        <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
      );
    }
    if (currentPage === 'contact') {
        return <ContactPage onNavigate={handleNavigate} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'sales') {
        return <SalesPage onNavigate={handleNavigate} onSignUpClick={handleSignUpClick} onRequestQuote={handleRequestQuote} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'support') {
        return <SupportPage canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'billing') {
        return <BillingPage canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'plans') {
        return <PlansPage 
            onRecommendClick={() => setIsRecommenderOpen(true)}
            onNavigate={handleNavigate}
            onSignUpClick={handleSignUpClick}
            onRequestQuote={handleRequestQuote}
            canGoBack={canGoBack}
            onGoBack={handleGoBack}
        />;
    }
    if (currentPage === 'products') {
        return <ProductsPage 
            products={products}
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
            canGoBack={canGoBack}
            onGoBack={handleGoBack}
        />;
    }
    if (currentPage === 'signup') {
      return <SignUp plan={selectedPlan} onNavigate={handleNavigate} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'quote') {
      return <Quote topic={quoteTopic} onNavigate={handleNavigate} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'business') {
        return <BusinessPage onNavigate={handleNavigate} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage.startsWith('business/')) {
        const slug = currentPage.split('/')[1];
        const service = BUSINESS_SERVICE_DETAILS.find(s => s.slug === slug);
        if (service) {
            return <BusinessServicePage service={service} onNavigate={handleNavigate} onRequestQuote={handleRequestQuote} canGoBack={canGoBack} onGoBack={handleGoBack} />;
        }
    }
    if (currentPage === 'about') {
        return <About canGoBack={canGoBack} onGoBack={handleGoBack} onNavigate={handleNavigate}/>;
    }
    if (currentPage === 'careers') {
        return <CareersPage jobs={jobs} onNavigate={handleNavigate} onApplyClick={handleApplyClick} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    if (currentPage === 'careers/apply') {
        return <CareerApplicationPage job={selectedJob} onNavigate={handleNavigate} canGoBack={canGoBack} onGoBack={handleGoBack} />;
    }
    // Default to home
    return <Home 
      onNavigate={handleNavigate}
    />;
  };


  return (
    <div className="relative">
      {isPublicPage && <Header onNavigate={handleNavigate} currentPage={currentPage} isAuthenticated={isAuthenticated} />}
      {renderPage()}
      {isPublicPage && <Footer onNavigate={handleNavigate} />}
      <PlanRecommender
        isOpen={isRecommenderOpen}
        onClose={() => setIsRecommenderOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
