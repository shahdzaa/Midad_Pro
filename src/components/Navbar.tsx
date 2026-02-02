<<<<<<< HEAD

import Link from "next/link";
=======
import Link from 'next/link';

>>>>>>> 76b9e632c978548b34b797b233a8d927f52b7533
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">Masar</h1>
        </Link>
      </div>

<<<<<<< HEAD
      <ul className="hidden md:flex gap-8 text-gray-600">
        <li>Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>Our Service</li>
        <li>Profile</li>
=======
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li>
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-purple-600 transition-colors">About us</Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-purple-600 transition-colors">Courses</Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-purple-600 transition-colors">Our Service</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-purple-600 transition-colors">Contact us</Link>
        </li>
>>>>>>> 76b9e632c978548b34b797b233a8d927f52b7533
      </ul>

      <div className="flex items-center">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium">
          Sign in
        </button>
      </div>
    </nav>
  );
}