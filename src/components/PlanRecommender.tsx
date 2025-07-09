import React, { useState } from 'react';
import { recommendPlan } from '../services/geminiService';
import type { RecommendedPlan } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import { RocketIcon } from '../constants';

interface PlanRecommenderProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spinner"></div>
        <p className="text-slate-400">Analyzing your needs...</p>
    </div>
);

const PlanRecommender: React.FC<PlanRecommenderProps> = ({ isOpen, onClose, onNavigate }) => {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<RecommendedPlan | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) {
      setError('Please describe your internet usage.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecommendation(null);
    try {
      const result = await recommendPlan(userInput);
      setRecommendation(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setUserInput('');
    setRecommendation(null);
    setError(null);
    setIsLoading(false);
    onClose();
  };

  const handleChoosePlan = () => {
      onNavigate('plans');
      handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in-up"
      style={{ animationDuration: '0.3s' }}
      onClick={handleClose}
    >
      <Card className="w-full max-w-lg relative bg-slate-800 border-slate-700" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 text-2xl font-bold">&times;</button>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center mb-2 text-white">AI Plan Recommender</h2>
          <p className="text-center text-slate-400 mb-6">Tell us how you use the internet, and we'll find the perfect plan for you.</p>

          {!recommendation && (
            <form onSubmit={handleSubmit}>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., I work from home with lots of video calls, and my family loves to stream 4K movies and play online games."
                className="w-full h-32 p-3 border border-slate-600 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-slate-900 text-slate-200 placeholder:text-slate-500"
                disabled={isLoading}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : 'Get Recommendation'}
              </Button>
            </form>
          )}

          {isLoading && !recommendation && (
            <div className="mt-6">
                <LoadingSpinner />
            </div>
          )}

          {recommendation && (
            <div className="text-center mt-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-slate-400">Our Recommendation for You:</h3>
              <div className="my-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-3xl font-bold text-primary">{recommendation.recommendedPlan}</p>
              </div>
              <RocketIcon className="h-10 w-10 text-secondary mx-auto mb-2" />
              <p className="text-slate-300">{recommendation.reason}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={handleChoosePlan}>Choose Plan</Button>
                <Button variant="outline" onClick={() => setRecommendation(null)}>Try Again</Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PlanRecommender;