"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  slug: string;
}

export default function CoursesCategory() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/courses");
      const data: Course[] = await res.json();

      const uniqueCategories = [
        "All",
        ...Array.from(new Set(data.map((course) => course.category))),
      ];

      setCategories(uniqueCategories);
    }

    fetchData();
  }, []);

  return (
    <section className="px-10 py-20">
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={cat === "All" ? "/courses" : `/courses?category=${encodeURIComponent(cat)}`}
            className="px-4 py-2 rounded-full border hover:bg-purple-600 hover:text-white transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}
