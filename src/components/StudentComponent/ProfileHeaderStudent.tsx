import { Bell } from "lucide-react";

type Student = {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  track: string;
  joinDate: string; // "YYYY-MM-DD"
};

type ProfileHeaderProps = {
  student: Student;
};

function formatJoinDate(dateStr: string) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export default function ProfileHeader({ student }: ProfileHeaderProps) {
  const joinDateText = formatJoinDate(student.joinDate);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="text-gray-600 hover:text-gray-800"
          >
            <Bell className="cursor-pointer" />
          </button>

          <span className="text-gray-600">date_{joinDateText}_</span>

          {student.avatar ? (
            <img
              src={student.avatar}
              alt={`${student.name} avatar`}
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-400" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {student.avatar ? (
          <img
            src={student.avatar}
            alt={`${student.name} avatar`}
            className="w-24 h-24 rounded-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-teal-700" />
        )}

        <div>
          <h3 className="text-xl font-bold">NAME: {student.name}</h3>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-gray-800 font-medium">{student.track}</p>
        </div>
      </div>
    </div>
  );
}
