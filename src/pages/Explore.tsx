import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import UserSearchModal from '../components/UserSearchModal';
import { Search, TrendingUp, BookOpen, Users, Calendar, Plus } from 'lucide-react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserSearch, setShowUserSearch] = useState(false);

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
    },
    {
      id: '3',
      hashtag: '#Events',
      posts: '1.2K posts',
      university: 'UCL',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'
    }
  ];

  const quickActions = [
    { icon: BookOpen, label: 'Study Help', color: 'bg-green-500', tab: 'study' },
    { icon: Users, label: 'Societies', color: 'bg-pink-500', tab: 'societies' },
    { icon: Calendar, label: 'Events', color: 'bg-indigo-500', tab: 'events' },
    { icon: Search, label: 'Find Users', color: 'bg-purple-500', action: () => setShowUserSearch(true) }
  ];

  const universities = [
    'Oxford University', 'Cambridge University', 'Imperial College London',
    'UCL', 'King\'s College London', 'Edinburgh University'
  ];

  const studyResources = [
    { title: 'Calculus Notes', subject: 'Mathematics', price: '£5', user: 'MathGuru23' },
    { title: 'Physics Lab Reports', subject: 'Physics', price: 'Free', user: 'ScienceNerd' },
    { title: 'Essay Writing Guide', subject: 'English', price: '£3', user: 'WritePro' }
  ];

  const societies = [
    { name: 'Computer Science Society', members: '1.2K', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100' },
    { name: 'Photography Club', members: '856', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=100' },
    { name: 'Debate Society', members: '643', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=100' }
  ];

  const events = [
    { title: 'Freshers Fair 2024', date: 'Tomorrow, 10:00 AM', attendees: 234 },
    { title: 'Study Group - Calculus', date: 'Today, 6:00 PM', attendees: 12 },
    { title: 'Society Open Night', date: 'Friday, 7:00 PM', attendees: 89 }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search functionality
  };

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
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => action.tab ? setActiveTab(action.tab) : action.action?.()}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
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
          {['trending', 'universities', 'societies', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
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
            {trendingPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img src={post.image} alt="Trending" className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-1">{post.hashtag}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.posts} • {post.university}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'societies' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recommended Societies</h3>
              <button 
                onClick={() => console.log('Create society')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg"
              >
                <Plus size={16} />
              </button>
            </div>
            {societies.map((society, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center space-x-3">
                <img src={society.image} alt={society.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{society.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{society.members} members</p>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Campus Events</h3>
              <button 
                onClick={() => console.log('Create event')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg"
              >
                <Plus size={16} />
              </button>
            </div>
            {events.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="text-purple-500" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">{event.attendees} interested</p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    Interested
                  </button>
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
                <button className="text-purple-600 dark:text-purple-400 font-medium text-sm hover:text-purple-700 transition-colors">Follow</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation />
      
      <UserSearchModal
        isOpen={showUserSearch}
        onClose={() => setShowUserSearch(false)}
      />
    </div>
  );
};

export default Explore;
