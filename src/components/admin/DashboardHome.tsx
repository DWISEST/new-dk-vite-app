import React from 'react';
import Card from '../ui/Card';
import type { AdminView } from '../../types';

interface DashboardHomeProps {
    productCount: number;
    jobCount: number;
    onNavigate: (view: AdminView) => void;
}

const PackageIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4a4.5 4.5 0 1 1-9 0"/><path d="M22 13.9a4.5 4.5 0 0 1-9 0"/><path d="M22 4.9a4.5 4.5 0 0 0-9 0"/><path d="M4.5 18.4a4.5 4.5 0 1 0 9 0"/><path d="M13.5 13.9a4.5 4.5 0 1 1 9 0"/><path d="M13.5 4.9a4.5 4.5 0 1 0 9 0"/></svg>);
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);

const DashboardHome: React.FC<DashboardHomeProps> = ({ productCount, jobCount, onNavigate }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Welcome, Admin!</h2>
      <p className="text-slate-400 mb-8">This is your control center for managing the website's content. You can add, edit, or delete products and job listings from here.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <div className="flex items-center">
            <div className="p-3 bg-primary/10 rounded-lg mr-4">
              <PackageIcon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Total Products</p>
              <p className="text-2xl font-bold text-white">{productCount}</p>
            </div>
          </div>
          <button onClick={() => onNavigate('products')} className="text-sm font-semibold text-primary hover:text-primary-400 mt-4">
            Manage Products &rarr;
          </button>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
           <div className="flex items-center">
            <div className="p-3 bg-primary/10 rounded-lg mr-4">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Open Positions</p>
              <p className="text-2xl font-bold text-white">{jobCount}</p>
            </div>
          </div>
          <button onClick={() => onNavigate('careers')} className="text-sm font-semibold text-primary hover:text-primary-400 mt-4">
            Manage Careers &rarr;
          </button>
        </Card>
      </div>

       <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="flex space-x-4">
          <button onClick={() => onNavigate('products')} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Add New Product
          </button>
          <button onClick={() => onNavigate('careers')} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Post New Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
