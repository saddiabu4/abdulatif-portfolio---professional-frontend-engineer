
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid password. Try admin123');
    }
  };

  return (
    <div className="max-w-md mx-auto py-24">
      <div className="glass p-10 rounded-3xl shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl mx-auto">🔐</div>
        <h1 className="text-3xl font-black">Admin Access</h1>
        <p className="text-slate-500">Only authorized personnel can access the dashboard content.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            placeholder="Enter Password (admin123)" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 ring-blue-500 outline-none"
          />
          {error && <p className="text-xs text-red-500 font-bold">{error}</p>}
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
