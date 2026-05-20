const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-[#0b1120]"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Contact
      </h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
        <p className="text-gray-300 mb-4">
          Email: madhavanjobplace@gmail.com
        </p>

        <p className="text-gray-300 mb-4">
          Phone: +91 7032525595
        </p>

        <p className="text-gray-300 mb-6">
          Tadepalligudem, Andhra Pradesh, India
        </p>

        <a
          href="https://www.linkedin.com/in/arugolanu-madhavan-6300a1151/"
          target="_blank"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;