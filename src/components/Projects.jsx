import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Built a responsive portfolio website using React, Vite, and Tailwind CSS to showcase my projects and skills.",
      site: "https://my-portfolio-nine-bay-3o2yrcxz30.vercel.app/", // <-- live site 
      github: "https://github.com/Ayotundequest/my-portfolio.git", // <-- GitHub link 
    },
    {
      title: "VAS Detailing Website",
      desc: "A fully-responsive, WCAG-compliant web app for VAS Detailing built with React + Tailwind CSS (frontend) and Node/Express (backend).",
      site: "https://vas-detailing.vercel.app/",
      github: "https://github.com/Ayotundequest/vas-detailing.git",
    },
    {
      title: "Adaptive Route Evolution (Geospatial)",
      desc: "Built the simulation framework for the research study titled: Geospatial Algorithm with Adaptive Route Evolution.",
      site: "https://adaptive-route-evolution.vercel.app/",
      github: "https://github.com/Ayotundequest/Adaptive-Route-Evolution.git",
    },
    {
      title: "Frontend Dashboard",
      desc: "Developed a frontend dashboard with React and Vite, integrating APIs for real-time data visualization.",
      site: "#", // 
      github: "#",
    },
    {
      title: "Telecom Troubleshooting Tool",
      desc: "Created a network troubleshooting helper for SMEs, simulating PPPoE setup and MikroTik configurations.",
      site: "#",
      github: "#",
    },
  ];

  // open URL in a new tab safely
  const openInNewTab = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#272626] to-[#272626]"
    >
      <div className="max-w-6xl mx-auto" data-aos="zoom-out-up">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#D8E9A8]"
          data-aos="flip-up"
          data-aos-delay="200"
        >
          Projects
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                     gap-8 sm:gap-10 place-items-center"
        >
          {projectList.map((project, index) => {
            const hasSite = project.site && project.site !== "#";
            return (
              <div
                key={index}
                data-aos="flip-right"
                data-aos-delay={index * 150}
                role={hasSite ? "link" : undefined}
                tabIndex={hasSite ? 0 : -1}
                aria-label={hasSite ? `Open ${project.title} site` : project.title}
                onClick={() => hasSite && openInNewTab(project.site)}
                onKeyDown={(e) => {
                  if (!hasSite) return;
                  // activate on Enter or Space
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openInNewTab(project.site);
                  }
                }}
                className={`bg-[#191919] border border-[#D8E9A8] rounded-2xl shadow-lg 
                           w-full sm:w-[90%] md:w-full lg:w-full p-6 
                           transform hover:scale-105 transition-transform duration-300 
                           hover:shadow-[#D8E9A8]/40 hover:shadow-xl cursor-pointer`}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#D8E9A8]">
                  {project.title}
                </h3>
                <p className="text-[#D8E9A8] mb-4 text-sm sm:text-base">
                  {project.desc}
                </p>

                {/* Keep GitHub as a normal anchor. Stop propagation so clicking it doesn't open the site */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  className="text-[#BED754] font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
