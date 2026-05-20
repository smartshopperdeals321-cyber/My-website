const competencies = [
  {
    title: "Ecommerce Operations",
    skills: [
      "End-to-End D2C & B2B Order Management",
      "OMS / WMS Operations",
      "Pick-Pack-QC-Dispatch Workflows",
      "Courier Allocation & Automation",
      "Same-Day Pickup Coordination",
      "OTIF Optimization",
      "SLA Monitoring",
      "EDD Optimization",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    skills: [
      "3PL Negotiations & Onboarding",
      "RTO Reduction Strategies",
      "NDR Management",
      "COD Risk Mitigation",
      "International Shipping Coordination",
      "Last Mile Optimization",
      "Freight Cost Optimization",
      "Warehouse Coordination",
    ],
  },
  {
    title: "Vendor & Category Management",
    skills: [
      "Vendor Onboarding & Expansion",
      "Product Listing & Catalog Management",
      "SKU Standardization",
      "Inventory Planning",
      "Margin Improvement Initiatives",
      "Pricing Strategy Support",
    ],
  },
  {
    title: "Website & Technical Management",
    skills: [
      "WordPress & WooCommerce",
      "Plugin Installation",
      "Shipping Rules Configuration",
      "Payment Gateway Monitoring",
      "Landing Page Creation",
      "UI/UX Testing",
      "Feature Deployment",
    ],
  },
  {
    title: "Growth & Marketing",
    skills: [
      "SEO Optimization",
      "Conversion Rate Optimization (CRO)",
      "Abandoned Cart Recovery",
      "Loyalty Program Implementation",
      "Influencer Coordination",
      "Customer Review Management",
    ],
  },
  {
    title: "Analytics & Tools",
    skills: [
      "Power BI",
      "Advanced Excel",
      "Google Sheets",
      "SQL (Intermediate)",
      "Performance Benchmarking",
      "Data-driven Decision Making",
    ],
  },
];

const Competencies = () => {
  return (
    <section
      id="competencies"
      className="py-20 px-6 md:px-20 bg-[#050816]"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Core Competencies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competencies.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              {item.title}
            </h3>

            <ul className="space-y-2 text-gray-300">
              {item.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;