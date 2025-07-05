
import React, { useState } from 'react';
import { Search, MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useNavigate } from 'react-router-dom';

interface UserSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserSearchModal = ({ isOpen, onClose }: UserSearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const users = [
    { id: '1', username: 'sarah_m', name: 'Sarah Mitchell', university: 'MIT', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c6c5?w=60&h=60&fit=crop&crop=face' },
    { id: '2', username: 'alex_k', name: 'Alex Kumar', university: 'Stanford', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face' },
    { id: '3', username: 'maya_r', name: 'Maya Rodriguez', university: 'UC Berkeley', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face' },
  ];

  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMessage = (user: any) => {
    navigate('/matches');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dark:bg-gray-900 dark:border-gray-700 max-w-md">
        <DialogHeader>
          <DialogTitle className="dark:text-white">Find Users</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          <div className="max-h-64 overflow-y-auto space-y-2">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{user.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</p>
                  <p className="text-xs text-gray-400">{user.university}</p>
                </div>
                <button
                  onClick={() => handleMessage(user)}
                  className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  <MessageCircle size={16} />
                </button>
              </div>
            ))}
          </div>

          {searchQuery && filteredUsers.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No users found matching "{searchQuery}"
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserSearchModal;
