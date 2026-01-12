import React from "react";
import img1 from "../assets/Image/ourmicrolife.png";
import img2 from "../assets/Image/rushbaskets.png";
import img3 from "../assets/Image/path4U.png";
import img4 from "../assets/Image/metrobuddy.png";
import img5 from "../assets/Image/growlotus.png";
import img6 from "../assets/Image/admissionKing.png";

export default function Projects() {
    const projects = [
        {
            name: "OurMicroLife",
            img: img1,
            tech: ["React.js", "Tailwind CSS", "Material UI", "Context API", "REST APIs"],
            description:
                "OurMicroLife is dynamic an e-commerce marketplace that provides a smooth and reliable shopping experience with fast delivery, secure payments, and a user-friendly interface. The platform focuses on performance, scalability, and seamless API-driven data handling.",
            right: false,
            link: "https://www.ourmicrolife.com/",
        },
        {
            name: "Rushbaskets",
            tech: ["React.js", "Tailwind CSS"],
            img: img2,
            description:
                "RushBaskets is an online grocery and essentials delivery platform that enables users to quickly browse products, manage their cart, and place orders through a clean and responsive interface. The application focuses on performance, usability, and a smooth shopping experience across devices.",

            right: true,
            link: "https://rushbaskets.com/",
        },
        {
            name: "Path4U",
            img: img3,
            tech: ["React.js", "Tailwind CSS"],
            description:
                "Path4U is an education-focused digital platform supporting students in exploring career paths and accessing learning resources.",
            right: false,
            link: "https://path4u.in/",
        },
        {
            name: "Metrobuddy",
            img: img4,
            tech: ["React.js", "Tailwind CSS", "Context API", "REST APIs"],
            description:
                "MetroBuddy is a digital platform that allows users to search and discover nearby businesses and service providers with a smooth, user-friendly browsing experience.",

            right: true,
            link: "https://metrobuddy.in/",
        },
        {
            name: "Growlotus",
            img: img5,
            tech: ["React.js", "Tailwind CSS", "Context", "REST APIs"],
            description:
                "Grow Lotus Fintech is a financial services platform providing corporate loans, SME financing, and advisory solutions through a secure and user-centric digital interface.",

            right: false,
            link: "https://growlotusfintech.com/",
        },
        {
            name: "Admission King",
            img: img6,
              tech: ["React.js", "Tailwind CSS" ],
            description:
                "Admission King is an educational platform helping students find courses, colleges, and career guidance, simplifying the admission process in India.",
            right: true, // alternating position
            link: "https://admissionking.com/",
        },
    ];

    return (
        <section
            id="projects"
            className="relative py-24 md:py-36 bg-gradient-to-b from-[#0b021a] via-[#12052b] to-[#090114]"
        >
            <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-24 md:space-y-40">

                {/* Heading */}
                <div className="text-center">
                    <h3 className="text-3xl font-semibold text-purple-400">
                        Web Projects
                    </h3>
                    <p className="text-sm text-gray-300 mt-2">
                        A collection of projects I've worked on
                    </p>
                </div>

                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`relative flex flex-col md:flex-row ${project.right ? "md:justify-end" : "md:justify-start"
                            }`}
                    >
                        {/* IMAGE */}
                        <div className="w-full md:w-[620px] h-[220px] sm:h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full object-fill"
                            />
                        </div>

                        {/* CARD */}
                        <div
                            className={`
                mt-6 md:mt-0
                md:absolute md:top-1/2 md:-translate-y-1/2
                w-full md:w-[420px]
                bg-[#1a0b2e]/90
                backdrop-blur-xl
                border border-white/10
                rounded-xl
                px-6 py-5
                shadow-xl
                ${project.right
                                    ? "md:left-0 md:-translate-x-16"
                                    : "md:right-0 md:translate-x-16"
                                }
              `}
                        >
                            <p className="text-xs tracking-widest text-cyan-400 uppercase mb-2">
                                Featured Project
                            </p>

                            <h3 className="text-xl font-semibold mb-3">
                                {project.name}
                            </h3>

                            <p className="md:text-justify text-justify text-sm leading-relaxed text-gray-400 mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tech?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full border border-purple-500/30 text-purple-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                            <div className="flex mt-5">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-cyan-400 hover:underline text-sm"
                                >
                                    Visit Website →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
