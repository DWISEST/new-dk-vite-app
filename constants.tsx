



import React from 'react';
import type { Plan, Feature, Testimonial, HowItWorksStep, BusinessService, CompanyValue, TeamMember, ServiceDetail, TroubleshootingStep, BillingFAQ, LocationInfo, Product, ProductCategory, Job, WorkCultureItem } from './types';

/**
 * Generates a base64-encoded SVG data URI to be used as a placeholder.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @param {string} [text] - Optional text to display on the placeholder.
 * @returns {string} A data URI string.
 */
export const generatePlaceholder = (width: number, height: number, text?: string): string => {
  const cleanText = text ? text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background-color:#1e293b;"><rect width="${width}" height="${height}" fill="#334155"/><text x="50%" y="50%" font-family="sans-serif" font-size="1.5rem" fill="#f1f5f9" text-anchor="middle" dominant-baseline="middle">${cleanText}</text></svg>`;
  // btoa is available in the browser environment this app runs in.
  return `data:image/svg+xml;base64,${typeof btoa !== 'undefined' ? btoa(svg) : ''}`;
};


export const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export const WifiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>
);

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  </svg>
);

const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const FlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

export const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m11 17 2 2a1 1 0 1 0 1.4-1.4l-2-2"/><path d="m5.8 11.8 2.2 2.2c.5.5 1.2.5 1.7 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-2.2-2.2c-.5-.5-1.2-.5-1.7 0l-2.5 2.5c-.5.5-.5 1.3 0 1.8Z"/><path d="m18 5-1.4 1.4"/><path d="m21 8-1.4 1.4"/><path d="M12.2 16.8 14 15l-2.2-2.2c-.5-.5-1.2-.5-1.7 0l-2.5 2.5c-.5.5-.5 1.3 0 1.8l2.2 2.2c.5.5 1.2.5 1.7 0Z"/><path d="M22 12v8h-8"/><path d="M7.1 7.1C4.5 9.6 4.5 13.9 7.1 16.4l2.5-2.5"/><path d="M16.4 7.1C18.9 9.6 18.9 13.9 16.4 16.4l-2.5-2.5"/>
    </svg>
);

export const GrowthIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
        <path d="m15 5 4 4"/>
    </svg>
);

export const ServerIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg> );
export const LockIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> );
export const MailCheckIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 20 2 2 4-4"/></svg> );
export const CloudUploadIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg> );
export const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> );
export const DatabaseZapIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 9 3 9 3 0 0 0 9-3V5"/><path d="M3 12A9 3 0 0 0 12 15a9 3 0 0 0 9-3"/><path d="m13 22 5-5-5-5-5 5Z"/></svg> );
export const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S10 4.8 10 7c0 2 .3 3.2 1.5 4.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> );
export const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> );
export const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.84l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z"/><path d="m22 17.65-8.58 3.9a2 2 0 0 1-1.66 0L3.2 17.65"/><path d="m22 12.65-8.58 3.9a2 2 0 0 1-1.66 0L3.2 12.65"/></svg> );
export const SmartphoneIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg> );
export const PaletteIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.926-.746-1.648-1.648-1.648-.926 0-1.648-.746-1.648-1.648 0-.926.746-1.648 1.648-1.648l.272.007c.572.04 1.116.29 1.5.645.384.356.616.872.616 1.442 0 1.054.856 1.91 1.91 1.91.87 0 1.58-.6 1.76-1.39l.13-.59c.21-.92.43-1.8.68-2.61.25-1 .5-2 .5-3 0-2.21-1.79-4-4-4Z"/></svg> );
export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> );
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> );
export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> );
export const HeadsetIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/><path d="M12 1a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3"/></svg> );
export const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> );
export const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg> );
export const WrenchIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> );
export const ServerCrashIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/><path d="M6 6h.01"/><path d="M6 18h.01"/><path d="m13 6-4 6h6l-4 6"/></svg> );
export const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg> );
export const WalletIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg> );
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


export const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.1-.74-.77-2.26-.75-3.1-.04zM13.5 4.5c1.26-1.5 5-2 5-2s-.5 3.74-2 5c-.84.71-2.33.7-3.1-.04-.77-.74-.75-2.26-.04-3.1z"/>
        <path d="m22 2-7 20-4-9-9-4Z"/>
        <path d="M16 8.5 8.5 16"/>
        <path d="m17 17 5 5"/>
    </svg>
);

