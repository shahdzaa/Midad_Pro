"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  slug:string;
}

export default function CoursesCategory() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/courses");
      const data: Course[] = await res.json();

      setCourses(data);

      const uniqueCategories = [
        "All",
        ...Array.from(new Set(data.map((course) => course.category))),
      ];

      setCategories(uniqueCategories);
    }

    fetchData();
  }, []);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      <section className="px-10 py-20">
        <div className="flex gap-4 mb-10 flex-wrap justify-center ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === cat ? "bg-purple-600 text-white" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              price={`$${course.price}`}
              rating={course.rating}
              image={course.image}
              href={`/courses/${ course.id}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
