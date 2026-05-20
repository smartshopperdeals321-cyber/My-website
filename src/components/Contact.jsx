const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#07101f]"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Contact
        </h2>

        <div className="bg-[#0f172a] p-10 rounded-3xl border border-cyan-500/10">

          <p className="text-gray-300 text-lg mb-4">
            📧 madhavanjobplace@gmail.com
          </p>

          <p className="text-gray-300 text-lg mb-4">
            📞 7032525595
          </p>

          <p className="text-gray-300 text-lg mb-8">
            📍 Tadepalligudem, Andhra Pradesh, India
          </p>

          <a
            href="https://www.linkedin.com/in/arugolanu-madhavan-6300a1151/"
            target="_blank"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            LinkedIn Profile
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;