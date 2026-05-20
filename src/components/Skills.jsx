const skills = [
  "Power BI",
  "Advanced Excel",
  "Google Sheets",
  "WooCommerce",
  "WordPress",
  "SQL",
  "SEO",
  "CRO",
  "Vendor Management",
  "Logistics",
  "Supply Chain",
  "Order Management",
  "Data Analytics",
  "Inventory Management",
  "Payment Reconciliation",
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12 gradient-text">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 px-6 py-4 rounded-2xl hover:border-cyan-400 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;