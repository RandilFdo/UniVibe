
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { MessageCircle, Heart, Users } from 'lucide-react';

const Matches = () => {
  const matches = [
    {
      name: "Emma J.",
      type: "roommate",
      matchTime: "2 hours ago",
      lastMessage: "Hey! Love your profile, when can we chat about the apartment?",
      unread: true
    },
    {
      name: "Anonymous", 
      type: "confession",
      matchTime: "1 day ago",
      lastMessage: "Thanks for the supportive comment on my post ❤️",
      unread: false
    },
    {
      name: "David C.",
      type: "roommate", 
      matchTime: "3 days ago",
      lastMessage: "The place looks great! When are you free to meet?",
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Matches" showSearch={false} />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your Connections</h2>
          <p className="text-gray-600 text-sm">People you've matched with and conversations</p>
        </div>

        <div className="space-y-4">
          {matches.map((match, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  {match.type === 'roommate' ? (
                    <Users size={20} className="text-white" />
                  ) : (
                    <MessageCircle size={20} className="text-white" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{match.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      match.type === 'roommate' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-purple-50 text-purple-600'
                    }`}>
                      {match.type}
                    </span>
                    {match.unread && (
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 truncate">{match.lastMessage}</p>
                  <p className="text-xs text-gray-400 mt-1">{match.matchTime}</p>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MessageCircle size={18} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {matches.length === 0 && (
          <div className="text-center py-12">
            <Heart size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No matches yet</h3>
            <p className="text-gray-500">Start connecting with roommates or join conversations!</p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Matches;
