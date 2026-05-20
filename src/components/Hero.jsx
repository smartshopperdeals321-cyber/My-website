const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        <p className="text-cyan-400 text-xl mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          Madhavan
          <span className="text-cyan-400"> Arugolanu</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
          Ecommerce Operations | Supply Chain | Data Analytics
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Passionate about ecommerce operations, logistics, automation,
          analytics, CRO, SEO, and business growth.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;