const educationData = [
  {
    degree: "M.Tech – Machine Design",
    college: "Sri Vasavi Engineering College",
    score: "CGPA: 8.10",
  },
  {
    degree: "B.Tech – Mechanical Engineering",
    college: "Sagi Rama Krishnam Raju Engineering College",
    score: "CGPA: 6.29",
  },
  {
    degree: "Intermediate",
    college: "A.P.S.W.R CE School, Madhurawada",
    score: "Score: 849",
  },
  {
    degree: "SSC",
    college: "A.P.S.W.R CE School, Madhurawada",
    score: "CGPA: 9.2",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-20 bg-[#0b1120]"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Education
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">
              {edu.degree}
            </h3>

            <p className="text-cyan-300 mt-2">
              {edu.college}
            </p>

            <p className="text-gray-400 mt-3">
              {edu.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;