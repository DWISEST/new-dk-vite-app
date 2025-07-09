import type { ReactNode, ReactElement } from 'react';

export interface Plan {
  name: string;
  price: number;
  speed: string;
  speedValue: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  bestFor: { icon: ReactNode; text: string }[];
  illustrationUrl: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description:string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  plan: string;
}

export interface HowItWorksStep {
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

export interface RecommendedPlan {
    recommendedPlan: string;
    reason: string;
}

export interface BusinessService {
  icon: ReactElement;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export interface CompanyValue {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface ServiceFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
  };
  about: {
    title: string;
    description: string;
  };
  features: ServiceFeature[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface TroubleshootingStep {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface LocationInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
  embedUrl: string;
}

export interface BillingFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  category: 'Routers' | 'Access Points' | 'CCTV';
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface ProductCategory {
  id: 'routers' | 'access-points' | 'cctv';
  title: 'Routers' | 'Access Points' | 'CCTV';
  description: string;
  icon: ReactNode;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: 'Serekunda' | 'Brikama' | 'Remote';
  type: 'Full-time' | 'Contract';
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface WorkCultureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export type AdminView = 'dashboard' | 'products' | 'careers';
