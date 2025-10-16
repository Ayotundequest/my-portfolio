import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section 
      className="min-h-[75vh] flex flex-col justify-center items-center text-center 
                 bg-gradient-to-b from-[#2a2a2b] to-[#272626] 
                 text-[#D8E9A8] px-4 md:px-6 relative
                 "
    >
      {/* Headline */}
      <h1
        data-aos="fade-down"
        data-aos-delay="400"
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 
                   drop-shadow-lg leading-tight mt-20"
      >
        Hi, I'm Quadri
      </h1>

      {/* Role / Subtitle */}
      <p
        data-aos="fade-up"
        className="text-base sm:text-lg md:text-2xl drop-shadow 
                   break-words max-w-xl mt-8" 
      >
        Junior Developer | Frontend (React, Vite, Java) | Telecom Engineering
      </p>

      {/* Buttons */}
      <div
        data-aos="zoom-in"
        className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-[#191919] hover:bg-[#4E9F3D] 
                     border border-[#D8E9A8] text-[#D8E9A8] font-semibold 
                     rounded-full shadow-lg transition-transform duration-300 text-center"
        >
          Projects
        </a>
        <a
          href="/CV.pdf"
          download
          className="px-6 py-3 bg-[#191919] hover:bg-[#4E9F3D] 
                     border border-[#D8E9A8] text-[#D8E9A8] font-semibold 
                     rounded-full shadow-lg transition-transform duration-300 text-center"
        >
          Resume
        </a>
      </div>

      {/* Social Links */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex gap-6 mt-14 text-2xl justify-center"
      >
        <a
          href="https://github.com/Ayotundequest"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#86e873] transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/quadri-akinjole-a31519238"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#86e873] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:quadriakinjole@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#86e873] transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
