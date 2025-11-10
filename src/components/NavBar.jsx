import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-transparent text-[#D8E9A8] backdrop-blur-sm transition-all duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="font-bold text-2xl">QuadriDev</h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="https://resume.ankitydv.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 relative group"
              >
                RESUME
              </a>
              <a
                href="https://heyankit.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 relative group"
              >
                MEMOIR
              </a>
              <a
                href="https://github.com/Ayotundequest"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 relative group"
              >
                <FaGithub className="text-lg" /> GITHUB
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center space-x-4">
              <a
                href="https://github.com/Ayotundequest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neon-cyan hover:text-neon-blue transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
              </a>

              <button
                onClick={toggleMenu}
                className="p-2 text-neon-cyan hover:text-neon-blue transition-colors duration-300 relative group"
              >
                {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Glass Dropdown (Mobile) */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 rounded-b-lg ${
            menuOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-row justify-around items-center">
            <a
              href="https://resume.ankitydv.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-blue text-lg px-4"
              onClick={() => setMenuOpen(false)}
            >
              RESUME
            </a>
            <a
              href="https://heyankit.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-blue text-lg px-4"
              onClick={() => setMenuOpen(false)}
            >
              MEMOIR
            </a>
            <a
              href="https://github.com/Ayotundequest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-blue text-lg px-4 flex items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
              <FaGithub /> GITHUB
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
