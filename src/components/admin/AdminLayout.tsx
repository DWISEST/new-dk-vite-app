
import React from 'react';
import type { AdminView } from '../../types';
import Logo from '../Logo';

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
const PackageIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4a4.5 4.5 0 1 1-9 0"/><path d="M22 13.9a4.5 4.5 0 0 1-9 0"/><path d="M22 4.9a4.5 4.5 0 0 0-9 0"/><path d="M4.5 18.4a4.5 4.5 0 1 0 9 0"/><path d="M13.5 13.9a4.5 4.5 0 1 1 9 0"/><path d="M13.5 4.9a4.5 4.5 0 1 0 9 0"/></svg>);
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);
const LogOutIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>);

interface AdminLayoutProps {
    children: React.ReactNode;
    currentView: AdminView;
    onNavigate: (view: AdminView) => void;
    onLogout: () => void;
}

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
    const activeClasses = 'bg-primary text-white';
    const inactiveClasses = 'text-slate-400 hover:bg-slate-700 hover:text-white';
    return (
        <button onClick={onClick} className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}>
            {icon}
            <span className="ml-3">{label}</span>
        </button>
    );
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, currentView, onNavigate, onLogout }) => {
    return (
        <div className="flex h-screen bg-slate-900 text-slate-300">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 bg-slate-800 p-4 flex flex-col">
                <div className="px-4 mb-8">
                    <Logo height={15} />
                </div>
                <nav className="flex-grow">
                    <ul className="space-y-2">
                        <li><NavItem icon={<HomeIcon className="h-5 w-5"/>} label="Dashboard" isActive={currentView === 'dashboard'} onClick={() => onNavigate('dashboard')} /></li>
                        <li><NavItem icon={<PackageIcon className="h-5 w-5"/>} label="Product Management" isActive={currentView === 'products'} onClick={() => onNavigate('products')} /></li>
                        <li><NavItem icon={<BriefcaseIcon className="h-5 w-5"/>} label="Career Management" isActive={currentView === 'careers'} onClick={() => onNavigate('careers')} /></li>
                    </ul>
                </nav>
                <div>
                     <button onClick={onLogout} className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 text-slate-400 hover:bg-red-500/20 hover:text-red-400">
                        <LogOutIcon className="h-5 w-5"/>
                        <span className="ml-3">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                 <header className="bg-slate-800/50 p-4 border-b border-slate-700">
                    <h1 className="text-xl font-bold text-white capitalize">{currentView}</h1>
                </header>
                <main className="flex-1 overflow-y-auto p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
