import React from 'react'
import photo from '../assets/Image/myimg.png'
export default function Hero() {
    return (
        <section id='home' className="pt-32 pb-24 relative overflow-hidden">
            <div className=" mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Hi, I’m <span className="text-purple-400">Alisba Ansari</span>
                    </h2>
                    <p className="text-xl text-cyan-400 mt-2">Front-End Developer</p>
                    <p className="mt-6 text-gray-400 max-w-lg md:text-left text-justify">
                        Frontend Developer with 1.7+ years of experience in building responsive and interactive web applications using React.js, JavaScript, Tailwind CSS, and CSS. Experienced in developing animation-rich web projects, creating reusable UI components, integrating REST APIs, and optimizing website performance. Skilled in building modern, user-friendly interfaces with a strong focus on responsiveness, smooth animations, and clean user experience. Also has self-learned experience in React Native with 3 mobile application projects.
                    </p>
                    <a href="#contact">
                        <button className="cursor-pointer mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold">
                            Contact Me
                        </button>
                    </a>

                </div>
                <div className="flex justify-center">
                    <img
                        src={photo}
                        alt="profile"
                        onContextMenu={(e) => e.preventDefault()}
                        className="shadow-purple-500/40 shadow-2xl
      rounded-full w-xs 
      transition-all duration-500 ease-out
      hover:scale-105
      hover:shadow-purple-500/40
      hover:shadow-2xl
    "
                    />
                </div>

            </div>
        </section>
    )
}
