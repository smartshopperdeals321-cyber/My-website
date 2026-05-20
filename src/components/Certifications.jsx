const certifications = [
  "Google Data Analytics",
  "Power BI Workshop",
  "WooCommerce Essentials",
  "AI Tools & ChatGPT Workshop",
  "Inventory Management - HP LIFE",
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-6 md:px-20 bg-[#050816]"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:scale-105 transition"
          >
            <p className="text-white text-lg">
              {cert}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;