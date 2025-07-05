
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Settings, Edit, MapPin, Calendar, GraduationCap, Camera, Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editData, setEditData] = useState({
    username: user?.username || '',
    bio: user?.bio || '',
    university: user?.university || '',
    year: user?.year || ''
  });

  const handleSaveProfile = () => {
    updateProfile(editData);
    setShowEditProfile(false);
  };

  const stats = [
    { label: 'Posts', value: 12, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Matches', value: 8, color: 'text-pink-600 dark:text-pink-400' },
    { label: 'Likes', value: 156, color: 'text-blue-600 dark:text-blue-400' }
  ];

  const settingsItems = [
    { label: 'Edit Profile', icon: Edit, action: () => setShowEditProfile(true) },
    { label: 'Dark Mode', icon: isDarkMode ? Sun : Moon, action: toggleDarkMode, isToggle: true },
    { label: 'Privacy Settings', icon: Settings },
    { label: 'Notification Preferences', icon: Settings },
    { label: 'University Verification', icon: Settings },
    { label: 'Safety & Support', icon: Settings },
    { label: 'Terms of Service', icon: Settings },
    { label: 'About UniVibe', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header title="Profile" showSearch={false} />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.username} className="w-full h-full rounded-2xl object-cover" />
                ) : (
                  <span className="text-white font-bold text-2xl">
                    {user?.username?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <button className="absolute -bottom-2 -right-2 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors">
                <Camera size={14} />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user?.username}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user?.bio || 'Computer Science Student'}</p>
            </div>
            <button 
              onClick={() => setShowEditProfile(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Edit size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <GraduationCap size={16} />
              <span>{user?.university} • {user?.year}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin size={16} />
              <span>Cambridge, MA</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Calendar size={16} />
              <span>Joined September 2024</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Settings Menu */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Settings</h3>
          </div>
          
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {settingsItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={16} className="text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                </div>
                {item.isToggle && (
                  <div className={`w-12 h-6 rounded-full transition-colors ${
                    isDarkMode ? 'bg-purple-600' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                    } mt-0.5`} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sign Out */}
        <button 
          onClick={logout}
          className="w-full mt-6 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 py-3 rounded-xl font-semibold hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
        >
          Sign Out
        </button>
      </div>

      <BottomNavigation />

      {/* Edit Profile Modal */}
      <Dialog open={showEditProfile} onOpenChange={setShowEditProfile}>
        <DialogContent className="dark:bg-gray-900 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Edit Profile</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <Input
              placeholder="Username"
              value={editData.username}
              onChange={(e) => setEditData({...editData, username: e.target.value})}
              className="dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <Input
              placeholder="Bio"
              value={editData.bio}
              onChange={(e) => setEditData({...editData, bio: e.target.value})}
              className="dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <Input
              placeholder="University"
              value={editData.university}
              onChange={(e) => setEditData({...editData, university: e.target.value})}
              className="dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <select
              value={editData.year}
              onChange={(e) => setEditData({...editData, year: e.target.value})}
              className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Year</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>

            <div className="flex space-x-2 pt-4">
              <button
                onClick={() => setShowEditProfile(false)}
                className="flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
