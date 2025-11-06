import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Teachers from "@/components/Teachers";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <Teachers />
      <Pricing />
      <Schedule />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
