import React from 'react';
import { Plans } from './Plans';
import type { Plan } from '../types';

interface PlansPageProps {
  onRecommendClick: () => void;
  onNavigate: (path: string) => void;
  onSignUpClick: (plan: Plan) => void;
  onRequestQuote: (topic: string) => void;
  canGoBack: boolean;
  onGoBack: () => void;
}

const PlansPage: React.FC<PlansPageProps> = (props) => {
  return (
    <main className="animate-fade-in-up bg-black">
      <Plans {...props} isPage={true} />
    </main>
  );
};

export default PlansPage;