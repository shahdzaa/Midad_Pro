import Image from "next/image";

interface CourseCardProps {
  title: string;
  price: string;
  rating: number;
  image: string;
}

export default function CourseCard({
  title,
  price,
  rating,
  image,
}: CourseCardProps) {
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
    </div>
  );
}
