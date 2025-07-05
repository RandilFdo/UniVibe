
import React, { useState, useEffect } from 'react';
import { X, Heart, Send } from 'lucide-react';

interface Story {
  id: string;
  user: string;
  avatar: string;
  image: string;
  caption?: string;
  timestamp: string;
}

interface StoryViewerProps {
  stories: Story[];
  currentIndex: number;
  onClose: () => void;
}

const StoryViewer = ({ stories, currentIndex, onClose }: StoryViewerProps) => {
  const [current, setCurrent] = useState(currentIndex);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (current < stories.length - 1) {
            setCurrent(current + 1);
            return 0;
          } else {
            onClose();
            return 100;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [current, stories.length, onClose]);

  const nextStory = () => {
    if (current < stories.length - 1) {
      setCurrent(current + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setProgress(0);
    }
  };

  const story = stories[current];

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Progress bars */}
      <div className="absolute top-4 left-4 right-4 flex space-x-1 z-10">
        {stories.map((_, index) => (
          <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width: index < current ? '100%' : index === current ? `${progress}%` : '0%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <img
            src={story.avatar}
            alt={story.user}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="text-white font-semibold">{story.user}</span>
          <span className="text-white/70 text-sm">{story.timestamp}</span>
        </div>
        <button onClick={onClose} className="text-white">
          <X size={24} />
        </button>
      </div>

      {/* Story Content */}
      <div className="relative w-full h-full max-w-md mx-auto">
        <img
          src={story.image}
          alt="Story"
          className="w-full h-full object-cover"
        />
        
        {/* Navigation areas */}
        <button
          onClick={prevStory}
          className="absolute left-0 top-0 w-1/3 h-full z-10"
          disabled={current === 0}
        />
        <button
          onClick={nextStory}
          className="absolute right-0 top-0 w-1/3 h-full z-10"
        />

        {/* Caption */}
        {story.caption && (
          <div className="absolute bottom-20 left-4 right-4">
            <p className="text-white bg-black/30 backdrop-blur-sm p-3 rounded-lg">
              {story.caption}
            </p>
          </div>
        )}
      </div>

      {/* Story interactions */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
        <input
          placeholder="Reply to story..."
          className="flex-1 bg-transparent border border-white/30 text-white placeholder-white/70 px-4 py-2 rounded-full"
        />
        <button className="text-white">
          <Heart size={24} />
        </button>
        <button className="text-white">
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;
