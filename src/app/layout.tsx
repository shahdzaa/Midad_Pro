import type { Metadata } from "next";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CoursesSection from '../components/CoursesSection';
import CoursesCategory from '../components/CoursesCategory';
import Testimonials from '../components/Testimonials';  
import "./globals.css";
// Removed Google font import to avoid network fetch during build


export const metadata: Metadata = {
  title: "MASAR ",
  description: "APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {/* <Hero />
        <CoursesSection />
        <CoursesCategory />
        <Testimonials /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
