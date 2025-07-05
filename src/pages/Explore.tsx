
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Search, TrendingUp, MapPin, BookOpen, Briefcase, Users, MessageSquare, ShoppingCart, Coffee, Calendar } from 'lucide-react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingPosts = [
    {
      id: '1',
      hashtag: '#FreshersWeek2024',
      posts: '2.3K posts',
      university: 'Oxford University',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400'
    },
    {
      id: '2',
      hashtag: '#StudyGroup',
      posts: '1.8K posts',
      university: 'Cambridge',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400'
    }
  ];

  const quickActions = [
    { icon: MapPin, label: 'Campus Map', color: 'bg-blue-500' },
    { icon: BookOpen, label: 'Study Notes', color: 'bg-green-500' },
    { icon: Briefcase, label: 'Jobs', color: 'bg-purple-500' },
    { icon: Users, label: 'Societies', color: 'bg-pink-500' },
    { icon: MessageSquare, label: 'Q&A Help', color: 'bg-orange-500' },
    { icon: ShoppingCart, label: 'Marketplace', color: 'bg-red-500' },
    { icon: Coffee, label: 'Campus Food', color: 'bg-yellow-500' },
    { icon: Calendar, label: 'Events', color: 'bg-indigo-500' }
  ];

  const universities = [
    'Oxford University', 'Cambridge University', 'Imperial College London',
    'UCL', 'King\'s College London', 'Edinburgh University'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header title="Explore" />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search hashtags, universities, students..."
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform"
                >
                  <div className={`${action.color} w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{action.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          {['trending', 'universities', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'trending' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="text-orange-500" size={20} />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Trending Now</h3>
            </div>
            {trendingPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <img src={post.image} alt="Trending" className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-1">{post.hashtag}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.posts} • {post.university}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'universities' && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Popular Universities</h3>
            {universities.map((uni, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{uni.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{uni}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{Math.floor(Math.random() * 5000 + 1000)} students</p>
                </div>
                <button className="text-purple-600 dark:text-purple-400 font-medium text-sm">Follow</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar className="text-purple-500" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Freshers Fair 2024</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tomorrow, 10:00 AM</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Join societies, meet new people, and get free stuff!</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium">
                I'm Interested
              </button>
            </div>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Explore;
