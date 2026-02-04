import Image from "next/image";

interface HeroImage {
  src: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  {
    src: "./images/hero1.jpg",
    alt: "Web Development",
  },
  {
    src: "./images/hero2.jpg",
    alt: "Team Learning",
  },
  {
    src: "./images/hero3.jpg",
    alt: "Data Science",
  },
  {
    src: "./images/hero4.jpg",
    alt: "Programming Setup",
  },
  {
    src: "./images/hero5.jpg",
    alt: "Online Learning",
  },
  {
    src: "./images/hero6.jpg",
    alt: "Ui/U",
  },
];

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 py-20">
      {/* Text */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold leading-tight">
          Empower Your Career with
          <span className="text-purple-600"> Practical Learning Paths</span>
        </h2>

        <p className="mt-4 text-gray-500">
          Flexible, affordable courses designed to help you achieve your goals.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">
            Start Your Exam
          </button>
          <a
              href="/courses"
              className="border px-6 py-3 rounded-full"
            >
              Browse Courses
            </a>
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-3 gap-4">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-40"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              unoptimized
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
