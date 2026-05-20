function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px",
      backgroundColor: "#f5f5f5",
      color: "#222",
      lineHeight: "1.8"
    }}>

      {/* HERO SECTION */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Madhavan Arugolanu
        </h1>

        <h2 style={{ color: "#555" }}>
          Ecommerce Operations & Supply Chain Specialist
        </h2>

        <p style={{ maxWidth: "800px", marginTop: "20px" }}>
          Results-driven ecommerce professional with experience in D2C operations,
          logistics management, vendor growth, WooCommerce management,
          SEO optimization, and supply chain coordination.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a
            href="mailto:madhavanjobplace@gmail.com"
            style={{
              padding: "12px 20px",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              marginRight: "10px",
              borderRadius: "6px"
            }}
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/arugolanu-madhavan-6300a1151/"
            target="_blank"
            style={{
              padding: "12px 20px",
              backgroundColor: "#0077b5",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px"
            }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: "60px" }}>
        <h2>About Me</h2>

        <p>
          I specialize in ecommerce operations, logistics optimization,
          vendor management, and WooCommerce website management.
          At GannuG Ebusiness Pvt Ltd, I helped scale vendor operations
          from 5 to 43 vendors and expanded product listings
          from 60 to 360+ SKUs.
        </p>
      </section>

      {/* SKILLS */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Skills</h2>

        <ul>
          <li>Ecommerce Operations</li>
          <li>Vendor Management</li>
          <li>Supply Chain Coordination</li>
          <li>WooCommerce & WordPress</li>
          <li>SEO & CRO</li>
          <li>Power BI & Excel</li>
          <li>SQL</li>
          <li>Logistics & Courier Coordination</li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Experience</h2>

        <h3>Lead Operations Specialist — GannuG Ebusiness Pvt Ltd</h3>

        <p>Aug 2023 – Present</p>

        <ul>
          <li>Scaled vendor network from 5 to 43 vendors</li>
          <li>Expanded catalog from 60 to 360+ SKUs</li>
          <li>Managed end-to-end ecommerce operations</li>
          <li>Handled logistics and courier optimization</li>
          <li>Managed WooCommerce backend and SEO optimization</li>
        </ul>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Certifications</h2>

        <ul>
          <li>Lean Six Sigma Black Belt</li>
          <li>Power BI Course</li>
          <li>WooCommerce Essentials</li>
          <li>AI Tools & ChatGPT Workshop</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>

        <p>Email: madhavanjobplace@gmail.com</p>

        <p>Location: Andhra Pradesh, India</p>
      </section>

    </div>
  );
}

export default App;