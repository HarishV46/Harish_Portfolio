import { useState, useCallback } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import CTA from "@/components/portfolio/CTA";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import SplashScreen from "@/components/portfolio/SplashScreen";
import gradientBg from "@/assets/gradient-bg.png";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleSplashComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`min-h-screen bg-background text-foreground relative transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        {/* Global gradient background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img src={gradientBg} alt="" className="w-full h-full object-cover opacity-25 dark:opacity-25" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <CTA />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default Index;
