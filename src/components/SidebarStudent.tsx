import { Home, BookOpen, User, Settings } from 'lucide-react';
import Link from 'next/link';

export default function SidebarStudent() {
  return (
    <aside className="w-64 bg-purple-600 min-h-screen text-white p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Masar</h1>
      </div>
      
      <nav className="space-y-2">
        <Link 
          href="/student" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>
        
        <Link 
          href="/student/courses" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          <BookOpen size={20} />
          <span>My Courses</span>
        </Link>
        
        <Link 
          href="/student/profile" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-500 transition"
        >
          <User size={20} />
          <span>Profile</span>
        </Link>
        
        <Link 
          href="/student/settings" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}