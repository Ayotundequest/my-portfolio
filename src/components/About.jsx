import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // animate only once per scroll
    });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#272626] to-[#272626] "
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="max-w-4xl mx-auto bg-[#191919]/90 border border-[#D8E9A8] 
                   p-10 rounded-2xl shadow-2xl text-center backdrop-blur-sm"
      >
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-3xl md:text-4xl font-bold mb-6 text-[#D8E9A8] mt-10"
        >
          About Me
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg md:text-xl leading-relaxed text-[#D8E9A8]"
        >
          I’m a motivated Junior Developer with a strong background in software
          development and telecoms. I hold a BEng in Electrical & Electronic
          Engineering (Telecom Specialization) and am currently pursuing an MSc
          in Communication & Information Engineering with Extended Professional
          Practice at the University of Hertfordshire.
        </p>
      </div>
    </section>
  );
}
