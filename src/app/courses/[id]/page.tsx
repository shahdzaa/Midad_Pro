import Breadcrumb from "@/components/CourseComponent/Breadcrumb";
import CourseHero from "@/components/CourseComponent/CourseHero";
import CourseSidebar from "@/components/CourseComponent/CourseSidebar";
import Curriculum from "@/components/CourseComponent/Curriculum";
import WhatYouLearn from "@/components/CourseComponent/WhatYouLearn";

type Course = any;

async function getCourse(id: number): Promise<Course | null> {
  try {
    const res = await fetch(`http://127.0.0.1:4000/courses/${id}`, {
      cache: "no-store",
    });

    console.log("API STATUS:", res.status);

    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return null;
  }
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const idNum = parseInt(resolvedParams.id, 10);

  const course = await getCourse(idNum);
  console.log(course);

  if (!course) {
    return (
      <div className="p-10">
        <h1 className="font-bold text-xl">Course not found from API</h1>
        <p className="text-gray-600 mt-2">
          I tried: http://127.0.0.1:4000/courses/{idNum}
        </p>
      </div>
    );
  }

  const title = course.title ?? "Course";

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Section */}
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Courses", href: "/courses" },
            { label: title },
          ]}
        />
      </div>

      {/* Course Hero Section */}
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <CourseHero
          title={title}
          subtitle={course.subtitle}
          description={course.description ?? "Course details are coming soon."}
          rating={course.rating ?? 0}
          enrolledText={course.enrolledText ?? "Enrolled students"}
          image={course.image ?? "/placeholder-course.jpg"}
          imageAlt={course.imageAlt ?? title}
          primaryCta={course.primaryCta ?? { label: "Enroll now", href: "#" }}
          secondaryCta={course.secondaryCta}
          className="rounded-2xl overflow-hidden shadow-lg"
        />
      </div>

      {/* Main Content Section (What You Learn, Curriculum, Sidebar) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
          {/* Left Column: What You Learn & Curriculum */}
          <div className="space-y-8">
            <WhatYouLearn items={course.whatYouLearn ?? []} />
            <Curriculum modules={course.curriculum ?? []} />
          </div>

          {/* Right Column: Course Sidebar */}
          <div>
            <CourseSidebar
              features={course.features ?? []}
              ctaHref={course.ctaHref ?? "#"}
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
