import Image from "next/image";
import Hero from '../components/Hero';
import CoursesSection from '../components/CoursesSection';
import CoursesCategory from '../components/CoursesCategory';
import Testimonials from '../components/Testimonials';  
export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Hero />
      <CoursesSection />
      <CoursesCategory />
      <Testimonials />
    </div>
  );
}