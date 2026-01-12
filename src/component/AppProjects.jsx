import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import img1 from '../assets/Image/food1.png'
import img2 from '../assets/Image/1.jpeg'
import img3 from '../assets/Image/2.jpeg'
import img4 from '../assets/Image/3.jpeg'
import img5 from '../assets/Image/4.jpeg'
import img6 from '../assets/Image/5.jpeg'
import img7 from '../assets/Image/6.jpeg'

import exp2 from '../assets/Image/exp1.jpeg'
import exp1 from '../assets/Image/exp2.jpeg'
import exp3 from '../assets/Image/exp3.jpeg'
import exp4 from '../assets/Image/exp4.jpeg'
import exp5 from '../assets/Image/exp5.jpeg'
import exp6 from '../assets/Image/exp6.jpeg'
import exp7 from '../assets/Image/exp7.jpeg'

import emergency1 from '../assets/Image/emgncy1.jpeg'


const projects = [
    {
        title: "Food Delivery App",
        description:
            "A modern food ordering app featuring restaurant browsing,enabling users to browse menus, cart functionality, secure authentication, and order history management.",

        tech: ["React Native", "Tailwind CSS"],
        screens: [img1, img2, img3, img4, img5, img6, img7],
        apk: "/apk/food.apk",
    },
    {
        title: "Expense Tracker App",
        description:
            "A mobile expense tracking application that helps users monitor daily spending with category-wise analytics and detailed monthly insights.",
        tech: ["React Native", "Charts"],

        tech: ["React Native", "Charts"],
        screens: [exp1, exp2, exp3, exp4, exp5, exp6, exp7],
        apk: "/apk/expense.apk",
    },
    {
        title: "Emergency Assist",
        description:
            "An emergency assistance app that allows users to quickly send SOS alerts, share live location, and contact emergency services during critical situations.",
        tech: ["React Native", "Geolocation"],
        screens: [emergency1],
        apk: "/apk/emergency-assist.apk",
    }

];

export default function AppProjects() {
    return (
        <section
            id="projects"
            className="min-h-screen  text-white px-6 py-24"
        >
            {/* Heading */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    App Projects
                </h2>
                <p className="text-gray-400 mt-3">
                    React Native apps with real-world UI & functionality
                </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-28">
                {projects.map((project, index) => (
                    <ProjectShowcase key={index} project={project} reverse={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}

/* ---------------- Project Showcase ---------------- */

function ProjectShowcase({ project, reverse }) {
    const [current, setCurrent] = useState(0);

    const next = () =>
        setCurrent((prev) => (prev + 1) % project.screens.length);

    const prev = () =>
        setCurrent((prev) =>
            prev === 0 ? project.screens.length - 1 : prev - 1
        );

    return (
        <div
            className={`flex flex-col-reverse lg:flex-row items-center gap-16 ${reverse ? "lg:flex-row-reverse" : ""
                }`}
        >
            {/* Content */}
            <div className="flex-1">
                <h3 className="text-3xl font-semibold text-purple-400 mb-4">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed md:text-left text-justify">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-4 py-1 text-sm rounded-full border border-purple-500/30 text-purple-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* <a
                    href={project.apk}
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                    <FaDownload />
                    Download APK
                </a> */}
            </div>

            {/* Phone Slider */}
            <div className="flex-1 flex justify-center">
                <div className="relative w-[260px] h-[510px] rounded-[2rem] border-4 border-purple-500/40 bg-black shadow-2xl overflow-hidden">
                    <img
                        src={project.screens[current]}
                        alt="App screen"
                        className="w-full h-full object-cover rounded-[2rem]"
                    />

                    {/* Realme Glass Camera */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black/90 backdrop-blur-sm shadow-md"></div>


                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-500 transition cursor-pointer"
                    >
                        ‹
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-500 transition cursor-pointer"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
}
