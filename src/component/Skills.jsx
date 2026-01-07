import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "React Native", icon: <TbBrandReactNative />, color: "text-cyan-300" },
  ];

  return (
    <section id="skills" className="py-10 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-pink-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h3>

        <p className="mt-4 text-gray-400 text-sm">
          Technologies I use to build modern web & mobile apps
        </p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="
                group flex flex-col items-center justify-center
                p-6 rounded-2xl
                bg-white/10 backdrop-blur
                border border-white/20
                hover:scale-110
                hover:border-cyan-400/60
                transition-all duration-300
                shadow-lg
              "
            >
              <div
                className={`text-4xl mb-3 ${skill.color} group-hover:rotate-12 transition`}
              >
                {skill.icon}
              </div>

              <span className="text-sm font-medium tracking-wide text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
