
import React from 'react';
import { Home, Users, MessageSquare, User, Heart } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Feed', path: '/' },
    { icon: Users, label: 'Roommates', path: '/roommates' },
    { icon: MessageSquare, label: 'Confessions', path: '/confessions' },
    { icon: Heart, label: 'Messages', path: '/matches' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-purple-600 bg-purple-50 dark:bg-purple-900/30 scale-110' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400'
              }`}
            >
              <Icon size={20} className={`${isActive ? 'text-purple-600 dark:text-purple-400' : ''} transition-colors`} />
              <span className={`text-xs mt-1 font-medium transition-colors ${
                isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
