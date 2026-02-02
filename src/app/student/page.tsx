import Sidebar from '@/components/SidebarStudent';
import CourseCard from '@/components/CourseCardStudent'
import AssessmentCard from '@/components/AssessmentCardStudent'
import RecommendedCard from '@/components/RecommendedCardStudent';

export default function StudentPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* My Courses */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">My Courses</h2>
            <a href="#" className="text-purple-600 hover:underline">See all &gt;</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard title="Intro to Python" progress={100} status="completed" />
            <CourseCard title="PHP" progress={65} status="in-progress" />
            <CourseCard title="Web Development" progress={0} status="enrolled" />
          </div>
        </section>
        
        {/* Assessments History */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Assessments History</h2>
            <a href="#" className="text-purple-600 hover:underline">See all &gt;</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AssessmentCard title="Mid Exam 1" date="July 22, 2025" score={90} color="purple" />
            <AssessmentCard title="Final Exam 1" date="Nov 15, 2025" score={87} color="orange" />
            <AssessmentCard title="Python Quiz" date="Jan 22, 2026" score={90} color="green" />
          </div>
        </section>
        
        {/* Recommended */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Recommended For You</h2>
            <a href="#" className="text-purple-600 hover:underline">See all &gt;</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecommendedCard
              title="The Complete 2023 PHP Full Stack Web Developer Bootcamp"
              instructor="Sarah Lee"
              rating={4.9}
              students="20,459+"
            />
            <RecommendedCard
              title="CSS, Bootstrap, JavaScript, Web Development Course"
              instructor="Sarah Lee"
              rating={4.9}
              students="2,500+"
            />
            <RecommendedCard
              title="Internet and Web Development Fundamentals"
              instructor="Sarah Lee"
              rating={4.9}
              students="20,459+"
            />
          </div>
        </section>
      </main>
    </div>
  );
}