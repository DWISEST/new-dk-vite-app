
import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Logo from '../Logo';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // In a real application, this would be an API call.
    // For now, we use a hardcoded password stored in an env var or a simple string.
    // This is NOT secure for production but is fine for this project's constraints.
    const correctPassword = process.env.ADMIN_PASSWORD || 'password123';

    setTimeout(() => {
      if (password === correctPassword) {
        onLoginSuccess();
      } else {
        setError('Incorrect password. Please try again.');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="text-center mb-8">
            <Logo height={25} className="inline-block" />
        </div>
        <Card className="bg-slate-800 border-slate-700">
          <h1 className="text-2xl font-bold text-center text-white mb-2">Admin Access</h1>
          <p className="text-center text-slate-400 mb-6">Enter the password to manage content.</p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="password-admin" className="sr-only">Password</label>
                <Input
                  id="password-admin"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  error={!!error}
                  disabled={isLoading}
                  autoFocus
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Verifying...' : 'Login'}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
