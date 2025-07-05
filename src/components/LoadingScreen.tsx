
import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Connecting with your campus...",
    "Finding your vibe...", 
    "Loading confessions...",
    "Preparing your feed..."
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
      <div className="text-center text-white px-8">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm animate-pulse">
            <Heart size={40} className="text-white animate-bounce" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 text-yellow-300 animate-spin" size={20} />
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          UniVibe
        </h1>
        <p className="text-white/80 mb-8">Where campus life comes alive</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-white to-pink-200 transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-white/70 mt-3 min-h-[20px]">
            {loadingTexts[currentText]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