export const RouterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="18" y2="18"/><line x1="10" x2="10.01" y1="18" y2="18"/><path d="M5 10V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M12 14V4"/><path d="m9 7 3-3 3 3"/></svg>
);

export const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);

export const TowerBroadcastIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="8" y1="4" x2="16" y2="4"/>
    </svg>
);

export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

export const TvIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg> );
export const Gamepad2Icon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11"y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.012.104-.012.156v5.507a4 4 0 0 0 4 4h10.64a4 4 0 0 0 4-4V8.747c0-.052-.006-.104-.012-.156A4 4 0 0 0 17.32 5Z"/></svg> );
export const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> );
export const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 6h6m-6 4h6m-6 4h6m-6 4h6"/></svg> );
export const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"/></svg> );
export const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg> );


export const LOCATIONS: LocationInfo[] = [
    {
        name: 'Headquarters',
        address: '123 Kairaba Avenue, Serekunda',
        phone: '+220 123 4567',
        hours: 'Mon - Fri, 8:00 AM - 6:00 PM',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15507.03960410451!2d-16.68530368022137!3d13.455243201413814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29bb1f0e8f23f%3A0x44f4d5f47020f5c8!2sKairaba%20Ave%2C%20Serekunda%2C%20The%20Gambia!5e0!3m2!1sen!2sus!4v1688591234567!5m2!1sen!2sus'
    },
    {
        name: 'Brikama Branch',
        address: '456 Brikama Highway, Brikama',
        phone: '+220 765 4321',
        hours: 'Mon - Sat, 9:00 AM - 5:00 PM',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31063.15933256086!2d-16.67500364858882!3d13.27210196726856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec28f9a4e69b55f%3A0x45a55d7e5f31e33!2sBrikama%2C%20The%20Gambia!5e0!3m2!1sen!2sus!4v1688591345678!5m2!1sen!2sus'
    }
];

export const PLANS: Plan[] = [
  {
    name: 'Home',
    price: 2500,
    speed: '5 Mbps Upload/Download',
    speedValue: 5,
    description: 'Great for families, streaming, and everyday internet use.',
    features: ['Up to 5 devices', 'HD Streaming', '24/7 Customer Support'],
    illustrationUrl: '/home.jpg',
    bestFor: [
        { icon: <TvIcon className="h-5 w-5 mr-2" />, text: 'HD Movie Streaming' },
        { icon: <Gamepad2Icon className="h-5 w-5 mr-2" />, text: 'Casual Online Gaming' },
        { icon: <GraduationCapIcon className="h-5 w-5 mr-2" />, text: 'Online Learning' },
    ],
  },
  {
    name: 'Business',
    price: 3500,
    speed: '7 Mbps Upload/Download',
    speedValue: 7,
    description: 'Ideal for small businesses and remote work teams.',
    features: ['Up to 15 devices', '4K Streaming & Video Calls', 'Priority Business Support', 'Static IP Option'],
    isPopular: true,
    illustrationUrl: generatePlaceholder(800, 600, 'Business Plan'),
    bestFor: [
        { icon: <BriefcaseIcon className="h-5 w-5 mr-2" />, text: 'Remote Work' },
        { icon: <VideoIcon className="h-5 w-5 mr-2" />, text: 'HD Video Conferencing' },
        { icon: <CloudUploadIcon className="h-5 w-5 mr-2" />, text: 'Cloud File Sharing' },
    ],
  },
  {
    name: 'Office',
    price: 5000,
    speed: '10 Mbps Upload/Download',
    speedValue: 10,
    description: 'The ultimate solution for demanding office environments.',
    features: ['Unlimited Devices', 'Seamless Cloud Operations', 'Dedicated Account Manager', 'SLA Guarantee'],
    illustrationUrl: generatePlaceholder(800, 600, 'Office Plan'),
    bestFor: [
        { icon: <BuildingIcon className="h-5 w-5 mr-2" />, text: 'Multiple Office Users' },
        { icon: <ServerIcon className="h-5 w-5 mr-2" />, text: 'Running Web Servers' },
        { icon: <DatabaseIcon className="h-5 w-5 mr-2" />, text: 'Heavy Cloud Operations' },
    ],
  },
];

