import { Star } from 'lucide-react';

interface RecommendedCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: string;
}

export default function RecommendedCard({ title, instructor, rating, students }: RecommendedCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
      
      <div className="p-4">
        <h4 className="font-bold text-base mb-2 line-clamp-2">{title}</h4>
        <p className="text-gray-600 text-sm mb-4">{instructor}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">{students}</span>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}