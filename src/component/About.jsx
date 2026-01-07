import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 relative">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-pink-500/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center px-5 sm:px-6">
        
        <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h3>

        <p className="mt-6 sm:mt-8 text-gray-300 leading-relaxed text-base sm:text-md">
          I am a{" "}
          <span className="text-white font-medium">Front-End Developer</span>{" "}
          with strong hands-on experience in{" "}
          <span className="text-cyan-400">
            HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS
          </span>.
          I specialize in building responsive, visually appealing, and
          user-focused web applications.
        </p>

        <p className="mt-5 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-sm max-w-3xl mx-auto">
          My day-to-day work involves creating reusable React components,
          managing application state, integrating APIs, and optimizing UI
          performance. I focus on clean code, scalability, and smooth user
          interactions across devices.
        </p>

        <p className="mt-5 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-sm max-w-3xl mx-auto">
          In addition to web development, I have experience with{" "}
          <span className="text-cyan-400">React Native</span>, allowing me to
          build cross-platform mobile applications with a consistent user
          experience. I am always eager to learn new technologies and improve
          my development and UI/UX skills.
        </p>

      </div>
    </section>
  );
}
