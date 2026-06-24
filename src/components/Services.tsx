'use client';

const Services = () => {
  const services = [
    {
      icon: '☀️',
      title: 'On-Grid Solar',
      description: 'Grid-connected solar systems with net metering benefits'
    },
    {
      icon: '⚡',
      title: 'Off-Grid Solar',
      description: 'Independent solar systems with battery storage'
    },
    {
      icon: '🔌',
      title: 'Solar Panels',
      description: 'High-efficiency solar panels for maximum output'
    },
    {
      icon: '🔧',
      title: 'Installation',
      description: 'Professional solar system installation and setup'
    },
    {
      icon: '🛠️',
      title: 'Maintenance',
      description: 'Regular maintenance and system monitoring'
    },
    {
      icon: '💼',
      title: 'Consulting',
      description: 'Expert consultation for solar energy solutions'
    },
    {
      icon: '🏢',
      title: 'Commercial Solutions',
      description: 'Large-scale solar systems for businesses'
    },
    {
      icon: '🏭',
      title: 'Industrial Systems',
      description: 'Customized solar solutions for industries'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-yellow-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete solar energy solutions for all your power needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-700 to-blue-600 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Go Solar?</h3>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Contact Ram Enterprises for professional solar energy systems and installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919628679606"
              className="inline-block bg-white text-yellow-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919628679606"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
