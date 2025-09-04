import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="min-h-[75vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 md:px-6 relative"
    >
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
        Hi, I'm Quadri
      </h1>

      {/* Role / Subtitle */}
      <p className="text-base sm:text-lg md:text-2xl drop-shadow break-words max-w-xl">
        Junior Developer | Frontend (React, Vite, Java) | Telecom Engineering
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform duration-300 text-center"
        >
          View My Work
        </a>
        <a
          href="/CV.pdf"
          download
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition-transform duration-300 text-center"
        >
          Download CV
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-6 text-2xl justify-center">
        <a
          href="https://github.com/Ayotundequest"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/quadri-akinjole-a31519238"
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
        className="absolute bottom-4 md:bottom-8 text-3xl animate-bounce hover:text-gray-200 transition-colors"
      >
        ⬇
      </a>
    </section>
  );
}
