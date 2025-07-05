
import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
}

const Header = ({ title, showSearch = true }: HeaderProps) => {
  return (
    <div className="sticky top-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-40">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="flex items-center space-x-3">
          {showSearch && (
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-600" />
            </button>
          )}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell size={20} className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
