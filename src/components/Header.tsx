
import React from 'react';
import { Bell, Plus, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  onCreatePost?: () => void;
  onSearchClick?: () => void;
}

const Header = ({ title, showSearch = true, onCreatePost, onSearchClick }: HeaderProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h1>
        
        <div className="flex items-center space-x-3">
          {showSearch && (
            <button 
              onClick={onSearchClick}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <Search size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          )}
          
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </button>
          
          {onCreatePost && (
            <button 
              onClick={onCreatePost}
              className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-105 duration-200"
            >
              <Plus size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
