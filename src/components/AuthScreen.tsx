
import React, { useState } from 'react';
import { Eye, EyeOff, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Input } from './ui/input';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    university: '',
    year: ''
  });
  const { login, signup, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signup({
          email: formData.email,
          password: formData.password,
          username: formData.username,
          university: formData.university,
          year: formData.year
        });
      }
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
        <div className="text-white text-center">
          <Heart className="animate-pulse mx-auto mb-4" size={48} />
          <p>Getting you ready...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm mb-4">
            <Heart size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">UniVibe</h1>
          <p className="text-white/80">Connect. Share. Vibe.</p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="University email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
            
            {!isLogin && (
              <>
                <Input
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => updateField('username', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  required
                />
                <Input
                  placeholder="University"
                  value={formData.university}
                  onChange={(e) => updateField('university', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  required
                />
                <select
                  value={formData.year}
                  onChange={(e) => updateField('year', e.target.value)}
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white"
                  required
                >
                  <option value="">Select Year</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </>
            )}

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-white/90 transition-colors"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
