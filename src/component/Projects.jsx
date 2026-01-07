import React from 'react'
import img1 from '../assets/Image/ourmicrolife.png'
import img2 from '../assets/Image/rushbaskets.png'
import img3 from '../assets/Image/path4U.png'
import img4 from '../assets/Image/metrobuddy.png'
import img5 from '../assets/Image/growlotus.png'

export default function Projects() {
    const projects = [
        {
            name: "Ourmicrolife",
            img: img1,
            description: "OurMicroLife is a trusted online marketplace that connects customers with a wide range of quality products and services, focusing on fast delivery, easy payments, and a seamless shopping experience. It serves as a reliable platform where users can explore, select, and purchase items with confidence, backed by excellent customer support and fulfillment services.", right: false
        },
        {
            name: "Rushbaskets", img: img2,
            description: 'RushBaskets is an online grocery and essentials delivery platform designed to provide users with a fast, convenient, and reliable shopping experience. It allows customers to browse daily-use products, place orders easily, and receive items at their doorstep with minimal effort.',
            right: true
        },
        {
            name: "Path4U",
            img: img3,
            description: 'Path4U is an education-focused digital platform developed to support students in exploring career paths, accessing learning resources, and navigating academic and professional growth opportunities. Designed with accessibility in mind, Path4U aims to make educational guidance and career planning available to students across India, regardless of their economic background.',
            right: false
        },
        {
            name: "Metrobuddy", img: img4,
            description: 'MetroBuddy is a dynamic business discovery platform designed to connect users with trusted local businesses, services, and professionals across a wide range of categories. It enables users to explore nearby restaurants, spas, contractors, education centers, and more with verified listings and helpful details.'
            , right: true
        },
        {
            name: "Growlotus", img: img5,

            description: 'Grow Lotus Fintech’s offerings include a range of corporate business loans, SME financing support, and financial advisory assistance, all aimed at simplifying access to essential capital for business expansion and stability. The company operates with a customer-first mindset and strives to streamline financial services through a user-friendly experience.',
            right: false
        },
    ];
    return (
        <section id='projects' className="relative py-36 bg-gradient-to-b from-[#0b021a] via-[#12052b] to-[#090114]">
            <div className="max-w-6xl mx-auto px-6 space-y-40">
                <h3 className="text-3xl font-semibold text-purple-400 text-center">
                    Recent Work
                    <p className='text-sm text-white'>A collection of projects I've worked on</p>
                </h3>

                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`relative flex ${project.right ? "justify-end" : "justify-start"
                            }`}
                    >
                        {/* IMAGE */}
                        <div className="w-[620px] h-[360px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full "
                            />
                        </div>

                        {/* CARD */}
                        <div
                            className={`
                absolute top-1/2 -translate-y-1/2
                w-[420px]
                bg-[#1a0b2e]/90
                backdrop-blur-xl
                border border-white/10
                rounded-xl
                px-6 py-5
                shadow-xl
                ${project.right ? "left-0 -translate-x-16" : "right-0 translate-x-16"}
              `}
                        >
                            <p className="text-xs tracking-widest text-cyan-400 uppercase mb-2">
                                Featured Project
                            </p>

                            <h3 className="text-xl font-semibold mb-3">
                                {project.name}
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-400">
                                {project.description}
                            </p>

                            <div className="flex gap-4 mt-5 cursor-pointer ml-auto text-blue-500">
                                <a href='https://www.ourmicrolife.com/' className="">Visit</a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