export const FEATURES: Feature[] = [
  {
    icon: <RocketIcon className="h-10 w-10 text-primary"/>,
    title: 'High-Speed Internet',
    description: 'Available anywhere in The Gambia, our network delivers fast and reliable internet for streaming, gaming, and working from home.',
  },
  {
    icon: <ShieldIcon className="h-10 w-10 text-primary"/>,
    title: 'Engineered for Reliability',
    description: 'Our network is designed for 99.9% uptime, ensuring you stay connected through weather and peak usage times.',
  },
  {
    icon: <UsersIcon className="h-10 w-10 text-primary"/>,
    title: 'Priority Support',
    description: 'A dedicated team of experts is ready to help you 24/7. No long wait times, just fast and effective solutions.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Switching to dktelecom's Home plan was the best decision. No more buffering on Zoom calls, and the kids can stream their classes without a single glitch. It's been a lifesaver for our family!",
        author: "Aisha T.",
        location: "Kanifing Estate",
        rating: 5,
        plan: "Home"
    },
    {
        quote: "As a graphic designer, uploading large project files used to take forever. The 'Business' plan's symmetric speed is incredible. It has seriously boosted my productivity and professional image.",
        author: "Samba B.",
        location: "Kololi",
        rating: 5,
        plan: "Business"
    },
    {
        quote: "Our entire office runs on cloud applications, so uptime is non-negotiable. The 'Office' plan has been rock-solid. That level of service is priceless.",
        author: "Mariama J.",
        location: "Banjul Business District",
        rating: 5,
        plan: "Office"
    }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        icon: <CalendarIcon className="h-10 w-10 text-primary" />,
        title: 'Step 1: Order Your Plan',
        description: 'Select the perfect speed for your needs from our flexible plans. Not sure? Use our AI Recommender!',
        imageUrl: '/orderplan.jpg',
    },
    {
        icon: <CheckCircleIcon className="h-10 w-10 text-primary" />,
        title: 'Step 2: Professional Installation',
        description: 'Our certified technicians find the optimal placement for your equipment and ensure a robust connection.',
        imageUrl: '/install.jpg',
    },
    {
        icon: <WifiIcon className="h-10 w-10 text-primary" />,
        title: 'Step 3: Connect to a New Reality',
        description: 'That\'s it. Connect your devices and experience high-speed internet designed for The Gambia.',
        imageUrl: '/connect.jpg',
    },
];

export const BUSINESS_SERVICES: BusinessService[] = [
  {
    icon: <MailIcon className="h-8 w-8 text-white" />,
    title: 'Business Email Hosting',
    description: 'Reliable, secure, and spam-free email hosting for your business domain.',
    slug: 'email-hosting',
    imageUrl: '/email.jpeg',
  },
  {
    icon: <DatabaseIcon className="h-8 w-8 text-white" />,
    title: 'Cloud & Data Hosting',
    description: 'Scalable and secure cloud infrastructure to host your data and applications.',
    slug: 'cloud-data-hosting',
    imageUrl: '/cloud.jpg'
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-white" />,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with our expert analytics services.',
    slug: 'data-analytics',
    imageUrl: '/dataa.jpg'
  },
  {
    icon: <CodeIcon className="h-8 w-8 text-white" />,
    title: 'Custom Development',
    description: 'Websites, web apps, and mobile apps, tailored to your digital needs.',
    slug: 'custom-development',
    imageUrl: '/custom.jpg'
  },
  {
    icon: <TowerBroadcastIcon className="h-8 w-8 text-white" />,
    title: 'Hotspot & WiFi Monetization',
    description: 'Turn your location into a guest WiFi hotspot and create new revenue streams.',
    slug: 'hotspot-solutions',
    imageUrl: '/hotspot.jpg'
  }
];

