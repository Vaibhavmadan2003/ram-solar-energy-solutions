'use client';

const Hero = () => {
  return (
    <section className="pt-40 pb-20 bg-gradient-to-br from-yellow-600 via-yellow-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-yellow-500/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-yellow-300/30">
              <span className="text-sm font-semibold">☀️ TRUSTED SOLAR ENERGY SOLUTIONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-yellow-200">Ram Enterprises</span><br />Solar Energy Solutions
            </h1>
            <p className="text-xl text-yellow-50 mb-8 leading-relaxed">
              Professional solar energy systems, installation, maintenance, and consulting services. On-grid and off-grid solar solutions for residential, commercial, and industrial applications in Uttar Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919628679606"
                className="inline-flex items-center justify-center bg-white text-yellow-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                📞 Get Quote Now
              </a>
              <a
                href="https://wa.me/919628679606"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                💬 Quick Message
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-yellow-200 mb-2">500+</div>
              <p className="text-yellow-100 font-semibold">Systems Installed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-yellow-200 mb-2">10+</div>
              <p className="text-yellow-100 font-semibold">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-yellow-200 mb-2">1000+</div>
              <p className="text-yellow-100 font-semibold">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-yellow-200 mb-2">⚡</div>
              <p className="text-yellow-100 font-semibold">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
