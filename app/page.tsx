import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
