import React, { useState } from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import BottomNavigation from '../components/BottomNavigation';
import CreatePostModal from '../components/CreatePostModal';
import StoryViewer from '../components/StoryViewer';
import { Flame, TrendingUp } from 'lucide-react';

const Feed = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showStories, setShowStories] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: '1',
      username: "Sarah M.",
      university: "MIT",
      timeAgo: "2h",
      content: "Just aced my algorithms exam! 🎉 The study group sessions really paid off. Who else is surviving finals week?",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      likes: 124,
      comments: 18,
      shares: 5,
      isLiked: false,
      isTrending: true
    },
    {
      id: '2',
      username: "Alex K.",
      university: "Stanford", 
      timeAgo: "4h",
      content: "Anyone else think the new campus café has the best coffee? ☕ Perfect study spot too!",
      likes: 67,
      comments: 12,
      shares: 2,
      isLiked: true,
      isTrending: false
    },
    {
      id: '3',
      username: "Maya R.",
      university: "UC Berkeley",
      timeAgo: "6h", 
      content: "Late night coding session in the library 💻 Building something amazing for my CS project!",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      likes: 89,
      comments: 23,
      shares: 8,
      isLiked: false,
      isTrending: true
    }
  ]);

  const stories = [
    {
      id: '1',
      user: 'Your Story',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c6c5?w=60&h=60&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      caption: 'Beautiful campus day! 🌸',
      timestamp: '2h'
    },
    {
      id: '2', 
      user: 'Emma J.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
      caption: 'Study grind never stops 📚',
      timestamp: '4h'
    },
    {
      id: '3',
      user: 'David C.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400',
      caption: 'Game night was epic! 🎮',
      timestamp: '6h'
    }
  ];

  const handleCreatePost = (content: string, image?: string, location?: string) => {
    const newPost = {
      id: Date.now().toString(),
      username: "You",
      university: "Your University",
      timeAgo: "now",
      content,
      image,
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isTrending: false
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header title="UniVibe" onCreatePost={() => setShowCreatePost(true)} />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Stories */}
        <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setShowStories(true)}
              className="flex-shrink-0 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5">
                <img
                  src={story.avatar}
                  alt={story.user}
                  className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-800"
                />
              </div>
              <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400 truncate w-16">
                {story.user}
              </p>
            </div>
          ))}
        </div>

        {/* Trending Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 mb-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Flame size={20} />
            <h3 className="font-bold">Trending Now</h3>
            <TrendingUp size={16} />
          </div>
          <p className="text-sm opacity-90">
            #StudyLife is trending with 2.3K posts today! Join the conversation 🔥
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button 
            onClick={() => setShowCreatePost(true)}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform"
          >
            <div className="text-2xl mb-2">✍️</div>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Post</p>
          </button>
          <button className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform">
            <div className="text-2xl mb-2">📸</div>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Story</p>
          </button>
          <button className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform">
            <div className="text-2xl mb-2">🎥</div>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Live</p>
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What's happening on campus?</h2>
        </div>
        
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      <BottomNavigation />
      
      <CreatePostModal
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onPost={handleCreatePost}
      />

      {showStories && (
        <StoryViewer
          stories={stories}
          currentIndex={0}
          onClose={() => setShowStories(false)}
        />
      )}
    </div>
  );
};

export default Feed;
