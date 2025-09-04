export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Built a responsive portfolio website using React, Vite, and Tailwind CSS to showcase my projects and skills.",
      link: "https://github.com/Ayotundequest/my-portfolio.git",
    },
    {
      title: "Frontend Dashboard",
      desc: "Developed a frontend dashboard with React and Vite, integrating APIs for real-time data visualization.",
      link: "#",
    },
    {
      title: "Telecom Troubleshooting Tool",
      desc: "Created a network troubleshooting helper for SMEs, simulating PPPoE setup and MikroTik configurations.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.desc}</p>
              <a href={project.link} className="text-indigo-600 font-medium hover:underline">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
