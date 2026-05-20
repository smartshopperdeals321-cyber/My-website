import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Competencies />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import Education from "./components/Education";
import Publications from "./components/Publications";
import Competencies from "./components/Competencies";
