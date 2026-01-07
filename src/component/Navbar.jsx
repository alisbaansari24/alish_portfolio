import React from "react";

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          onClick={() => handleScroll("home")}
          className="text-xl font-bold text-purple-400 cursor-pointer"
        >
          Alisba Amsari
        </h1>

        <ul className="flex gap-8 text-sm text-gray-300">
          <li
            onClick={() => handleScroll("home")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Home
          </li>

          <li
            onClick={() => handleScroll("about")}
            className="hover:text-purple-400 cursor-pointer"
          >
            About
          </li>

          <li
            onClick={() => handleScroll("skills")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Skills
          </li>
           <li
            onClick={() => handleScroll("projects")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Projects
          </li>

          <li
            onClick={() => handleScroll("contact")}
            className="hover:text-purple-400 cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
