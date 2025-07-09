import React, { useState } from 'react';
import Button from './ui/Button';

interface ServiceCheckProps {
  onNavigate: (path: string) => void;
}

const ServiceCheck: React.FC<ServiceCheckProps> = ({ onNavigate }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('plans');
  };

  return (
    <div className="mt-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-2xl flex items-center gap-2 border border-white/20"
      >
        <label htmlFor="service-address" className="sr-only">
          Service Address
        </label>
        <input
          id="service-address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="ENTER YOUR INSTALLATION ADDRESS"
          className="flex-grow bg-transparent text-white placeholder:text-slate-300 text-sm tracking-wider uppercase py-3 px-4 focus:outline-none"
        />
        <Button
          type="submit"
          variant="primary"
          className="px-6 py-3 text-sm font-bold tracking-wider"
        >
          Check Availability
        </Button>
      </form>
    </div>
  );
};

export default ServiceCheck;