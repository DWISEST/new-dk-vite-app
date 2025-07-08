import React, { useState } from 'react';
import type { Product, Job, AdminView } from '../../types';
import AdminLayout from './AdminLayout';
import DashboardHome from './DashboardHome';
import ProductManagement from './ProductManagement';
import JobManagement from './JobManagement';

interface AdminPageProps {
  products: Product[];
  jobs: Job[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onAddJob: (job: Job) => void;
  onUpdateJob: (job: Job) => void;
  onDeleteJob: (jobId: string) => void;
  onLogout: () => void;
}

const AdminPage: React.FC<AdminPageProps> = (props) => {
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'products':
        return <ProductManagement 
                    products={props.products} 
                    onAdd={props.onAddProduct}
                    onUpdate={props.onUpdateProduct}
                    onDelete={props.onDeleteProduct}
                />;
      case 'careers':
        return <JobManagement
                    jobs={props.jobs}
                    onAdd={props.onAddJob}
                    onUpdate={props.onUpdateJob}
                    onDelete={props.onDeleteJob}
                />;
      case 'dashboard':
      default:
        return <DashboardHome 
                    productCount={props.products.length} 
                    jobCount={props.jobs.length} 
                    onNavigate={setCurrentView}
                />;
    }
  };

  return (
    <AdminLayout 
        currentView={currentView} 
        onNavigate={setCurrentView}
        onLogout={props.onLogout}
    >
      {renderCurrentView()}
    </AdminLayout>
  );
};

export default AdminPage;
