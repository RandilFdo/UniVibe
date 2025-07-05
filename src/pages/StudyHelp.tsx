
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import CreateStudyPostModal from '../components/CreateStudyPostModal';
import { BookOpen, MessageCircle, Clock, Plus, Upload, HelpCircle } from 'lucide-react';

const StudyHelp = () => {
  const [activeTab, setActiveTab] = useState('questions');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const questions = [
    {
      id: '1',
      title: 'Help with Calculus Integration',
      subject: 'Mathematics',
      content: 'Can someone explain how to solve integration by parts? I\'m struggling with the formula.',
      author: 'Sarah M.',
      university: 'Oxford',
      timestamp: '2 hours ago',
      answers: 3,
      likes: 12,
      image: null
    },
    {
      id: '2',
      title: 'Chemistry Lab Report Format',
      subject: 'Chemistry',
      content: 'What\'s the proper format for writing a chemistry lab report? Need help with the methodology section.',
      author: 'Alex K.',
      university: 'Cambridge',
      timestamp: '4 hours ago',
      answers: 7,
      likes: 8,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400'
    }
  ];

  const studyNotes = [
    {
      id: '1',
      title: 'Linear Algebra Notes - Complete',
      subject: 'Mathematics',
      author: 'MathGuru23',
      university: 'Imperial College',
      price: 'Free',
      downloads: 234,
      rating: 4.8,
      type: 'PDF',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
    },
    {
      id: '2',
      title: 'Organic Chemistry Summary',
      subject: 'Chemistry',
      author: 'ChemStudent',
      university: 'UCL',
      price: '£5',
      downloads: 156,
      rating: 4.6,
      type: 'Images',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header 
        title="Study Help" 
        onCreatePost={() => setShowCreateModal(true)}
      />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'questions'
                ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
            }`}
          >
            <HelpCircle size={16} className="inline mr-1" />
            Q&A Help
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'notes'
                ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
            }`}
          >
            <BookOpen size={16} className="inline mr-1" />
            Study Notes
          </button>
        </div>

        {/* Questions Tab */}
        {activeTab === 'questions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Questions</h3>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {questions.map((question) => (
              <div key={question.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{question.author.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white">{question.author}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">• {question.university}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">• {question.timestamp}</span>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mb-2">
                        {question.subject}
                      </span>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{question.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{question.content}</p>
                    </div>
                    {question.image && (
                      <img src={question.image} alt="Question" className="w-full h-32 object-cover rounded-lg mb-3" />
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <button className="flex items-center space-x-1 hover:text-purple-500 transition-colors">
                        <MessageCircle size={14} />
                        <span>{question.answers} answers</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <span>❤️ {question.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Study Notes Tab */}
        {activeTab === 'notes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Study Notes</h3>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {studyNotes.map((note) => (
              <div key={note.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex">
                  <img src={note.image} alt={note.title} className="w-20 h-20 object-cover" />
                  <div className="p-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full mb-1">
                          {note.subject}
                        </span>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{note.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">by {note.author} • {note.university}</p>
                        <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Upload size={12} className="mr-1" />
                            {note.downloads}
                          </span>
                          <span>⭐ {note.rating}</span>
                          <span className="text-green-600 font-bold">{note.price}</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation />
      
      <CreateStudyPostModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        activeTab={activeTab}
      />
    </div>
  );
};

export default StudyHelp;
