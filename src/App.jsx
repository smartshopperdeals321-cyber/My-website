import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">Madhavan</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-text">
          <h2>Hello, I'm</h2>

          <h1>Madhavan Arugolanu</h1>

          <h3>
            Aspiring Data Analyst | Operations & E-commerce Professional
          </h3>

          <p>
            Passionate about analytics, automation, e-commerce,
            business operations, and AI tools.
          </p>

          <div className="buttons">
            <button>View Resume</button>
            <button className="secondary">Contact Me</button>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>

        <p>
          I have experience in e-commerce operations, logistics,
          customer support, analytics, and business coordination.
          I am currently building strong skills in Data Analytics,
          Power BI, SQL, Excel, and AI tools.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="card">Excel</div>
          <div className="card">Power BI</div>
          <div className="card">SQL</div>
          <div className="card">Data Analysis</div>
          <div className="card">E-commerce</div>
          <div className="card">AI Tools</div>
          <div className="card">Operations</div>
          <div className="card">Customer Support</div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <h2>Certifications</h2>

        <div className="skills-grid">

          <div className="card">Lean Six Sigma Black Belt</div>
          <div className="card">Power BI Course</div>
          <div className="card">WooCommerce Essentials</div>
          <div className="card">AI Tools & ChatGPT Workshop</div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>

        <p>Email: madhavanjobplace@gmail.com</p>

        <p>Location: Andhra Pradesh, India</p>
      </section>

    </div>
  );
}

export default App;
