const skills = [
  "Ecommerce Operations",
  "Supply Chain",
  "Data Analytics",
  "SEO",
  "CRO",
  "Vendor Management",
  "Inventory Management",
  "Excel",
  "Google Sheets",
  "Power BI",
  "ChatGPT",
  "Automation",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#07101f]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-cyan-500/10 rounded-2xl p-5 text-center hover:border-cyan-400 hover:-translate-y-2 transition"
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