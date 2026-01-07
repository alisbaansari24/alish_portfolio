import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          onClick={() => handleScroll("home")}
          className="text-xl font-bold text-purple-400 cursor-pointer"
        >
          Alisba Ansari
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item)}
              className="hover:text-purple-400 cursor-pointer capitalize"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-300">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className="hover:text-purple-400 cursor-pointer text-lg capitalize"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
