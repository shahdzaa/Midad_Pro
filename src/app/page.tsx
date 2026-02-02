import Testimonials from "@/components/Testimonials";
import CoursesCategory from "@/components/CoursesCategory";
import CoursesSection from "@/components/CoursesSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
       <Hero />
        <CoursesSection />
        <CoursesCategory />
        <Testimonials />
    </div>
  );
}
