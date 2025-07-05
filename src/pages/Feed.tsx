import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import PostCard from '../components/PostCard';
import CreatePostModal from '../components/CreatePostModal';
import { useTheme } from '../contexts/ThemeContext';

const Feed = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const { isDarkMode } = useTheme();

  const posts = [
    {
      id: '1',
      user: 'sarah_m',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c6c5?w=60&h=60&fit=crop&crop=face',
      content: 'Just finished my first week at MIT! Loving the campus and the people. #MIT #FreshmanYear',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400',
      likes: 234,
      comments: 34,
      location: 'Cambridge, MA',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      user: 'alex_k',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      content: 'Anyone else struggling with the Physics 101 midterm? 😩 #Physics #Midterm #Help',
      image: null,
      likes: 156,
      comments: 23,
      location: null,
      timestamp: '4 hours ago'
    },
    {
      id: '3',
      user: 'maya_r',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
      content: 'Excited to join the coding club at Berkeley! Looking forward to learning new things and meeting new people. #Coding #Berkeley #Club',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
      likes: 189,
      comments: 45,
      location: 'Berkeley, CA',
      timestamp: '6 hours ago'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        title="UniVibe" 
        onCreatePost={() => setShowCreatePost(true)}
      />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Feed Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <BottomNavigation />
      
      <CreatePostModal
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onCreatePost={(content, image, location) => {
          console.log('Creating post:', { content, image, location });
        }}
      />
    </div>
  );
};

export default Feed;
