import React from 'react'

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
                        src="https://via.placeholder.com/350"
                        alt="profile"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}
