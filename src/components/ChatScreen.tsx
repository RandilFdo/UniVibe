
import React, { useState } from 'react';
import { ArrowLeft, Send, Image, Smile } from 'lucide-react';
import { Input } from './ui/input';

interface Message {
  id: string;
  content: string;
  sender: 'me' | 'other';
  timestamp: string;
  type: 'text' | 'image';
}

interface ChatScreenProps {
  matchName: string;
  onBack: () => void;
}

const ChatScreen = ({ matchName, onBack }: ChatScreenProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hey! Thanks for connecting! 😊',
      sender: 'other',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: '2',
      content: 'Hi! So excited to chat about the apartment!',
      sender: 'me',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: '3',
      content: 'When would be a good time to meet up and see the place?',
      sender: 'other',
      timestamp: '10:35 AM',
      type: 'text'
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: message,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate other person typing and responding
      setTimeout(() => {
        const responses = [
          "That sounds great!",
          "Perfect timing! 😄",
          "I'm free tomorrow if that works?",
          "Awesome! Can't wait!",
          "Let me check my schedule..."
        ];
        const response: Message = {
          id: (Date.now() + 1).toString(),
          content: responses[Math.floor(Math.random() * responses.length)],
          sender: 'other',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'text'
        };
        setMessages(prev => [...prev, response]);
      }, 1000 + Math.random() * 2000);
    }
  };

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
        <button onClick={onBack} className="mr-3">
          <ArrowLeft size={24} className="text-gray-700 dark:text-gray-300" />
        </button>
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-semibold">
            {matchName.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold dark:text-white">{matchName}</h3>
          <p className="text-xs text-gray-500">Active now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-2xl ${
                msg.sender === 'me'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className={`text-xs mt-1 ${
                msg.sender === 'me' ? 'text-white/70' : 'text-gray-500'
              }`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <Image size={20} />
          </button>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <Smile size={20} />
          </button>
          <button
            onClick={sendMessage}
            disabled={!message.trim()}
            className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full disabled:opacity-50"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
