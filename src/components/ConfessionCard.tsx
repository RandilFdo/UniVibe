
import React, { useState } from 'react';
import { Heart, MessageCircle, Clock, Eye } from 'lucide-react';

interface ConfessionCardProps {
  category: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
  isLiked?: boolean;
  categoryColor?: string;
}

const ConfessionCard = ({ 
  category, 
  timeAgo, 
  content, 
  likes, 
  comments, 
  views,
  isLiked: initialIsLiked = false,
  categoryColor = 'purple'
}: ConfessionCardProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const getCategoryStyles = () => {
    const styles = {
      crush: 'bg-pink-50 text-pink-600 border-pink-200',
      rant: 'bg-red-50 text-red-600 border-red-200',
      tea: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      event: 'bg-blue-50 text-blue-600 border-blue-200',
      confession: 'bg-purple-50 text-purple-600 border-purple-200'
    };
    return styles[category.toLowerCase() as keyof typeof styles] || styles.confession;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryStyles()}`}>
            {category}
          </span>
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Clock size={14} />
            <span>{timeAgo}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-500 text-sm">
          <Eye size={14} />
          <span>{views}</span>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-800 leading-relaxed mb-4">{content}</p>

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart 
              size={18} 
              className={isLiked ? 'fill-current' : ''} 
            />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm font-medium">{comments}</span>
          </button>
        </div>
        <button className="text-sm text-purple-600 font-medium hover:text-purple-700">
          Reply
        </button>
      </div>
    </div>
  );
};

export default ConfessionCard;
