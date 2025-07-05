
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Settings, Edit, MapPin, Calendar, GraduationCap } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Profile" showSearch={false} />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SM</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">Sarah Miller</h2>
              <p className="text-gray-600">Computer Science</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Edit size={20} className="text-gray-600" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-600">
              <GraduationCap size={16} />
              <span>MIT • Junior</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={16} />
              <span>Cambridge, MA</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar size={16} />
              <span>Joined September 2024</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-pink-600">8</div>
            <div className="text-sm text-gray-600">Matches</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-600">Likes</div>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Settings</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {[
              'Edit Profile',
              'Privacy Settings', 
              'Notification Preferences',
              'University Verification',
              'Safety & Support',
              'Terms of Service',
              'About UniVibe'
            ].map((item) => (
              <button
                key={item}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-gray-700">{item}</span>
                <Settings size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Sign Out */}
        <button className="w-full mt-6 bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors">
          Sign Out
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Profile;
