
import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Bookmark, Send } from 'lucide-react';
import CommentModal from './CommentModal';

interface PostCardProps {
  id?: string;
  username: string;
  university: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  isTrending?: boolean;
}

const PostCard = ({ 
  id = '1',
  username, 
  university, 
  timeAgo, 
  content, 
  image, 
  likes, 
  comments, 
  shares = 0,
  isLiked: initialIsLiked = false,
  isBookmarked: initialIsBookmarked = false,
  isTrending = false
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [shareCount, setShareCount] = useState(shares);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    setShareCount(prev => prev + 1);
    navigator.share?.({
      title: `${username}'s post`,
      text: content,
      url: window.location.href
    }).catch(() => {
      navigator.clipboard.writeText(window.location.href);
    });
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-4 overflow-hidden relative">
        {isTrending && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 animate-pulse">
            🔥 TRENDING
          </div>
        )}
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{username}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{university} • {timeAgo}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <MoreHorizontal size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-3">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{content}</p>
        </div>

        {/* Image */}
        {image && (
          <div className="px-4 pb-3">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-64 object-cover rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
            />
          </div>
        )}

        {/* Engagement Stats */}
        <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{likeCount} likes</span>
          <div className="flex space-x-4">
            <span>{comments} comments</span>
            {shareCount > 0 && <span>{shareCount} shares</span>}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-50 dark:border-gray-700">
          <div className="flex items-center space-x-6">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-all duration-200 ${
                isLiked ? 'text-red-500 scale-110' : 'text-gray-600 dark:text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart 
                size={20} 
                className={`${isLiked ? 'fill-current animate-bounce' : ''}`} 
              />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            <button 
              onClick={() => setShowComments(true)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="text-sm font-medium">{comments}</span>
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors"
            >
              <Share size={20} />
              {shareCount > 0 && <span className="text-sm font-medium">{shareCount}</span>}
            </button>
          </div>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`transition-colors ${
              isBookmarked ? 'text-purple-500' : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
            }`}
          >
            <Bookmark size={20} className={isBookmarked ? 'fill-current' : ''} />
          </button>
        </div>
      </div>

      <CommentModal
        isOpen={showComments}
        onClose={() => setShowComments(false)}
        postId={id}
      />
    </>
  );
};

export default PostCard;
