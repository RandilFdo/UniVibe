
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import ChatScreen from '../components/ChatScreen';
import { MessageCircle, Heart, Users, Video, Plus } from 'lucide-react';

const Matches = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [showGroupCreator, setShowGroupCreator] = useState(false);

  const matches = [
    {
      id: '1',
      name: "Emma J.",
      type: "roommate" as const,
      matchTime: "2 hours ago",
      lastMessage: "Hey! Love your profile, when can we chat about the apartment?",
      unread: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      isOnline: true
    },
    {
      id: '2',
      name: "Study Squad",
      type: "group" as const,
      matchTime: "1 day ago", 
      lastMessage: "Alex: Anyone free for study session tomorrow?",
      unread: false,
      avatar: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=60&h=60&fit=crop",
      members: 4,
      isOnline: false
    },
    {
      id: '3',
      name: "Anonymous",
      type: "confession" as const,
      matchTime: "1 day ago",
      lastMessage: "Thanks for the supportive comment on my post ❤️",
      unread: false,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      isOnline: false
    },
    {
      id: '4',
      name: "David C.",
      type: "roommate" as const,
      matchTime: "3 days ago",
      lastMessage: "The place looks great! When are you free to meet?",
      unread: false,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      isOnline: true
    }
  ];

  if (selectedChat) {
    const match = matches.find(m => m.id === selectedChat);
    return (
      <ChatScreen
        matchName={match?.name || 'Unknown'}
        onBack={() => setSelectedChat(null)}
      />
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'roommate': return 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
      case 'group': return 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400';
      case 'confession': return 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'roommate': return <Users size={16} />;
      case 'group': return <Users size={16} />;
      case 'confession': return <MessageCircle size={16} />;
      default: return <MessageCircle size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header title="Messages" showSearch={false} />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your Chats</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Stay connected with your matches</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowGroupCreator(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Active Now */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Active Now</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {matches.filter(m => m.isOnline).map((match) => (
              <div
                key={`active-${match.id}`}
                onClick={() => setSelectedChat(match.id)}
                className="flex-shrink-0 cursor-pointer text-center"
              >
                <div className="relative">
                  <img
                    src={match.avatar}
                    alt={match.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400 truncate w-12">
                  {match.name.split(' ')[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat List */}
        <div className="space-y-3">
          {matches.map((match) => (
            <div
              key={match.id}
              onClick={() => setSelectedChat(match.id)}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={match.avatar}
                    alt={match.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {match.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                  )}
                  {match.type === 'group' && match.members && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {match.members}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                        {match.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getTypeColor(match.type)}`}>
                        {getTypeIcon(match.type)}
                        <span className="capitalize">{match.type}</span>
                      </span>
                    </div>
                    {match.unread && (
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {match.lastMessage}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-400">{match.matchTime}</p>
                    <div className="flex space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle video call
                        }}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <Video size={16} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedChat(match.id);
                        }}
                        className="text-gray-400 hover:text-green-500 transition-colors"
                      >
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {matches.length === 0 && (
          <div className="text-center py-12">
            <Heart size={48} className="text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No messages yet</h3>
            <p className="text-gray-500 dark:text-gray-400">Start connecting with roommates or join conversations!</p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Matches;
