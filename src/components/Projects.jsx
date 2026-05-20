const projects = [
  {
    title: "Ecommerce Scaling Project",
    description:
      "Scaled vendor network from 5 to 43 vendors and expanded product catalog from 60 to 360+ SKUs.",
  },
  {
    title: "RTO Reduction Strategy",
    description:
      "Implemented COD verification and proactive NDR calling process to improve delivery success rates.",
  },
  {
    title: "SEO & CRO Optimization",
    description:
      "Optimized product SEO and implemented abandoned cart recovery strategies to improve conversions.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#07101f]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-3xl p-8 border border-cyan-500/10 hover:border-cyan-400 hover:-translate-y-2 transition"
            >

              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;