'use client';

import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

const testimonials = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    location: "Home Owner, Delhi",
    gradient: "from-blue-400 to-green-400",
    text: "Ram Solar Energy helped us reduce our electricity bills by 70%! The installation was smooth and the team was very professional. Highly recommended!"
  },
  {
    initials: "PJ",
    name: "Priya Joshi",
    location: "Business Owner, Mumbai",
    gradient: "from-green-400 to-blue-400",
    text: "Excellent service from start to finish. The team answered all my questions and the ROI has been fantastic. Best investment I made for my business!"
  },
  {
    initials: "AV",
    name: "Amit Verma",
    location: "Homeowner, Bangalore",
    gradient: "from-yellow-400 to-green-400",
    text: "The solar panels are working perfectly! The after-sales support is amazing. I saved a lot on my power bills and love the eco-friendly solution."
  },
  {
    initials: "SS",
    name: "Sneha Singh",
    location: "Homeowner, Pune",
    gradient: "from-purple-400 to-blue-400",
    text: "Outstanding experience! The team was knowledgeable and guided me through every step. My energy costs have dropped significantly since installation."
  },
  {
    initials: "VK",
    name: "Vikram Kapoor",
    location: "Business Owner, Hyderabad",
    gradient: "from-red-400 to-yellow-400",
    text: "Ram Solar Energy transformed our facility! Not only are we saving money, but we're also contributing to a cleaner environment. Truly exceptional service!"
  },
  {
    initials: "MS",
    name: "Meera Sharma",
    location: "Home Owner, Kolkata",
    gradient: "from-green-400 to-teal-400",
    text: "Five stars all the way! The installation team was courteous and professional. My family couldn't be happier with our solar setup and the cost savings."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Testimonials Section */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">What Our Customers Say</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Real experiences from satisfied solar energy users</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with Solar Energy Tips</h2>
            <p className="text-green-100 mb-8 text-lg">Subscribe to our newsletter for exclusive offers, expert tips, and the latest in renewable energy technology</p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-green-100 text-sm mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>

        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
