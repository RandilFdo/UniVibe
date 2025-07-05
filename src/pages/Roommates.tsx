
import React from 'react';
import Header from '../components/Header';
import RoommateCard from '../components/RoommateCard';
import BottomNavigation from '../components/BottomNavigation';
import { Plus } from 'lucide-react';

const Roommates = () => {
  const roommates = [
    {
      name: "Emma Johnson",
      university: "MIT",
      year: "Junior",
      budget: "$800-1000/mo",
      location: "Cambridge",
      bio: "CS major looking for a clean, quiet roommate. I love cooking and movie nights!",
      tags: ["Non-smoker", "Pet-friendly", "Clean", "Quiet"]
    },
    {
      name: "David Chen",
      university: "MIT",
      year: "Sophomore", 
      budget: "$600-800/mo",
      location: "Near Campus",
      bio: "Engineering student, early riser, gym enthusiast. Looking for someone responsible.",
      tags: ["Early riser", "Gym", "Study buddy", "Organized"]
    },
    {
      name: "Sophia Williams",
      university: "Harvard",
      year: "Senior",
      budget: "$900-1200/mo",
      location: "Harvard Square",
      bio: "Pre-med student who loves plants and coffee. Need someone who respects study time.",
      tags: ["Plant lover", "Coffee addict", "Studious", "Respectful"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Find Roommates" />
      
      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Available Roommates</h2>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Plus size={20} />
          </button>
        </div>
        
        {roommates.map((roommate, index) => (
          <RoommateCard key={index} {...roommate} />
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Roommates;
