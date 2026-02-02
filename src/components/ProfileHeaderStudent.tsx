import { Bell } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        <div className="flex items-center gap-4">
          <Bell className="text-gray-600 cursor-pointer" />
          <span className="text-gray-600">date_ _</span>
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-teal-700"></div>
        <div>
          <h3 className="text-xl font-bold">NAME</h3>
          <p className="text-gray-600">email.com</p>
          <p className="text-gray-800 font-medium">Major...</p>
        </div>
      </div>
    </div>
  );
}