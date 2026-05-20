const experiences = [
  {
    role: "Lead Operations Specialist",
    company: "GannuG Ebusiness Pvt Ltd",
    duration: "Aug 2023 - Present",
    points: [
      "Expanded vendor network from 5 to 46 vendors",
      "Scaled catalog from 60 to 450+ SKUs",
      "Managed ecommerce fulfillment lifecycle",
      "Handled logistics with DTDC, Delhivery, BlueDart, DHL",
      "Implemented COD verification & RTO reduction",
      "Managed WooCommerce backend",
      "Built Power BI & Excel dashboards",
    ],
  },
  {
    role: "Operations Trainee",
    company: "GannuG Ebusiness Pvt Ltd",
    duration: "May 2023 - Jul 2023",
    points: [
      "Supported inventory & vendor coordination",
      "Handled catalog operations",
      "Assisted logistics workflow",
    ],
  },
  {
    role: "Data Entry Specialist",
    company: "Betterzilla - Cliently",
    duration: "Feb 2023 - May 2023",
    points: [
      "Maintained CRM accuracy",
      "Processed large business datasets",
      "Improved operational efficiency",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-[#050816]"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Experience
      </h2>

      <div className="relative border-l border-cyan-500 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 ml-8 relative"
          >
            <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-10 top-2"></div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-cyan-300 mt-1">
                {exp.company}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {exp.duration}
              </p>

              <ul className="space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;