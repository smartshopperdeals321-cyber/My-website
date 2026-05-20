const experiences = [
  {
    role: "Lead Operations Specialist",
    company: "GannuG Ebusiness Pvt Ltd",
    duration: "Aug 2023 - Present",
    points: [
      "Expanded vendor network from 5 to 43 vendors",
      "Increased product portfolio from 60 to 360+ SKUs",
      "Managed complete D2C fulfillment lifecycle",
      "Handled logistics coordination with DTDC, BlueDart, DHL, XpressBees, ShipPrime and Shipway",
      "Implemented COD verification and RTO reduction strategies",
      "Managed WordPress & WooCommerce backend",
      "Built Power BI and Excel dashboards for analytics",
    ],
  },
  {
    role: "Operations Trainee",
    company: "GannuG Ebusiness Pvt Ltd",
    duration: "May 2023 - Jul 2023",
    points: [
      "Assisted in inventory management",
      "Supported order management",
      "Vendor onboarding support",
      "Customer support handling",
    ],
  },
  {
    role: "Data Entry Specialist",
    company: "Betterzilla - Cliently",
    duration: "Feb 2023 - May 2023",
    points: [
      "Managed large datasets with 99%+ accuracy",
      "Data cleaning and validation",
      "Reporting and documentation",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#020817]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-gray-400 mt-3 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="space-y-3 text-gray-300">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;