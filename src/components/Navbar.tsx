export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold text-purple-600">Masar</h1>

      <ul className="hidden md:flex gap-8 text-gray-600">
        <li>Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>Our Service</li>
        <li>Contact us</li>
      </ul>

      <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
        Sign in
      </button>
    </nav>
  );
}
