const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#020817]/90 backdrop-blur-md z-50 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          Madhavan
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;