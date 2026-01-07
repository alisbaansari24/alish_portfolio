import React from 'react'
import photo from '../assets/Image/myimg.png'
export default function Hero() {
    return (
        <section id='home' className="pt-32 pb-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        Hi, I’m <span className="text-purple-400">Alisba Ansari</span>
                    </h2>
                    <p className="text-xl text-cyan-400 mt-2">Front-End Developer</p>
                    <p className="mt-6 text-gray-400 max-w-md">
                        I build responsive and user‑friendly web applications using React,
                        Tailwind CSS and modern JavaScript.
                    </p>
                    <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold">
                        Contact Me
                    </button>
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
