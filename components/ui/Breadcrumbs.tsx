
import React from 'react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-slate-400">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index < items.length - 1 ? (
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                }}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-slate-200">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;