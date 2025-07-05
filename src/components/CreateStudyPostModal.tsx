
import React, { useState, useRef } from 'react';
import { X, Upload, Camera, FileText, HelpCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface CreateStudyPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'questions' | 'notes';
}

const CreateStudyPostModal = ({ isOpen, onClose, activeTab }: CreateStudyPostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [price, setPrice] = useState('Free');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
    'Engineering', 'Economics', 'Business', 'Psychology', 'English', 'History'
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handlePost = () => {
    if (title.trim() && subject) {
      // Handle post creation logic here
      console.log('Creating post:', { title, content, subject, files: selectedFiles, price, type: activeTab });
      setTitle('');
      setContent('');
      setSubject('');
      setSelectedFiles([]);
      setPrice('Free');
      onClose();
    }
  };

  const handleClose = () => {
    setTitle('');
    setContent('');
    setSubject('');
    setSelectedFiles([]);
    setPrice('Free');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="dark:bg-gray-900 dark:border-gray-700 max-w-md">
        <DialogHeader>
          <DialogTitle className="dark:text-white flex items-center">
            {activeTab === 'questions' ? (
              <>
                <HelpCircle size={20} className="mr-2" />
                Ask a Question
              </>
            ) : (
              <>
                <FileText size={20} className="mr-2" />
                Upload Study Notes
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all"
            >
              <option value="">Select a subject</option>
              {subjects.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {activeTab === 'questions' ? 'Question Title' : 'Notes Title'}
            </label>
            <input
              type="text"
              placeholder={activeTab === 'questions' ? 'What do you need help with?' : 'Give your notes a title...'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all"
              maxLength={100}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {activeTab === 'questions' ? 'Description' : 'Description (optional)'}
            </label>
            <textarea
              placeholder={activeTab === 'questions' ? 'Provide more details about your question...' : 'Describe what your notes cover...'}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border rounded-lg resize-none h-24 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all"
              maxLength={500}
            />
          </div>

          {activeTab === 'notes' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price
              </label>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="Free">Free</option>
                <option value="£1">£1</option>
                <option value="£3">£3</option>
                <option value="£5">£5</option>
                <option value="£10">£10</option>
              </select>
            </div>
          )}

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {activeTab === 'questions' ? 'Attach Images (optional)' : 'Upload Files'}
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Upload size={20} />
                <span>
                  {activeTab === 'questions' ? 'Add images to help explain your question' : 'Upload PDFs, images, or documents'}
                </span>
              </button>
              
              {selectedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{file.name}</span>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-2 pt-4">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handlePost}
              disabled={!title.trim() || !subject}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
            >
              {activeTab === 'questions' ? 'Ask Question' : 'Upload Notes'}
            </button>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={activeTab === 'questions' ? 'image/*' : '*'}
          onChange={handleFileSelect}
          className="hidden"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateStudyPostModal;