export const COMPANY_VALUES: CompanyValue[] = [
    {
        icon: <FlagIcon className="h-8 w-8 text-primary" />,
        title: 'For The Gambia',
        description: 'We are a company built by Gambians, for Gambians. Our primary goal is to serve our communities and strengthen our nation\'s digital infrastructure.'
    },
    {
        icon: <HandshakeIcon className="h-8 w-8 text-primary" />,
        title: 'Zero Capital Flight',
        description: 'Every Dalasi you spend with us is reinvested back into the local economy, creating jobs and fostering sustainable growth for a stronger Gambia.'
    },
    {
        icon: <GrowthIcon className="h-8 w-8 text-primary" />,
        title: 'Empowering Progress',
        description: 'By providing world-class internet, we empower students, entrepreneurs, and businesses to thrive in the global digital landscape.'
    },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Fatou Jallow',
        role: 'Founder & CEO',
        imageUrl: generatePlaceholder(400, 400, 'Fatou Jallow')
    },
    {
        name: 'Musa Ceesay',
        role: 'Head of Engineering',
        imageUrl: generatePlaceholder(400, 400, 'Musa Ceesay')
    },
    {
        name: 'Awa Sanyang',
        role: 'Director of Customer Experience',
        imageUrl: generatePlaceholder(400, 400, 'Awa Sanyang')
    },
    {
        name: 'Lamin Bojang',
        role: 'Lead Field Technician',
        imageUrl: generatePlaceholder(400, 400, 'Lamin Bojang')
    },
];


