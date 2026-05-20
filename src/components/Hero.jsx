import { FiLinkedin, FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Madhavan <br />
            Arugolanu
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            E-Commerce Operations | Supply Chain | Data Analytics
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-8">
            Results-driven ecommerce operations professional experienced in D2C operations,
            logistics optimization, vendor management, WooCommerce, SEO, CRO,
            Power BI analytics, and business scaling.
          </p>

          <div className="flex gap-5 flex-wrap">
            <a
              href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition duration-300"
            >
                Download Resume
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">43+</h3>
            <p className="text-slate-300">Vendors Managed</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">360+</h3>
            <p className="text-slate-300">SKUs Scaled</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">15%</h3>
            <p className="text-slate-300">Logistics Cost Reduction</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">99%</h3>
            <p className="text-slate-300">Data Accuracy</p>
          </div>

        </div>

      </div>
    </section>
  );
};
<img
  src={profile}
  alt="Madhavan"
  className="w-80 rounded-3xl border border-cyan-400"
/>
export default Hero;
