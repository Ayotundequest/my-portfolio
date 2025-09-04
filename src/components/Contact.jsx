import { FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto bg-indigo-50 p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">Contact</h2>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Let’s connect! Reach me on{" "}
          <a href="https://www.linkedin.com/in/quadri-akinjole-a31519238" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            LinkedIn
          </a>{" "}
          or check my{" "}
          <a href="https://github.com/Ayotundequest" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            GitHub
          </a>.
        </p>
        <div className="flex justify-center mt-4">
        <a
           href="mailto:akinjolequadri@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition-transform duration-300"
        >
         <FaEnvelope /> Send Email
        </a>
</div>

      </div>
    </section>
  );
}