export const BUSINESS_SERVICE_DETAILS: ServiceDetail[] = [
    {
        slug: 'email-hosting',
        hero: {
            title: 'Professional Business Email',
            subtitle: 'Secure, reliable, and custom-branded email solutions that build trust and enhance your professional image.',
            imageUrl: generatePlaceholder(1920, 1080, 'Business Email')
        },
        about: {
            title: 'Communicate with Confidence',
            description: "Move beyond generic email addresses. Our Business Email Hosting provides you with a professional, ad-free email experience using your own domain name (e.g., you@yourcompany.com). Backed by robust security and our 99.9% uptime guarantee, you can focus on what matters most—running your business."
        },
        features: [
            { icon: <ServerIcon className="h-8 w-8 text-primary" />, title: 'Custom Domain', description: 'Enhance brand identity with personalized email addresses.' },
            { icon: <LockIcon className="h-8 w-8 text-primary" />, title: 'Advanced Security', description: 'Protect your communications with top-tier encryption and security protocols.' },
            { icon: <MailCheckIcon className="h-8 w-8 text-primary" />, title: 'Spam & Virus Filtering', description: 'Keep your inbox clean and safe with our intelligent filtering systems.' }
        ],
        cta: {
            title: 'Ready for a Professional Email?',
            description: 'Let\'s set up a secure and reliable email system for your entire team.',
            buttonText: 'Get a Quote'
        }
    },
    {
        slug: 'cloud-data-hosting',
        hero: {
            title: 'Cloud & Data Hosting',
            subtitle: 'Scalable, secure, and high-performance cloud infrastructure to power your applications and business data.',
            imageUrl: generatePlaceholder(1920, 1080, 'Cloud & Data Hosting')
        },
        about: {
            title: 'Your Infrastructure, Our Expertise',
            description: 'Whether you\'re hosting a simple website or a complex enterprise application, our cloud solutions provide the flexibility and power you need. We manage the hardware, network, and security, so you can deploy faster and scale on demand without the overhead of physical servers.'
        },
        features: [
            { icon: <CloudUploadIcon className="h-8 w-8 text-primary" />, title: 'On-Demand Scalability', description: 'Easily adjust your resources as your business grows or traffic fluctuates.' },
            { icon: <ActivityIcon className="h-8 w-8 text-primary" />, title: 'High-Speed Performance', description: 'Hosted on our premium network for the lowest latency and fastest response times.' },
            { icon: <DatabaseZapIcon className="h-8 w-8 text-primary" />, title: 'High Availability', description: 'Built-in redundancy ensures your applications and data are always online.' }
        ],
        cta: {
            title: 'Migrate to a Better Cloud',
            description: 'Discuss your hosting needs with our cloud specialists today.',
            buttonText: 'Consult an Expert'
        }
    },
    {
        slug: 'data-analytics',
        hero: {
            title: 'Data Analytics Services',
            subtitle: 'Unlock the hidden potential in your data to make smarter, faster, and more profitable business decisions.',
            imageUrl: generatePlaceholder(1920, 1080, 'Data Analytics')
        },
        about: {
            title: 'From Data to Decisions',
            description: 'Your business generates vast amounts of data every day. But are you using it effectively? Our data analytics team helps you collect, process, and visualize your data, transforming raw numbers into clear, actionable insights that can drive efficiency, identify new opportunities, and give you a competitive edge.'
        },
        features: [
            { icon: <LightbulbIcon className="h-8 w-8 text-primary" />, title: 'Actionable Insights', description: 'We go beyond reports to provide clear recommendations for business growth.' },
            { icon: <ChartBarIcon className="h-8 w-8 text-primary" />, title: 'Custom Dashboards', description: 'Visualize your key performance indicators in real-time with intuitive dashboards.' },
            { icon: <TargetIcon className="h-8 w-8 text-primary" />, title: 'Predictive Analytics', description: 'Forecast future trends and customer behavior to stay ahead of the curve.' }
        ],
        cta: {
            title: 'Unlock Your Data\'s Power',
            description: 'Learn how our analytics solutions can transform your business operations.',
            buttonText: 'Schedule a Demo'
        }
    },
    {
        slug: 'custom-development',
        hero: {
            title: 'Custom Development',
            subtitle: 'Bespoke websites, web applications, and mobile apps built by our expert local development team.',
            imageUrl: generatePlaceholder(1920, 1080, 'Custom Development')
        },
        about: {
            title: 'Your Vision, Built to Perfection',
            description: 'Have a unique idea or a complex problem that off-the-shelf software can\'t solve? Our custom development team specializes in building tailored digital solutions from the ground up. We work closely with you through every stage, from concept and design to development and launch, ensuring the final product meets your exact specifications.'
        },
        features: [
            { icon: <LayersIcon className="h-8 w-8 text-primary" />, title: 'Full-Stack Web Dev', description: 'From elegant marketing websites to complex, data-driven web platforms.' },
            { icon: <SmartphoneIcon className="h-8 w-8 text-primary" />, title: 'Mobile App Development', description: 'Engaging and intuitive iOS and Android apps for your customers.' },
            { icon: <PaletteIcon className="h-8 w-8 text-primary" />, title: 'UI/UX Design', description: 'Crafting beautiful, user-friendly interfaces that delight your users.' }
        ],
        cta: {
            title: 'Have a Project in Mind?',
            description: 'Let\'s talk about how our development team can bring your vision to life.',
            buttonText: 'Discuss Your Project'
        }
    },
    {
        slug: 'hotspot-solutions',
        hero: {
            title: 'Hotspot & WiFi Monetization',
            subtitle: 'Turn your location into a powerful WiFi hotspot. Attract customers, gather insights, and create new revenue streams.',
            imageUrl: generatePlaceholder(1920, 1080, 'Hotspot Solutions')
        },
        about: {
            title: 'More Than Just WiFi. It\'s a Business Tool.',
            description: 'Our Hotspot as a Service (HaaS) is a comprehensive solution for businesses like hotels, cafes, apartments, and public spaces wanting to offer managed guest WiFi. We also partner with entrepreneurial agents who wish to invest in and operate their own hotspot businesses on a revenue-sharing basis, creating a powerful new income opportunity within their communities.'
        },
        features: [
            { icon: <WifiIcon className="h-8 w-8 text-primary" />, title: 'Managed Hotspot Service', description: 'For businesses wanting to provide seamless guest WiFi. We handle setup, management, and 24/7 support.' },
            { icon: <HandshakeIcon className="h-8 w-8 text-primary" />, title: 'Agent Investment Program', description: 'Partner with us to own and operate hotspots in your community. Earn revenue on a flexible percentage-based model.' },
            { icon: <PaletteIcon className="h-8 w-8 text-primary" />, title: 'Branded Captive Portal', description: 'Welcome users with a custom login page featuring your brand, promotions, and social media links.' },
            { icon: <WalletIcon className="h-8 w-8 text-primary" />, title: 'Flexible Monetization', description: 'Offer free access, sell prepaid vouchers, or display ads. You control how you generate revenue from your network.' }
        ],
        cta: {
            title: 'Ready to Launch Your Hotspot Network?',
            description: 'Contact our specialists to discuss our managed service or the agent investment program.',
            buttonText: 'Become a Hotspot Partner'
        }
    }
];

