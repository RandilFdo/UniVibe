
import React from 'react';
import Header from '../components/Header';
import ConfessionCard from '../components/ConfessionCard';
import BottomNavigation from '../components/BottomNavigation';
import { Plus } from 'lucide-react';

const Confessions = () => {
  const confessions = [
    {
      category: "Crush",
      timeAgo: "1h",
      content: "To the person in the red hoodie at the library yesterday... you have the most beautiful smile. I've been thinking about you all day 💕",
      likes: 47,
      comments: 12,
      views: 234,
      isLiked: false
    },
    {
      category: "Rant", 
      timeAgo: "3h",
      content: "Why do professors assign group projects and then not give us time to coordinate? I'm tired of carrying my entire team 😤",
      likes: 89,
      comments: 23,
      views: 567,
      isLiked: true
    },
    {
      category: "Tea",
      timeAgo: "5h", 
      content: "Did anyone else see what happened at the dining hall today? The drama was UNREAL ☕️",
      likes: 156,
      comments: 78,
      views: 892,
      isLiked: false
    },
    {
      category: "Confession",
      timeAgo: "8h",
      content: "I've been pretending to understand calculus for 3 weeks now. Someone please help me before the midterm 😭",
      likes: 203,
      comments: 45,
      views: 1200,
      isLiked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Confessions" showSearch={false} />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Anonymous Confessions</h2>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Plus size={20} />
          </button>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
          <p className="text-purple-800 text-sm">
            🤫 Share your thoughts anonymously. Your identity is completely private.
          </p>
        </div>
        
        {confessions.map((confession, index) => (
          <ConfessionCard key={index} {...confession} />
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Confessions;
