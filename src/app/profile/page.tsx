import ProfileHeader from "@/components/StudentComponent/ProfileHeaderStudent";
import CourseCard from "@/components/StudentComponent/CourseCardStudent";
import AssessmentCard from "@/components/StudentComponent/AssessmentCardStudent";
import RecommendedCard from "@/components/StudentComponent/RecommendedCardStudent";

async function getStudentData() {
  const base = "http://localhost:4000";

  const [studentRes, coursesRes, assessmentsRes, recommendedRes] =
    await Promise.all([
      fetch(`${base}/students`, { cache: "no-store" }),
      fetch(`${base}/studentCourses`, { cache: "no-store" }),
      fetch(`${base}/assessments`, { cache: "no-store" }),
      fetch(`${base}/recommendedCourses`, { cache: "no-store" }),
    ]);

  if (!studentRes.ok) throw new Error("Failed to load student");

  return {
    student: await studentRes.json(),
    myCourses: coursesRes.ok ? await coursesRes.json() : [],
    assessments: assessmentsRes.ok ? await assessmentsRes.json() : [],
    recommended: recommendedRes.ok ? await recommendedRes.json() : [],
  };
}

export default async function ProfilePage() {
  const { student, myCourses, assessments, recommended } = await getStudentData();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
        {/* Header */}
        <ProfileHeader student={student[0]} />

        {/* My Courses */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">My Courses</h2>
            <a href="/courses" className="text-purple-600 hover:underline">
              See all &gt;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.map((c: any) => (
              <CourseCard key={c.id} title={c.title} progress={c.progress} status={c.status} />
            ))}
          </div>
        </section>

        {/* Assessments History */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Assessments History</h2>
            <a href="/assessments" className="text-purple-600 hover:underline">
              See all &gt;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((a: any) => (
              <AssessmentCard
                key={a.id}
                title={a.title}
                date={new Date(a.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
                score={a.score}
                color={a.color}
              />
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recommended For You</h2>
            <a href="/courses" className="text-purple-600 hover:underline">
              See all &gt;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((r: any) => (
              <RecommendedCard
                key={r.id}
                title={r.title}
                instructor={r.instructor}
                rating={r.rating}
                students={r.students}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
