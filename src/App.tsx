
import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoadingScreen from './components/LoadingScreen';
import AuthScreen from './components/AuthScreen';
import Feed from "./pages/Feed";
import Explore from "./pages/Explore";
import Roommates from "./pages/Roommates";
import Confessions from "./pages/Confessions";
import Matches from "./pages/Matches";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, isLoading } = useAuth();
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    // Show loading screen for first time users
    const hasSeenLoading = localStorage.getItem('univibe_seen_loading');
    if (!hasSeenLoading) {
      const timer = setTimeout(() => {
        setShowLoadingScreen(false);
        localStorage.setItem('univibe_seen_loading', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowLoadingScreen(false);
    }
  }, []);

  if (showLoadingScreen) {
    return <LoadingScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/roommates" element={<Roommates />} />
        <Route path="/confessions" element={<Confessions />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
