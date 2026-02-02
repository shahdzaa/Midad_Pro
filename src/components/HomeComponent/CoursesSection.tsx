"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import fallbackCourses from "../../data/courses";

export default function CoursesSection() {
  const [courses, setCourses] = useState(fallbackCourses);

  useEffect(() => {
    let mounted = true;

    async function fetchCourses() {
      try {
        const res = await fetch("http://localhost:4000/courses");
        if (!res.ok) return;
        const data = await res.json();
        if (mounted && Array.isArray(data) && data.length > 0) {
          setCourses(data);
        }
      } catch (e) {
        // silent fallback to local data
      }
    }

    fetchCourses();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="px-10 py-20">
      <h2 className="text-2xl font-bold mb-6">
        Trending Courses Across Diverse Fields
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.length === 0 ? (
          <p className="text-gray-500">No courses found.</p>
        ) : (
          courses.map((course) => (
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
