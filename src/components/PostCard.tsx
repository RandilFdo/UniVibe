
import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  username: string;
  university: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
}

const PostCard = ({ 
  username, 
  university, 
  timeAgo, 
  content, 
  image, 
  likes, 
  comments, 
  isLiked: initialIsLiked = false 
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{username}</h3>
            <p className="text-xs text-gray-500">{university} • {timeAgo}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 leading-relaxed">{content}</p>
      </div>

      {/* Image */}
      {image && (
        <div className="px-4 pb-3">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-50">
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart 
              size={20} 
              className={isLiked ? 'fill-current' : ''} 
            />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm font-medium">{comments}</span>
          </button>
          <button className="text-gray-600 hover:text-green-500 transition-colors">
            <Share size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
