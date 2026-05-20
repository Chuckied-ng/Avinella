import React, { useState } from 'react';
import { Shield, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'avinella2025';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('cms_auth', 'true');
        onLogin();
      } else {
        setError('Incorrect password. Please try again.');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#002147] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#C9A02B] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Shield className="text-white" size={28} />
          </div>
          <img src="/logo.png" alt="Avinella" className="h-8 mx-auto mb-4 brightness-0 invert" />
          <h1 className="text-white text-2xl font-bold">CMS Admin</h1>
          <p className="text-white/50 text-sm mt-1">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-[#002147] uppercase tracking-wide mb-2">
              Admin Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm pr-10 focus:outline-none focus:border-[#C9A02B] transition-colors"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium bg-red-50 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-[#002147] hover:bg-[#002147]/90 disabled:opacity-50 text-white font-semibold rounded-xl py-3 text-sm transition-all"
          >
            {loading ? 'Verifying...' : 'Access CMS'}
          </button>
        </form>

        <p className="text-center text-white/30 text-xs mt-6">
          Avinella Global Resources CMS · Authorized Access Only
        </p>
      </div>
    </div>
  );
}
