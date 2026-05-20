const certifications = [
  "Lean Six Sigma Black Belt – Infosys Springboard",
  "AI for Beginners – HP LIFE",
  "Inventory Management – HP LIFE",
  "WordPress Basics – Infosys Springboard",
  "WooCommerce Essentials",
  "AI Tools & ChatGPT Workshop – be10X",
  "Power BI Course – Simplilearn",
  "Ecommerce Listing Course – Simplilearn",
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-[#020817]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-400 transition"
            >
              <p className="text-gray-300">
                {cert}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;