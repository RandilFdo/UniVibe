
import React, { useState, useRef } from 'react';
import { X, Camera, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface CreateStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateStory: (content: string, image?: File) => void;
}

const CreateStoryModal = ({ isOpen, onClose, onCreateStory }: CreateStoryModalProps) => {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleCreateStory = () => {
    if (content.trim() || selectedImage) {
      onCreateStory(content, selectedImage || undefined);
      setContent('');
      setSelectedImage(null);
      setPreviewUrl('');
      onClose();
    }
  };

  const handleClose = () => {
    setContent('');
    setSelectedImage(null);
    setPreviewUrl('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="dark:bg-gray-900 dark:border-gray-700 max-w-md">
        <DialogHeader>
          <DialogTitle className="dark:text-white">Create Story</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {previewUrl && (
            <div className="relative">
              <img 
                src={previewUrl} 
                alt="Story preview" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setPreviewUrl('');
                }}
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          )}
          
          <textarea
            placeholder="Add a caption..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-lg resize-none h-24 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            maxLength={200}
          />

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <Upload size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                <Camera size={20} />
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
                onClick={handleCreateStory}
                disabled={!content.trim() && !selectedImage}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
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

export default CreateStoryModal;
