"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  title: string;
  price: string;
  rating: number;
  image: string;

  // الرابط/الـ slug تبع صفحة التفاصيل
  href: string; // مثال: "/courses/web-development"
}

export default function CourseCard({
  title,
  price,
  rating,
  image,
  href,
}: CourseCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-40 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover rounded-lg"
        />
      </div>

      <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>

      <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
        <span>⭐ {rating}</span>
        <span className="text-purple-600 font-bold">{price}</span>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={() => router.push(href)}
        className="mt-4 w-full rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition"
      >
        View details
      </button>
    </div>
  );
}
