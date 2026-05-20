import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-cyan-400">
          Madhavan
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>

        <div className="flex gap-4 text-xl">
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

          <a href="https://github.com" target="_blank">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
<a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="hover:text-cyan-400 transition"
>
  Resume
</a>