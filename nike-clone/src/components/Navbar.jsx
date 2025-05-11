import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <img src={logo} className="w-24" alt="myStyle" />

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 uppercase font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-2xl hover:bg-red-700 transition">
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md uppercase font-medium gap-4 py-4">
          <a href="#">Home</a>
          <a href="#">Location</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button className="bg-red-600 text-white px-5 py-2 rounded-2xl hover:bg-red-700 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