export const TROUBLESHOOTING_STEPS: TroubleshootingStep[] = [
    {
        icon: <WifiIcon className="h-8 w-8 text-primary" />,
        title: '1. Restart Your Equipment',
        description: "This solves most issues. First, unplug your indoor Wi-Fi router. Next, unplug the power supply for your outdoor Cambium antenna (it's a small box, usually black or white). Wait for 60 seconds. Plug the Cambium power supply back in first, and wait 2-3 minutes for its lights to stabilize. Finally, plug your Wi-fi router back in."
    },
    {
        icon: <WrenchIcon className="h-8 w-8 text-primary" />,
        title: '2. Check Your Cables',
        description: "Ensure all cables are securely connected. Check the Ethernet cable running from the Cambium power supply to your Wi-Fi router's 'WAN' or 'Internet' port. A loose connection is a common cause of problems."
    }
];

export const BILLING_FAQS: BillingFAQ[] = [
    {
        question: "How can I pay my bill?",
        answer: "You can easily pay your bill through our secure online customer portal. We also accept payments via direct bank transfer and in-person at our main office. Please have your account number ready."
    },
    {
        question: "When is my bill due?",
        answer: "Your bill is generated on the 1st of each month and is due by the 15th. You will receive an email notification and an SMS reminder before the due date. You can view your exact due date anytime in the customer portal."
    },
    {
        question: "What happens if I miss a payment?",
        answer: "A late fee may be applied to your account if payment is not received by the due date. To avoid service interruption, please make your payment as soon as possible or contact our billing department to discuss a payment arrangement."
    },
    {
        question: "How can I view my past invoices?",
        answer: "All your past invoices are available for viewing and download in PDF format within the 'Billing History' section of our online customer portal."
    }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
        id: 'routers',
        title: 'Routers',
        description: 'The heart of your network. Choose from our range of reliable routers for seamless connectivity at home or in the office.',
        icon: <RouterIcon className="h-8 w-8 text-primary" />
    },
    {
        id: 'access-points',
        title: 'Access Points',
        description: 'Expand your Wi-Fi coverage and build powerful hotspot networks with our professional-grade access points.',
        icon: <WifiIcon className="h-8 w-8 text-primary" />
    },
    {
        id: 'cctv',
        title: 'CCTV',
        description: 'Secure your property with our high-definition CCTV camera systems, accessible from anywhere.',
        icon: <CameraIcon className="h-8 w-8 text-primary" />
    },
];

export const PRODUCTS: Product[] = [
    {
        id: 'tplink-archer-ax55',
        category: 'Routers',
        name: 'TP-Link Archer AX55',
        brand: 'TP-Link',
        description: 'A powerful Wi-Fi 6 router perfect for demanding homes with multiple devices, streaming, and gaming.',
        imageUrl: generatePlaceholder(600, 400, 'TP-Link Archer AX55'),
        features: ['Next-Gen Wi-Fi 6 Speed', 'Connect More Devices with OFDMA', 'Ultra-Low Latency', 'WPA3 Security', 'Easy Setup and Management']
    },
    {
        id: 'cambium-r195w',
        category: 'Routers',
        name: 'Cambium cnPilot R195W',
        brand: 'Cambium',
        description: 'An affordable and reliable router ideal for home and small business use, managed remotely via cnMaestro.',
        imageUrl: generatePlaceholder(600, 400, 'Cambium cnPilot R195W'),
        features: ['Dual-band 802.11ac Wi-Fi', '4 Gigabit LAN Ports', 'Cloud-Managed', 'Robust and Compact Design', 'Perfect for our network']
    },
    {
        id: 'mikrotik-hap-ac3',
        category: 'Routers',
        name: 'MikroTik hAP ac³',
        brand: 'MikroTik',
        description: 'For power users and network professionals who need advanced configuration and routing capabilities.',
        imageUrl: generatePlaceholder(600, 400, 'MikroTik hAP ac³'),
        features: ['Highly Configurable RouterOS', 'Powerful Dual-Core CPU', 'High-gain Wireless Antennas', 'IPsec Hardware Acceleration', 'PoE-in and PoE-out']
    },
    {
        id: 'cambium-e410-ap',
        category: 'Access Points',
        name: 'Cambium E410 Indoor AP',
        brand: 'Cambium',
        description: 'High-performance 802.11ac Wave 2 access point for deploying high-density Wi-Fi networks in businesses, schools, and hotels.',
        imageUrl: generatePlaceholder(600, 400, 'Cambium E410 AP'),
        features: ['MU-MIMO Technology', 'Up to 256 concurrent clients', 'Cloud-managed with cnMaestro', 'Easy installation', 'Ideal for Hotspot Monetization']
    },
    {
        id: 'cctv-package-4',
        category: 'CCTV',
        name: '4-Camera HD CCTV Package',
        brand: 'Professional',
        description: 'A complete security solution for your home or small business, featuring four high-definition cameras and a DVR.',
        imageUrl: generatePlaceholder(600, 400, '4-Camera CCTV Package'),
        features: ['Full HD 1080p Resolution', 'Indoor/Outdoor Weatherproof Cameras', 'Night Vision Capability', 'Remote Viewing via Mobile App', 'Professional Installation Available']
    }
];

