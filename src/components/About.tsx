'use client';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-yellow-700">Ram Enterprises</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for solar energy solutions and sustainable power
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Professional Solar Energy Expertise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ram Enterprises provides comprehensive solar energy systems, installation, maintenance, and consulting services in Fatehpur and surrounding areas for over 10 years. We specialize in on-grid and off-grid solar solutions for residential, commercial, and industrial applications with focus on efficiency and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-700 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">💡 Our Mission</h4>
                <p className="text-yellow-100 leading-relaxed">
                  To provide affordable, reliable, and high-efficiency solar energy solutions that reduce costs and environmental impact while ensuring customer satisfaction.
                </p>
              </div>

              <div className="bg-blue-700 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">🎯 Our Vision</h4>
                <p className="text-blue-100 leading-relaxed">
                  To be the leading solar energy provider in Uttar Pradesh, known for innovation, quality, and commitment to renewable energy adoption.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-700 to-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Ram Solar Energy?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Expert Team</h4>
                    <p className="text-yellow-100">10+ years of solar energy expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Quality Systems</h4>
                    <p className="text-yellow-100">Premium components and installations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Reliable Support</h4>
                    <p className="text-yellow-100">24/7 maintenance and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Cost Effective</h4>
                    <p className="text-yellow-100">Affordable solar energy solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
