
import React from 'react';
import { MapPin, DollarSign, User, MessageCircle } from 'lucide-react';

interface RoommateCardProps {
  name: string;
  university: string;
  year: string;
  budget: string;
  location: string;
  bio: string;
  image?: string;
  tags: string[];
}

const RoommateCard = ({ 
  name, 
  university, 
  year, 
  budget, 
  location, 
  bio, 
  image, 
  tags 
}: RoommateCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-2xl object-cover" />
          ) : (
            <User size={24} className="text-white" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{university} • {year}</p>
          
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <DollarSign size={14} />
              <span>{budget}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mt-4 leading-relaxed">{bio}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-3 mt-6">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
          Connect
        </button>
        <button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
          <MessageCircle size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default RoommateCard;
