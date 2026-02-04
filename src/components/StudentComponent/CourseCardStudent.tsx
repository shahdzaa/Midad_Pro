interface CourseCardProps {
  title: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'enrolled';
}

export default function CourseCard({ title, progress, status }: CourseCardProps) {
  const getBgColor = () => {
    if (status === 'completed') return 'bg-blue-100';
    return 'bg-white';
  };
  
  const getProgressColor = () => {
    if (status === 'completed') return 'bg-blue-500';
    if (status === 'in-progress') return 'bg-orange-500';
    return 'bg-gray-400';
  };
  
  const getStatusText = () => {
    if (status === 'completed') return 'Completed';
    if (status === 'in-progress') return 'In progress';
    return 'Enrolled';
  };

  return (
    <div className={`${getBgColor()} p-6 rounded-xl shadow-sm border border-gray-200`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="mb-3">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`${getProgressColor()} h-3 rounded-full transition-all`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">{getStatusText()}</span>
        <span className="text-gray-900 font-bold">{progress}%</span>
      </div>
    </div>
  );
}