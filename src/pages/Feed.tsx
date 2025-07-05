
import React from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import BottomNavigation from '../components/BottomNavigation';

const Feed = () => {
  const posts = [
    {
      username: "Sarah M.",
      university: "MIT",
      timeAgo: "2h",
      content: "Just aced my algorithms exam! 🎉 The study group sessions really paid off. Who else is surviving finals week?",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      likes: 24,
      comments: 8,
      isLiked: false
    },
    {
      username: "Alex K.",
      university: "Stanford",
      timeAgo: "4h",
      content: "Anyone else think the new campus café has the best coffee? ☕ Perfect study spot too!",
      likes: 12,
      comments: 5,
      isLiked: true
    },
    {
      username: "Maya R.",
      university: "UC Berkeley",
      timeAgo: "6h",
      content: "Late night coding session in the library 💻 Building something amazing for my CS project!",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      likes: 18,
      comments: 3,
      isLiked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="UniVibe" />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What's happening on campus?</h2>
        </div>
        
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Feed;
