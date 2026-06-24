'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in <span className="text-yellow-700">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              Contact us for solar energy solutions and consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-yellow-700">📞</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Phone</h4>
                  <a href="tel:+919628679606" className="text-yellow-700 font-semibold hover:text-yellow-800">
                    +91 96286 79606
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-yellow-700">📧</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                  <a href="mailto:rm00231@gmail.com" className="text-yellow-700 font-semibold hover:text-yellow-800">
                    rm00231@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-yellow-700">📍</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">
                    55, Pattharkata Chauraha<br />
                    Civil Lines, Fatehpur<br />
                    Uttar Pradesh 212601
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-yellow-700">⏰</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919628679606"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-8 border border-yellow-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                    placeholder="Subject of inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-700 text-white py-3 rounded-lg font-bold hover:bg-yellow-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
