import { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration
      once: false,        // re-animate on scroll
      easing: "ease-in-out", // smooth motion
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#272626] to-[#272626]"
    >
      <div
        className="max-w-2xl mx-auto bg-[#300f0f] border border-[#D8E9A8] p-10 rounded-2xl shadow-lg text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D8E9A8]">
          Contact
        </h2>
        <p className="text-lg md:text-xl mb-6 text-[#D8E9A8]">
          Let’s connect! Reach me on{" "}
          <a
            href="https://www.linkedin.com/in/quadri-akinjole-a31519238"
            target="_blank"
            rel="noreferrer"
            className="text-[#D8E9A8] hover:underline"
          >
            LinkedIn
          </a>{" "}
          or check my{" "}
          <a
            href="https://github.com/Ayotundequest"
            target="_blank"
            rel="noreferrer"
            className="text-[#D8E9A8] hover:underline"
          >
            GitHub
          </a>.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="mailto:akinjolequadri@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] text-[#D8E9A8] rounded-full shadow-lg hover:scale-105 hover:bg-[#4E9F3D] border border-[#D8E9A8] transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <FaEnvelope /> Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
