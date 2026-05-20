const projects = [
  {
    title: "Ecommerce Scaling Project",
    description:
      "Scaled vendor network from 5 to 43 vendors and expanded catalog from 60 to 360+ SKUs.",
  },
  {
    title: "RTO Reduction Strategy",
    description:
      "Implemented COD verification and proactive NDR calling process.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Built Power BI dashboards for sales, inventory, and operations tracking.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-[#0b1120]"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:-translate-y-3 hover:shadow-cyan-500/20 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;