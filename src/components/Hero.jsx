import { FiLinkedin, FiDownload } from "react-icons/fi";
import profile from "../assets/profile.jpg";
const Hero = () => {
  return (
  <section className="min-h-screen flex items-center bg-slate-950">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <p className="text-cyan-400 text-xl mb-4">
        Hello, I'm
      </p>

      <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
        Madhavan <br />
        Arugolanu
      </h1>

      <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
        Ecommerce Operations | Supply Chain | Data Analytics
      </h2>

      <p className="text-slate-400 text-lg leading-8 mb-8">
        Results-driven ecommerce operations specialist experienced in
        D2C operations, logistics optimization, vendor management,
        analytics, WooCommerce, SEO, and business scaling.
      </p>

      <div className="flex flex-wrap gap-4">

        <a
          href="/resume.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl text-black font-semibold transition"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl transition"
        >
          Contact Me
        </a>

      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="flex justify-center">

      <div className="relative">

        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

        <img
          src={profile}
          alt="Madhavan"
          className="relative w-72 md:w-96 rounded-3xl border border-cyan-400 shadow-2xl object-cover"
        />

      </div>

    </div>

  </div>
</section>
  );
};

export default Hero;