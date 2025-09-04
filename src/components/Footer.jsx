import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © 2025 Quadri Akinjole. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Ayotundequest"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition-colors"
          >
           <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/quadri-akinjole-a31519238"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gray-400 transition-colors"
          >
          <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:akinjolequadri@gmail.com.com"
            className="flex items-center gap-2 hover:text-gray-400 transition-colors"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
