
import React from 'react';
import { Bell, Search, Moon, Sun, Plus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  onCreatePost?: () => void;
}

const Header = ({ title, showSearch = true, onCreatePost }: HeaderProps) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-40">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="flex items-center space-x-3">
          {onCreatePost && (
            <button 
              onClick={onCreatePost}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Plus size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          )}
          {showSearch && (
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Search size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          )}
          <button 
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors relative">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
