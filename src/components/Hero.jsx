import profile from "../assets/profile.jpg";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#07111f] to-slate-900">

      {/* Animated Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-full mb-6">

            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-cyan-300 text-sm">
              Available for Opportunities
            </span>

          </div>

          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Madhavan <br />
            <span className="text-cyan-400">
              Arugolanu
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Ecommerce Operations Specialist",
                2000,
                "Supply Chain Professional",
                2000,
                "Data Analytics Enthusiast",
                2000,
                "WooCommerce Operations Expert",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg leading-8 mb-8 max-w-2xl">
            Passionate about ecommerce operations, logistics optimization,
            vendor management, automation, analytics, SEO, CRO,
            and scalable business systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-black font-semibold transition hover:scale-105 shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-4 rounded-2xl transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl text-gray-400">

            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-cyan-400 hover:scale-110 transition" />
            </a>

            <a href="https://github.com" target="_blank">
              <FaGithub className="hover:text-cyan-400 hover:scale-110 transition" />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Profile Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
              src={profile}
              alt="Madhavan"
              className="relative w-80 md:w-[420px] rounded-3xl border border-cyan-400/30 shadow-2xl object-cover"
            />

          </div>

          {/* Floating Stats Cards */}

          <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-400">
              46+
            </h3>
            <p className="text-sm text-gray-300">
              Vendors Managed
            </p>
          </div>

          <div className="absolute bottom-10 -right-10 bg-white/10 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-400">
              450+
            </h3>
            <p className="text-sm text-gray-300">
              SKUs Scaled
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;