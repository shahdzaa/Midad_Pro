"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CourseCard from "@/components/HomeComponent/CourseCard";

interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  slug: string;
}

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl = searchParams.get("category") || "All";

  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categoryFromUrl);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/courses");
      const data: Course[] = await res.json();

      setCourses(data);

      const uniqueCategories = [
        "All",
        ...Array.from(new Set(data.map((c) => c.category))),
      ];
      setCategories(uniqueCategories);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") return courses;
    return courses.filter((c) => c.category === activeCategory);
  }, [courses, activeCategory]);

  function handleCategoryClick(cat: string) {
    if (cat === "All") router.push("/courses");
    else router.push(`/courses?category=${encodeURIComponent(cat)}`);
  }

  return (
    <section className="px-10 py-20">
      <p className="text-sm font-semibold text-purple-700 mb-2">
            All Courses
      </p>

      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
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
            href={`/courses/${course.id}`}
          />
        ))}
      </div>
    </section>
  );
}
