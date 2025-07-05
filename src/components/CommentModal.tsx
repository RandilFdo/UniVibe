
import React, { useState } from 'react';
import { Heart, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';

interface Comment {
  id: string;
  user: string;
  content: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
}

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}

const CommentModal = ({ isOpen, onClose, postId }: CommentModalProps) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: 'Alex K.',
      content: 'This is so relatable! 😂',
      timeAgo: '2m',
      likes: 3,
      isLiked: false
    },
    {
      id: '2', 
      user: 'Maya R.',
      content: 'Same energy! Love this vibe 💯',
      timeAgo: '5m',
      likes: 7,
      isLiked: true
    }
  ]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        user: 'You',
        content: newComment,
        timeAgo: 'now',
        likes: 0,
        isLiked: false
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const toggleLike = (id: string) => {
    setComments(comments.map(comment => 
      comment.id === id 
        ? { ...comment, isLiked: !comment.isLiked, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1 }
        : comment
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dark:bg-gray-900 dark:border-gray-700 max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="dark:text-white">Comments</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-full">
          {/* Comments List */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-semibold">
                    {comment.user.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-sm dark:text-white">{comment.user}</span>
                    <span className="text-xs text-gray-500">{comment.timeAgo}</span>
                  </div>
                  <p className="text-sm dark:text-gray-300">{comment.content}</p>
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className={`flex items-center space-x-1 mt-2 text-xs ${
                      comment.isLiked ? 'text-red-500' : 'text-gray-500'
                    }`}
                  >
                    <Heart size={12} className={comment.isLiked ? 'fill-current' : ''} />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="flex space-x-2 pt-4 border-t dark:border-gray-700">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
              className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