export const JOBS: Job[] = [
    {
        id: 'network-engineer-1',
        title: 'Network Engineer',
        department: 'Engineering',
        location: 'Serekunda',
        type: 'Full-time',
        description: 'As a Network Engineer, you will be responsible for maintaining and upgrading our core network infrastructure. You will work with cutting-edge technologies to ensure our customers receive the fastest and most reliable internet service in The Gambia.',
        responsibilities: [
            'Design, implement, and manage network infrastructure.',
            'Monitor network performance and troubleshoot issues.',
            'Upgrade network hardware and software components.',
            'Collaborate with the field technicians team to resolve complex issues.'
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science, IT, or a related field.',
            'Proven experience as a Network Engineer or similar role.',
            'Strong knowledge of routing, switching, and network protocols (BGP, OSPF).',
            'Experience with MikroTik and Cambium equipment is a plus.',
            'Excellent problem-solving and communication skills.'
        ]
    },
    {
        id: 'customer-support-1',
        title: 'Customer Support Representative',
        department: 'Customer Experience',
        location: 'Remote',
        type: 'Full-time',
        description: 'You will be the first point of contact for our valued customers. This role requires excellent communication skills, empathy, and a passion for solving problems to ensure our customers have the best possible experience.',
        responsibilities: [
            'Respond to customer inquiries via phone, email, and chat.',
            'Troubleshoot basic connectivity and account issues.',
            'Provide information about our products and services.',
            'Escalate complex issues to the appropriate department.',
            'Maintain a high level of customer satisfaction.'
        ],
        qualifications: [
            'Exceptional written and verbal communication skills in English.',
            'Experience in a customer service or support role.',
            'Ability to work in a fast-paced environment.',
            'Strong technical aptitude and a willingness to learn.',
            'Patience and a positive, customer-first attitude.'
        ]
    },
    {
        id: 'field-technician-1',
        title: 'Field Technician',
        department: 'Operations',
        location: 'Brikama',
        type: 'Full-time',
        description: 'Join our team on the ground, installing and maintaining our services for homes and businesses. This is a hands-on role for a skilled individual who enjoys working outdoors and interacting directly with customers.',
        responsibilities: [
            'Install, maintain, and repair customer premise equipment (CPE).',
            'Perform site surveys to determine the best installation path.',
            'Troubleshoot and resolve service issues in the field.',
            'Educate customers on how to use their new internet service.',
            'Adhere to all safety standards and company policies.'
        ],
        qualifications: [
            'Experience with networking, electrical wiring, or a related trade.',
            'Comfortable working at heights.',
            'Valid driver\'s license and a clean driving record.',
            'Strong problem-solving skills and attention to detail.',
            'Excellent customer service and interpersonal skills.'
        ]
    }
];


export const WORK_CULTURE_ITEMS: WorkCultureItem[] = [
    {
        icon: <GrowthIcon className="h-8 w-8 text-primary" />,
        title: 'Grow With Us',
        description: 'We invest in our team\'s professional development with training programs and opportunities for advancement. Your success is our success.'
    },
    {
        icon: <UsersIcon className="h-8 w-8 text-primary" />,
        title: 'Collaborative Team',
        description: 'Be part of a supportive and innovative team that works together to solve challenges and push the boundaries of technology in The Gambia.'
    },
    {
        icon: <BookOpenIcon className="h-8 w-8 text-primary" />,
        title: 'Learning & Development',
        description: 'Gain hands-on experience with the latest technologies in the telecommunications industry. We encourage curiosity and continuous learning.'
    },
     {
        icon: <FlagIcon className="h-8 w-8 text-primary" />,
        title: 'Make an Impact',
        description: 'Your work directly contributes to The Gambia\'s digital transformation, empowering communities and creating new opportunities for all.'
    }
];