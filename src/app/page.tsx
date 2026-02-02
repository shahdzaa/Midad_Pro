import Hero from "../components/HomeComponent/Hero";
import CoursesSection from "../components/HomeComponent/CoursesSection";
import CoursesCategory from "../components/HomeComponent/CoursesCategory";
import Testimonials from "../components/HomeComponent/Testimonials";

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
