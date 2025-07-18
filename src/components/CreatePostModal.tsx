
import React, { useState, useRef } from 'react';
import { X, Image, Camera, MapPin, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: (content: string, image?: File, location?: string) => void;
}

const CreatePostModal = ({ isOpen, onClose, onPost }: CreatePostModalProps) => {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [location, setLocation] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handlePost = () => {
    if (content.trim() || selectedImage) {
      onPost(content, selectedImage || undefined, location || undefined);
      handleClose();
    }
  };

  const handleClose = () => {
    setContent('');
    setSelectedImage(null);
    setPreviewUrl('');
    setLocation('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="dark:bg-gray-900 dark:border-gray-700 max-w-md">
        <DialogHeader>
          <DialogTitle className="dark:text-white flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">Y</span>
            </div>
            <span>Create Post</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {previewUrl && (
            <div className="relative animate-fade-in">
              <img 
                src={previewUrl} 
                alt="Post preview" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setPreviewUrl('');
                }}
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          )}
          
          <textarea
            placeholder="What's happening on campus?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-lg resize-none h-32 dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            maxLength={500}
          />
          
          {location && (
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
              <MapPin size={16} />
              <span>{location}</span>
              <button 
                onClick={() => setLocation('')}
                className="ml-auto text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex space-x-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                title="Add photo"
              >
                <Upload size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                <Camera size={20} />
              </button>
              <button 
                onClick={() => setLocation('Campus Library')}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <MapPin size={20} />
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePost}
                disabled={!content.trim() && !selectedImage}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg disabled:opacity-50 hover:opacity-90 transition-all transform hover:scale-105 duration-200"
              >
                Share
              </button>
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
