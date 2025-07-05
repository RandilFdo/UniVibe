
import React, { useState } from 'react';
import { X, Image, Camera, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: (content: string, image?: string, location?: string) => void;
}

const CreatePostModal = ({ isOpen, onClose, onPost }: CreatePostModalProps) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      onPost(content, image || undefined, location || undefined);
      setContent('');
      setImage('');
      setLocation('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dark:bg-gray-900 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="dark:text-white">Create Post</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <textarea
            placeholder="What's happening on campus?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-lg resize-none h-32 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            maxLength={500}
          />
          
          <Input
            placeholder="Add image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          
          <Input
            placeholder="Add location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Image size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Camera size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <MapPin size={20} />
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handlePost}
                disabled={!content.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
