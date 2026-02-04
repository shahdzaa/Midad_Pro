import CourseCard from "./CourseCard";

async function getCourses() {
  try {
    const res = await fetch("http://localhost:4000/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await res.json();
    return data.slice(-8 ).reverse();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export default async function CoursesSection() {
  const courses = await getCourses();

  return (
    <section className="px-10 py-20">
      <h2 className="text-2xl font-bold mb-6">
        Trending Courses Across Diverse Fields
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.length === 0 ? (
          <p className="text-gray-500">No courses found.</p>
        ) : (
          courses.map((course: any) => (
            <CourseCard
              key={course.id}
              title={course.title}
              price={`$${course.price}`}
              rating={course.rating}
              image={course.image}
              href={`/courses/${  course.id}`}
            />
          ))
        )}
      </div>
    </section>
  );
}
