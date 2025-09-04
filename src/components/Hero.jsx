// src/components/Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="min-h-[75vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 relative"
    >
      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Hi, I'm Quadri
      </h1>

      {/* Role / Subtitle */}
      <p className="text-lg md:text-2xl drop-shadow whitespace-nowrap">
        Junior Developer | Frontend (React, Vite, Java) | Telecom Engineering
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform duration-300"
        >
          View My Work
        </a>
        <a
          href="/CV.pdf"
          download
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition-transform duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 right-6 text-3xl animate-bounce hover:text-gray-200 transition-colors"
      >
        ⬇
      </a>
    </section>
  );
}
