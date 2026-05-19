export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">Madhavan's Website</h1>

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-28"
      >
        <h2 className="text-6xl font-extrabold mb-6 leading-tight">
          Build Your Dream Website
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg mb-10">
          A modern responsive website built using React and Tailwind CSS.
          Fast, clean, and completely free.
        </p>

        <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12"
      >
        <div>
          <h3 className="text-4xl font-bold mb-6 text-cyan-400">About Us</h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            We create modern websites that look amazing on all devices.
            This template is simple to customize and perfect for portfolios,
            startups, businesses, and personal brands.
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-10 border border-gray-800">
          <h4 className="text-2xl font-semibold mb-4">Why Choose Us?</h4>

          <ul className="space-y-4 text-gray-400">
            <li>✔ Responsive Design</li>
            <li>✔ Modern UI</li>
            <li>✔ Fast Performance</li>
            <li>✔ Easy Customization</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-950 py-24 px-6">
        <h3 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:scale-105 transition">
            <h4 className="text-2xl font-semibold mb-4">Web Design</h4>
            <p className="text-gray-400">
              Beautiful and modern website designs tailored for your brand.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:scale-105 transition">
            <h4 className="text-2xl font-semibold mb-4">Development</h4>
            <p className="text-gray-400">
              Fast and scalable React websites with modern technologies.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:scale-105 transition">
            <h4 className="text-2xl font-semibold mb-4">SEO Optimization</h4>
            <p className="text-gray-400">
              Improve your search rankings and grow your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <h3 className="text-4xl font-bold mb-6 text-cyan-400">
          Contact Us
        </h3>

        <p className="text-gray-400 mb-10 text-lg">
          Add your email, phone number, or social links here.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
          Contact Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 My Website. All rights reserved.
      </footer>
    </div>
  )
}
